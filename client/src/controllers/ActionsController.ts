export default class ActionsController {
  _dis: any;

  constructor(dispatch: any) {
    this._dis = dispatch;
  }

  checkIfLoggedIn = (): boolean => {
    return this._dis({
      type: "checkIfLoggedIn",
      payload: this._dis,
    });
  };

  verifyOneTimePassword = (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string | null
  ) => {
    evt.preventDefault();

    this._dis({
      type: "verifyOneTimePassword",
      payload: oneTimePassword,
    });
  };

  getAllActions = (): IActions => {
    return {
      checkIfLoggedIn: this.checkIfLoggedIn,
      verifyOneTimePassword: this.verifyOneTimePassword,
    };
  };
}
