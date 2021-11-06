export default class ActionsController {
  constructor(dispatch) {
    this._dis = dispatch;
  }

  checkIfLoggedIn = () => {
    this._dis({
      type: "checkIfLoggedIn",
      payload: this._dis,
    });
  };

  getAllActions = () => {
    return {
      checkIfLoggedIn: this.checkIfLoggedIn,
    };
  };
}
