// Controllers.
import { TargetElement } from "@testing-library/user-event";
import Controller from "./Controller";
import LocalStorageController from "./LocalStorageController";

export default class ActionsController {
  _state: any;
  _dispatch: any;
  private places: [];
  private historicPlaces: [];

  constructor(state: any, dispatch: any) {
    this._dispatch = dispatch;
    this._state = state;
    this.places = state.places;
    this.historicPlaces = state.historicPlaces.places;
  }

  setUserAuthenticationOn = (): void => {
    this._dispatch({ type: "setUserAuthenticationOn" });
  };

  setUserAuthenticationOff = (): void => {
    this._dispatch({ type: "setUserAuthenticationOff" });
  };

  setUserAuthenticationFromLocalStorage = (): void => {
    this._dispatch({ type: "setUserAuthenticationFromLocalStorage" });
  };

  setBusyOn = (): void => {
    this._dispatch({ type: "setBusyOn" });
  };

  setBusyOff = (): void => {
    this._dispatch({ type: "setBusyOff" });
  };

  setFiltersModalOn = (): void => {
    this._dispatch({ type: "setFiltersModalOn" });
  };

  setFiltersModalOff = (): void => {
    this._dispatch({ type: "setFiltersModalOff" });
  };

  setSavingModalOn = (): void => {
    this._dispatch({ type: "setSavingModalOn" });
  };

