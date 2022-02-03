// Controllers.
import Helper from "./Helper";
import LocalStorage from "./LocalStorage";
import API from "./API";

export default class Actions {
  private state: IState;
  private dispatch: React.Dispatch<IAction>;
  private places: Place[];
  private historicPlaces: Place[];

  constructor(state: IState, dispatch: React.Dispatch<IAction>) {
    this.dispatch = dispatch;
    this.state = state;
    this.places = state.places;
    this.historicPlaces = state.historicPlaces;
  }

  setUserAuthenticationOn = (): void => {
    this.dispatch({ type: "setUserAuthenticationOn" });
  };

  setUserAuthenticationOff = (): void => {
    this.dispatch({ type: "setUserAuthenticationOff" });
  };

  setUserAuthenticationByLocalStorage = (): void => {
    LocalStorage.getUserAuthentication()
      ? this.setUserAuthenticationOn()
      : this.setUserAuthenticationOff();
  };

  setBusyOn = (): void => {
    this.dispatch({ type: "setBusyOn" });
  };

  setBusyOff = (): void => {
    this.dispatch({ type: "setBusyOff" });
  };

  setFiltersModalOn = (): void => {
    this.dispatch({ type: "setFiltersModalOn" });
  };

  setFiltersModalOff = (): void => {
    this.dispatch({ type: "setFiltersModalOff" });
  };

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ): void => {
    evt.preventDefault();

    this.setBusyOn();

    Helper.verifyOneTimePassword(oneTimePassword).then((test) => {
      // this.setUserAuthenticationOn();
      // this.setBusyOff();
    });
  };

  setFiltersAndNewPlaces = async (): Promise<void> => {
    const filters = LocalStorage.getFilters();
    const areLocalStorageFiltersExist = Object.keys(filters).length !== 0;
    const placesFromLocalStorage = LocalStorage.getPlaces();

    if (areLocalStorageFiltersExist) {
      this.dispatch({ type: "setFilters", payload: filters });
    }

    if (areLocalStorageFiltersExist && placesFromLocalStorage.length) {
      this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });
      this.setMaximumNumberOfPlaces(placesFromLocalStorage.length);

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      this.setBusyOn();
      let response = await API.getFilters(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      const parsedFilters: Filters = JSON.parse(response.filters);

      LocalStorage.setFilters(parsedFilters);
      this.dispatch({ type: "setFilters", payload: parsedFilters });

      this.setPlacesByFilters(parsedFilters);
    }
  };

  setPlacesByFilters = async (filters: Filters): Promise<void> => {
    const response = await API.getPlaces(filters);

    if (Helper.statusIsNotOk(response.status)) {
      return;
    }

    const places = response.places;

    LocalStorage.setPlaces(places);
    this.dispatch({ type: "setPlaces", payload: places });
    this.setMaximumNumberOfPlaces(places.length);
    this.setNumberOfPlacesButtonVisibility();
    this.setBusyOff();
  };

  setFilters = async (): Promise<void> => {
    const filters = LocalStorage.getFilters();
    const filtersAreNotEmpty = Object.keys(filters).length !== 0;

    if (filtersAreNotEmpty) {
      this.dispatch({ type: "setFilters", payload: filters });

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getFilters(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      const parsedFilters: Filters = JSON.parse(response.filters);
      LocalStorage.setFilters(parsedFilters);
      this.dispatch({ type: "setFilters", payload: parsedFilters });
      this.setBusyOff();
    }
  };

  filterForNewPlacesByFilters = async (filters: Filters): Promise<void> => {
    this.setBusyOn();

    const filtersAreEqual = Helper.comparewithLocalStorageFilters(filters);
    const placesFromLocalStorage = LocalStorage.getPlaces();

    if (filtersAreEqual && placesFromLocalStorage.length) {
      this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });
      this.setMaximumNumberOfPlaces(placesFromLocalStorage.length);
      this.setBusyOff();
      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID && !filtersAreEqual) {
      await API.addFiltersToDatabase(filters, userUUID).then(() =>
        console.log("Filtry zostały dodane do bazy danych!")
      );

      LocalStorage.setFilters(filters);
      this.dispatch({ type: "setFilters", payload: filters });
    }

    this.setPlacesByFilters(filters);
  };

  setHistoricPlaces = async (): Promise<void> => {
    const historicPlaces = LocalStorage.getHistoricPlaces();

    if (historicPlaces.length) {
      this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
      this.setBusyOff();

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getHistoricPlaces(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      const parsedHistoricPlaces: Place[] = JSON.parse(response.historicPlaces);
      LocalStorage.setHistoricPlaces(parsedHistoricPlaces);
      this.dispatch({
        type: "setHistoricPlaces",
        payload: parsedHistoricPlaces,
      });
      this.setBusyOff();

      return response.historicPlaces;
    }
  };

  addHistoricPlace = (place: Place): void => {
    this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(place.id);

    isHistoricPlaceSaved.then((isSaved) => {
      if (isSaved) {
        this.setBusyOff();
        console.log("Historyczne miejsce już istnieje!");
        return;
      }

      place.isSavedAsHistoric = true;

      // place = Helper.setAsHistoricIfPossible(place, this.historicPlaces);

      const historicPlaces = [...this.historicPlaces, place];

      Helper.setHistoricPlaces(historicPlaces).then(() => {
        console.log("Historyczne miejsce dodane do bazy danych!");
        this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
        this.setBusyOff();
      });
    });
  };

  removeHistoricPlace = (id: string): void => {
    this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(id);

    isHistoricPlaceSaved.then((isSaved) => {
      if (isSaved) {
        const historicPlaceToRemove = Helper.getPlaceById(
          this.historicPlaces,
          id
        );

        const newPlaceDetails = this.state.currentPlace;

        newPlaceDetails.isSavedAsHistoric = false;

        // historicPlaceToRemove.isSavedAsHistoric = false;

        this.setCurrentPlace(newPlaceDetails);

        const historicPlaces: Place[] = [...this.historicPlaces].filter(
          (place: Place) => place.id !== historicPlaceToRemove.id
        );

        Helper.setHistoricPlaces(historicPlaces).then(() => {
          console.log("Historyczne miejsce usunięte z bazy danych!");
          this.dispatch({
            type: "setHistoricPlaces",
            payload: historicPlaces,
          });

          this.setBusyOff();
        });
      }
    });
  };

  setCurrentPlaceModalOn = (): void => {
    this.dispatch({ type: "setCurrentPlaceModalOn" });
  };

  setCurrentPlaceModalOff = (): void => {
    this.dispatch({ type: "setCurrentPlaceModalOff" });
  };

  setHistoricPlacesModalOn = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOn" });
  };

  setHistoricPlacesModalOff = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOff" });
  };

  setCurrentPlace = (placeWithDetails: PlaceWithDetails): void => {
    this.dispatch({ type: "setCurrentPlace", payload: placeWithDetails });
  };

  getCurrentPlaceDetails = async (place: Place): Promise<void> => {
    this.setBusyOn();

    const response = await API.getCurrentPlaceDetails(place.id);

    if (Helper.statusIsNotOk(response.status)) {
      return;
    }

    const placeDetails: PlaceDetails = Helper.extractPlaceDetailsFromAPI(
      response.placeDetails
    );

    let placeWithDetails: PlaceWithDetails = { ...place, ...placeDetails };

    placeWithDetails = Helper.setAsHistoricIfPossible(
      placeWithDetails,
      this.historicPlaces
    );

    this.setCurrentPlace(placeWithDetails);
    this.setCurrentPlaceModalOn();
    this.setBusyOff();
  };

  getRandomPlaceDetails = (currentPlaceID: string): void => {
    this.setBusyOn();

    const randomPlace = Helper.getRandomPlace(this.places, currentPlaceID);

    this.getCurrentPlaceDetails(randomPlace);
  };

  // setPlacesFromLocalStorage = (): void => {
  //   const placesFromLocalStorage = LocalStorage.getPlaces();

  //   this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });
  //   this.setMaximumNumberOfPlaces(placesFromLocalStorage.length);
  // };

  setSignUpError = (error: string): void => {
    this.dispatch({ type: "setSignUpError", payload: error });
  };

  setSignUpEmail = (emailInput: HTMLInputElement): void => {
    const emailIsNotValid: boolean = !this.validateInput(emailInput);

    if (emailIsNotValid) {
      return;
    }

    this.dispatch({ type: "setSignUpEmail", payload: emailInput.value });
  };

  setOneTimePassword = (passwordInput: HTMLInputElement): void => {
    const passwordIsNotValid: boolean = !this.validateInput(passwordInput);

    if (passwordIsNotValid) {
      return;
    }

    this.dispatch({
      type: "setOneTimePassword",
      payload: passwordInput.value,
    });
  };

  setSignUpEmailAsSent = (): void => {
    this.dispatch({ type: "setSignUpEmailAsSent" });
  };

  validateInput = (input: HTMLInputElement): boolean => {
    const inputIsNotValid = !Helper.validateInput(input);

    if (inputIsNotValid) {
      this.setSignUpError(input.validationMessage);
      return false;
    }

    this.setSignUpError("");
    return true;
  };

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const input = evt.target;

    switch (input.id) {
      case "email":
        this.setSignUpEmail(input);
        break;
      case "signUpPassword":
        this.setOneTimePassword(input);
        break;
      default:
        console.log("test...");
    }
  };

  sendPassword = (email: string): void => {
    this.setBusyOn();

    Helper.sendPassword(email).then(() => {
      this.setBusyOff();
      this.setSignUpEmailAsSent();
    });
  };

  resetNumberOfPlacesToShowAtOnce = (): void => {
    this.dispatch({ type: "setNumberOfPlacesToShowAtOnce", payload: 5 });
  };

  setNumberOfPlacesToShowAtOnce = (): void => {
    const numberOfPlacesToShowAtOnceIncreaser = 5;
    const numberOfPlacesToShowAtOnce =
      this.state.numberOfPlacesToShowAtOnce +
      numberOfPlacesToShowAtOnceIncreaser;

    this.dispatch({
      type: "setNumberOfPlacesToShowAtOnce",
      payload: numberOfPlacesToShowAtOnce,
    });
  };

  setNumberOfPlacesButtonVisibility = (): void => {
    const isShowMorePlacesButtonVisible =
      this.state.places.length > this.state.numberOfPlacesToShowAtOnce;

    this.dispatch({
      type: "setNumberOfPlacesButtonVisibility",
      payload: isShowMorePlacesButtonVisible,
    });
  };

  setMaximumNumberOfPlaces = (number: number): void => {
    this.dispatch({ type: "setMaximumNumberOfPlaces", payload: number });
  };

  getAllActions = (): IActions => {
    return {
      setUserAuthenticationOn: this.setUserAuthenticationOn,
      setUserAuthenticationOff: this.setUserAuthenticationOff,
      setUserAuthenticationByLocalStorage:
        this.setUserAuthenticationByLocalStorage,
      verifyOneTimePassword: this.verifyOneTimePassword,
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      setPlacesByFilters: this.setPlacesByFilters,
      filterForNewPlacesByFilters: this.filterForNewPlacesByFilters,
      setFiltersModalOn: this.setFiltersModalOn,
      setFiltersModalOff: this.setFiltersModalOff,
      setCurrentPlaceModalOn: this.setCurrentPlaceModalOn,
      setCurrentPlaceModalOff: this.setCurrentPlaceModalOff,
      setCurrentPlace: this.setCurrentPlace,
      getCurrentPlaceDetails: this.getCurrentPlaceDetails,
      getRandomPlaceDetails: this.getRandomPlaceDetails,
      // setPlacesFromLocalStorage: this.setPlacesFromLocalStorage,
      setFilters: this.setFilters,
      setFiltersAndNewPlaces: this.setFiltersAndNewPlaces,
      // setFiltersFromLocalStorage: this.setFiltersFromLocalStorage,
      validateInput: this.validateInput,
      setSignUpEmail: this.setSignUpEmail,
      setSignUpEmailAsSent: this.setSignUpEmailAsSent,
      inputOnChange: this.inputOnChange,
      sendPassword: this.sendPassword,
      setOneTimePassword: this.setOneTimePassword,
      addHistoricPlace: this.addHistoricPlace,
      removeHistoricPlace: this.removeHistoricPlace,
      setHistoricPlaces: this.setHistoricPlaces,
      setHistoricPlacesModalOn: this.setHistoricPlacesModalOn,
      setHistoricPlacesModalOff: this.setHistoricPlacesModalOff,
      setNumberOfPlacesToShowAtOnce: this.setNumberOfPlacesToShowAtOnce,
      setMaximumNumberOfPlaces: this.setMaximumNumberOfPlaces,
      resetNumberOfPlacesToShowAtOnce: this.resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility: this.setNumberOfPlacesButtonVisibility,
    };
  };
}
