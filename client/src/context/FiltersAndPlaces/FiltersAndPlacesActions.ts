// Functions.
import { Loader } from "@googlemaps/js-api-loader";

// Controllers.
import Helper from "@controllers/Helper";
import LocalStorage from "@controllers/LocalStorage";
import API from "@controllers/API";

// Map options.
import mapOptions from "@controllers/GoogleMap/options";

// Icons.
import personIconPath from "../images/user.svg";
import markerIconPath from "../images/marker.svg";

export default class FiltersAndPlacesActions {
  private state: IFiltersAndPlacesState;
  private dispatch: React.Dispatch<IFiltersAndPlacesAction>;
  private places: Place[];
  private historicPlaces: Place[];

  constructor(
    state: IFiltersAndPlacesState,
    dispatch: React.Dispatch<IFiltersAndPlacesAction>
  ) {
    this.dispatch = dispatch;
    this.state = state;
    this.places = state.places;
    this.historicPlaces = state.historicPlaces;
  }

  setFilters = async (): Promise<Filters | void> => {
    const filters = LocalStorage.getFilters();
    const filtersAreNotEmpty = Object.keys(filters).length !== 0;

    if (filtersAreNotEmpty) {
      this.dispatch({ type: "setFilters", payload: filters });

      return filters;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getFilters(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      const filtersAreNotEmpty = Object.keys(response.filters).length !== 0;

      if (filtersAreNotEmpty) {
        const filters: Filters = JSON.parse(response.filters);

        LocalStorage.setFilters(filters);
        this.dispatch({ type: "setFilters", payload: filters });

        return filters;
      }

      // this.setBusyOff();
    }
  };

  updateFilters = async (filters: Filters): Promise<void> => {
    const filtersAreNotEqual = !Helper.comparewithLocalStorageFilters(filters);

    if (filtersAreNotEqual) {
      this.dispatch({ type: "setFilters", payload: filters });

      LocalStorage.setFilters(filters);

      const userUUID = LocalStorage.getUserUUID();

      if (userUUID) {
        const response = await API.addFilters(filters, userUUID);

        if (Helper.statusIsNotOk(response.status)) {
          return;
        }

        console.log("Filters are saved");
      }
    }
  };

  showNewPlacesByFilters = async (filters: Filters): Promise<void> => {
    // this.setBusyOn();

    const filtersAreEqual = Helper.comparewithLocalStorageFilters(filters);
    const placesFromLocalStorage = LocalStorage.getPlaces();

    if (filtersAreEqual && placesFromLocalStorage.length) {
      this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });

      // this.setMaximumNumberOfPlaces(placesFromLocalStorage.length);
      // this.setNumberOfPlacesButtonVisibility();
      // this.setBusyOff();
      return;
    }

    const response = await API.getPlaces(filters);

    if (Helper.statusIsNotOk(response.status)) {
      return;
    }

    LocalStorage.setPlaces(response.places);