  setSavingModalOff = (): void => {
    this._dispatch({ type: "setSavingModalOff" });
  };

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ): void => {
    evt.preventDefault();

    this.setBusyOn();

    Controller.verifyOneTimePassword(oneTimePassword).then((test) => {
      console.log("verified!", test);
      // this.setUserAuthenticationOn();
      // this.setBusyOff();
    });
  };

  filter = (filterTypes: TypesOfFilters): void => {
    this.setBusyOn();

    console.log("FILTERRRR");

    Controller.findPlaces(filterTypes).then((places: []) => {
      // this.setUserAuthenticationOn();
      // this.setBusyOff();
      console.log("PLACES", places);
      this._dispatch({ type: "setPlaces", payload: places });
    });

    Controller.setFilterTypesToDatabase(filterTypes).then(() => {
      console.log("filtry dodane do bazy danych!");
    });
    this._dispatch({ type: "setFilterTypes", payload: filterTypes });
  };

  setHistoricPlaces = (): void => {
    const historicPlaces = Controller.getHistoricPlacesFromLocalStorage();

    if (historicPlaces.length) {
      this._dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
      this.setBusyOff();

      return;
    }

    Controller.getHistoricPlacesFromDatabase().then(
      (historicPlaces: string) => {
        if (historicPlaces) {
          const parsedHistoricPlaces: Place[] = JSON.parse(historicPlaces);
          LocalStorageController.setHistoricPlaces(parsedHistoricPlaces);
          this._dispatch({
            type: "setHistoricPlaces",
            payload: parsedHistoricPlaces,
          });
          this.setBusyOff();
        }
      }
    );
  };

  setHistoricPlacesFromLocalStorage = (): void => {
    const historicPlaces = Controller.getHistoricPlacesFromLocalStorage();

    this._dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
  };

  addHistoricPlace = (id: string): void => {
    this.setBusyOn();

    const isHistoricPlaceSaved = Controller.checkIfHistoricPlaceSaved(id);

    isHistoricPlaceSaved.then((isSaved) => {
      if (isSaved) {
        this.setBusyOff();
        console.log("Historyczne miejsce już istnieje!");
        return;
      }

      const newHistoricPlace = Controller.getPlaceById(this.places, id);

      newHistoricPlace.isSavedAsHistoric = true;

      const historicPlaces = [...this.historicPlaces, newHistoricPlace];

      Controller.setHistoricPlaces(historicPlaces).then(() => {
        console.log("Historyczne miejsce dodane do bazy danych!");
        this._dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
        console.log("CURRENT STATE", this._state.historicPlaces);
        this.setBusyOff();
      });
    });
  };

  removeHistoricPlace = (id: string): void => {
    this.setBusyOn();

    const isHistoricPlaceSaved = Controller.checkIfHistoricPlaceSaved(id);

    

    isHistoricPlaceSaved.then((isSaved) => {
      if (isSaved) {
        const historicPlaceToRemove = Controller.getPlaceById(this.historicPlaces, id);

        const newPlaceDetails = this._state.currentPlace.details;

        newPlaceDetails.isSavedAsHistoric = false;

        // historicPlaceToRemove.isSavedAsHistoric = false;



        this._dispatch({ type: "setCurrentPlaceDetails", payload: newPlaceDetails });

        const historicPlaces: Place[] = [...this.historicPlaces].filter(
          (place: Place) => place.id !== historicPlaceToRemove.id
        );

        
        Controller.setHistoricPlaces(historicPlaces).then(() => {
          console.log("Historyczne miejsce usunięte z bazy danych!");
          this._dispatch({
            type: "setHistoricPlaces",
            payload: historicPlaces,
          });

          
          this.setBusyOff();
        });
      }
    });
  };

  setPlaceModalOn = (): void => {
    this._dispatch({ type: "setPlaceModalOn" });
  };

  setPlaceModalOff = (): void => {
    this._dispatch({ type: "setPlaceModalOff" });
  };

  setHistoricPlacesModalOn = (): void => {
    this._dispatch({ type: "setHistoricPlacesModalOn" });
  };

  setHistoricPlacesModalOff = (): void => {
    this._dispatch({ type: "setHistoricPlacesModalOff" });
  };

  getPlaceDetails = (placeId: string): void => {
    this.setBusyOn();


   

    Controller.getPlaceDetails(placeId).then((placeWithDetails) => {
      const historicPlace = Controller.getPlaceById(
        this.historicPlaces,
        placeId
      );

      console.log('GET PLACE DETAILS', placeWithDetails)

      if (placeWithDetails) {
        placeWithDetails.isSavedAsHistoric = historicPlace && true;

        // this.setBusyOff();
        this._dispatch({ type: "setCurrentPlaceDetails", payload: placeWithDetails });
      }
    });

    this._dispatch({ type: "setPlaceModalOn" });
  };

  getRandomPlace = (places: [], currentPlaceId: string): void => {
    this.setBusyOn();

    const newPlaceId = Controller.getRandomPlace(places, currentPlaceId);

    this.getPlaceDetails(newPlaceId);
  };

  setPlacesFromLocalStorage = (): void => {
    const places = Controller.getPlacesFromLocalStorage();

    this._dispatch({ type: "setPlacesFromLocalStorage", payload: places });
  };

  setFilterTypesFromLocalStorage = (): void => {
    const filterTypes = Controller.getFilterTypesFromLocalStorage();

    if (filterTypes) {
      this._dispatch({ type: "setFilterTypes", payload: filterTypes });
    }
  };

  setSignUpError = (error: string): void => {
    this._dispatch({ type: "setSignUpError", payload: error });
  };

  setSignUpEmail = (emailInput: HTMLInputElement): void => {
    const emailIsNotValid: boolean = !this.validateInput(emailInput);

    if (emailIsNotValid) {
      return;
    }

    this._dispatch({ type: "setSignUpEmail", payload: emailInput.value });
  };

  setOneTimePassword = (passwordInput: HTMLInputElement): void => {
    const passwordIsNotValid: boolean = !this.validateInput(passwordInput);

    if (passwordIsNotValid) {
      return;
    }

    this._dispatch({
      type: "setOneTimePassword",
      payload: passwordInput.value,
    });
  };

  setSignUpEmailAsSent = (): void => {
    this._dispatch({ type: "setSignUpEmailAsSent" });
  };

  validateInput = (input: HTMLInputElement): boolean => {
    const inputIsNotValid = !Controller.validateInput(input);

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

    Controller.sendPassword(email).then(() => {
      this.setBusyOff();
      this.setSignUpEmailAsSent();
    });
  };

  getAllActions = (): IActions => {
    return {
      setUserAuthenticationOn: this.setUserAuthenticationOn,
      setUserAuthenticationOff: this.setUserAuthenticationOff,
      setUserAuthenticationFromLocalStorage:
        this.setUserAuthenticationFromLocalStorage,
      verifyOneTimePassword: this.verifyOneTimePassword,
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      filter: this.filter,
      setFiltersModalOn: this.setFiltersModalOn,
      setFiltersModalOff: this.setFiltersModalOff,
      setSavingModalOn: this.setSavingModalOn,
      setSavingModalOff: this.setSavingModalOff,
      setPlaceModalOn: this.setPlaceModalOn,
      setPlaceModalOff: this.setPlaceModalOff,
      getPlaceDetails: this.getPlaceDetails,
      getRandomPlace: this.getRandomPlace,
      setPlacesFromLocalStorage: this.setPlacesFromLocalStorage,
      setFilterTypesFromLocalStorage: this.setFilterTypesFromLocalStorage,
      validateInput: this.validateInput,
      setSignUpEmail: this.setSignUpEmail,
      setSignUpEmailAsSent: this.setSignUpEmailAsSent,
      inputOnChange: this.inputOnChange,
      sendPassword: this.sendPassword,
      setOneTimePassword: this.setOneTimePassword,
      addHistoricPlace: this.addHistoricPlace,
      removeHistoricPlace: this.removeHistoricPlace,
      setHistoricPlaces: this.setHistoricPlaces,
      setHistoricPlacesFromLocalStorage: this.setHistoricPlacesFromLocalStorage,
      setHistoricPlacesModalOn: this.setHistoricPlacesModalOn,
      setHistoricPlacesModalOff: this.setHistoricPlacesModalOff,
    };
  };
}
