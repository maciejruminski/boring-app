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
      console.log("places", places);
      // this.setUserAuthenticationOn();
      // this.setBusyOff();
      this._dispatch({ type: "setPlaces", payload: places });
    });

    this._dispatch({ type: "setFilters", payload: filterTypes });
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
    };
  };
}
