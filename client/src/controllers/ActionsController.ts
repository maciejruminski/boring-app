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

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ): void => {
    evt.preventDefault();

    this.setBusyOn();

    Controller.verifyOneTimePassword(oneTimePassword).then(() => {
      this.setUserAuthenticationOn();
      this.setBusyOff();
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
    };
  };
}