    this.dispatch({ type: "setPlaces", payload: response.places });
    // this.setMaximumNumberOfPlaces(response.places.length);
    // this.setNumberOfPlacesButtonVisibility();
    // this.setBusyOff();
  };

  setFiltersAndShowPlaces = (): void => {
    this.setFilters().then((updatedFilters: Filters | void) =>
      this.showNewPlacesByFilters(
        updatedFilters ? updatedFilters : this.state.filters
      )
    );
  };

  setHistoricPlaces = async (): Promise<void> => {
    const historicPlaces = LocalStorage.getHistoricPlaces();

    if (historicPlaces.length) {
      // this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
      // this.setBusyOff();

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getHistoricPlaces(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      if (response.historicPlaces.length) {
        const parsedHistoricPlaces: Place[] = JSON.parse(
          response.historicPlaces
        );
        LocalStorage.setHistoricPlaces(parsedHistoricPlaces);
        // this.dispatch({
        //   type: "setHistoricPlaces",
        //   payload: parsedHistoricPlaces,
        // });
      }

      // this.setBusyOff();

      return response.historicPlaces;
    }
  };

  addHistoricPlace = (place: Place): void => {
    // this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(place.id);

    isHistoricPlaceSaved.then((isSaved: any) => {
      if (isSaved) {
        // this.setBusyOff();
        console.log("Historyczne miejsce już istnieje!");
        return;
      }

      const historicPlaces = [...this.historicPlaces, place];

      Helper.setHistoricPlaces(historicPlaces).then(() => {
        console.log("Historyczne miejsce dodane do bazy danych!");
        // this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
        // this.setBusyOff();
      });
    });
  };

  removeHistoricPlace = (id: string): void => {
    // this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(id);

    isHistoricPlaceSaved.then((isSaved: any) => {
      if (isSaved) {
        const historicPlaceToRemove = Helper.getPlaceById(
          this.historicPlaces,
          id
        );

        const newPlaceDetails = this.state.currentPlace;

        this.setCurrentPlace(newPlaceDetails);

        const historicPlaces: Place[] = [...this.historicPlaces].filter(
          (place: Place) => place.id !== historicPlaceToRemove.id
        );

        Helper.setHistoricPlaces(historicPlaces).then(() => {
          console.log("Historyczne miejsce usunięte z bazy danych!");
          // this.dispatch({
          //   type: "setHistoricPlaces",
          //   payload: historicPlaces,
          // });

          // this.setBusyOff();
        });
      }
    });
  };

  setHistoricPlacesModalOn = (): void => {
    // this.dispatch({ type: "setHistoricPlacesModalOn" });
  };

  setHistoricPlacesModalOff = (): void => {
    // this.dispatch({ type: "setHistoricPlacesModalOff" });
  };

  setCurrentPlace = (placeWithDetails: PlaceWithDetails): void => {
    // this.dispatch({ type: "setCurrentPlace", payload: placeWithDetails });
  };

  getCurrentPlaceDetails = async (place: Place): Promise<void> => {
    // this.setBusyOn();

    const response = await API.getCurrentPlaceDetails(place.id);

    if (Helper.statusIsNotOk(response.status)) {
      return;
    }
    // const placeDetails: PlaceDetails = Helper.extractPlaceDetailsFromAPI(
    //   response.placeDetails
    // );

    let placeWithDetails: PlaceWithDetails = {
      ...place,
      // ...placeDetails,
    };
    console.log(placeWithDetails);

    this.setCurrentPlace(placeWithDetails);
    // this.setBusyOff();
  };

  // setPlacesFromLocalStorage = (): void => {
  //   const placesFromLocalStorage = LocalStorage.getPlaces();

  //   this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });
  //   this.setMaximumNumberOfPlaces(placesFromLocalStorage.length);
  // };

  validateInput = (input: HTMLInputElement): boolean => {
    const inputIsNotValid = !Helper.validateInput(input);

    if (inputIsNotValid) {
      // this.setSignUpError(input.validationMessage);
      return false;
    }

    // this.setSignUpError("");
    return true;
  };

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const input = evt.target;

    switch (input.id) {
      case "email":
        // this.setSignUpEmail(input);
        break;
      case "signUpPassword":
        // this.setOneTimePassword(input);
        break;
      default:
        console.log("test...");
    }
  };

  resetNumberOfPlacesToShowAtOnce = (): void => {
    // this.dispatch({ type: "setNumberOfPlacesToShowAtOnce", payload: 5 });
  };

  setNumberOfPlacesToShowAtOnce = (): void => {
    const numberOfPlacesToShowAtOnceIncreaser = 5;
    const numberOfPlacesToShowAtOnce =
      this.state.numberOfPlacesToShowAtOnce +
      numberOfPlacesToShowAtOnceIncreaser;

    // this.dispatch({
    //   type: "setNumberOfPlacesToShowAtOnce",
    //   payload: numberOfPlacesToShowAtOnce,
    // });
  };

  setNumberOfPlacesButtonVisibility = (): void => {
    const isShowMorePlacesButtonVisible =
      this.state.places.length > this.state.numberOfPlacesToShowAtOnce;

    // this.dispatch({
    //   type: "setNumberOfPlacesButtonVisibility",
    //   payload: isShowMorePlacesButtonVisible,
    // });
  };

  setMaximumNumberOfPlaces = (number: number): void => {
    this.dispatch({ type: "setMaximumNumberOfPlaces", payload: number });
  };

  getAllActions = (): IFiltersAndPlacesActions => {
    return {
      showNewPlacesByFilters: this.showNewPlacesByFilters,
      setCurrentPlace: this.setCurrentPlace,
      getCurrentPlaceDetails: this.getCurrentPlaceDetails,
      addHistoricPlace: this.addHistoricPlace,
      removeHistoricPlace: this.removeHistoricPlace,
      setHistoricPlaces: this.setHistoricPlaces,
      setHistoricPlacesModalOn: this.setHistoricPlacesModalOn,
      setHistoricPlacesModalOff: this.setHistoricPlacesModalOff,
      setNumberOfPlacesToShowAtOnce: this.setNumberOfPlacesToShowAtOnce,
      setMaximumNumberOfPlaces: this.setMaximumNumberOfPlaces,
      resetNumberOfPlacesToShowAtOnce: this.resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility: this.setNumberOfPlacesButtonVisibility,
      setFiltersAndShowPlaces: this.setFiltersAndShowPlaces,
      updateFilters: this.updateFilters,
    };
  };
}
