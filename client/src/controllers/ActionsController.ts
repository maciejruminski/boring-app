// Controllers.
import Controller from "./Controller";

export default class ActionsController {
  _dispatch: any;

  constructor(dispatch: any) {
    this._dispatch = dispatch;
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
    this._dispatch({ type: "setBusyOn" });
  };

  setFiltersModalOn = (): void => {
    this._dispatch({ type: "setFiltersModalOn" });
  };

  setFiltersModalOff = (): void => {
    this._dispatch({ type: "setFiltersModalOff" });
  };

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ): void => {
    evt.preventDefault();

    this.setBusyOn();

    Controller.verifyOneTimePassword(oneTimePassword).then((test) => {
      console.log("verified!", test);
      this.setUserAuthenticationOn();
      // this.setBusyOff();
    });
  };

  filter = (filterTypes: TypesOfFilters): void => {
    this.setBusyOn();

    Controller.findPlaces(filterTypes).then((places: []) => {
      // this.setUserAuthenticationOn();
      // this.setBusyOff();
      this._dispatch({ type: "setPlaces", payload: places });
    });

    this._dispatch({ type: "setFilterTypes", payload: filterTypes });
  };

  setPlaceModalOn = (): void => {
    this._dispatch({ type: "setPlaceModalOn" });
  };

  setPlaceModalOff = (): void => {
    this._dispatch({ type: "setPlaceModalOff" });
  };

  getPlace = (placeId: string): void => {
    this.setBusyOn();

    Controller.getPlaceDetails(placeId).then((details) => {
      // console.log("place details", details);
      // this.setBusyOff();
      this._dispatch({ type: "setCurrentPlaceDetails", payload: details });
    });

    this._dispatch({ type: "setPlaceModalOn" });
  };

  getRandomPlace = (places: [], currentPlaceId: string): void => {
    this.setBusyOn();

    const newPlaceId = Controller.getRandomPlace(places, currentPlaceId);

    this.getPlace(newPlaceId);
  };

  setPlacesFromLocalStorage = (): void => {
    const places = Controller.getPlacesFromLocalStorage();

    this._dispatch({ type: "setPlacesFromLocalStorage", payload: places });
  };

  setFilterTypesFromLocalStorage = (): void => {
    const filters = Controller.getFilterTypesFromLocalStorage();

    this._dispatch({ type: "setFilterTypesFromLocalStorage", payload: filters });
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
      setPlaceModalOn: this.setPlaceModalOn,
      setPlaceModalOff: this.setPlaceModalOff,
      getPlace: this.getPlace,
      getRandomPlace: this.getRandomPlace,
      setPlacesFromLocalStorage: this.setPlacesFromLocalStorage,
      setFilterTypesFromLocalStorage: this.setFilterTypesFromLocalStorage,
    };
  };
}
