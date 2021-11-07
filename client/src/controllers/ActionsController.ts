// Controllers.
import Controller from "./Controller";

export default class ActionsController {
  _dis: any;

  constructor(dispatch: any) {
    this._dis = dispatch;
  }

  checkIfLoggedIn = (): boolean => {
    const isLoggedIn = Controller.checkIfLoggedIn();

    return this._dis({
      type: "checkIfLoggedIn",
      payload: isLoggedIn,
    });
  };

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ) => {
    evt.preventDefault();
    Controller.verifyOneTimePassword(oneTimePassword, this.checkIfLoggedIn);

    // this._dis({ type: "verifyOneTimePassword" });
  };

  getAllActions = (): IActions => {
    return {
      checkIfLoggedIn: this.checkIfLoggedIn,
      verifyOneTimePassword: this.verifyOneTimePassword,
    };
  };
}
