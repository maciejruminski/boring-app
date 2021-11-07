// Controllers.
import Controller from "../controllers/Controller";

export default class StateManipulateHandler {
  static checkIfLoggedIn({ state }: IStateHandler) {
    return {
      ...state,
      isLoggedIn: Controller.checkIfLoggedIn(),
    };
  }

  static verifyOneTimePassword({ state }: IStateHandler) {
    return {
      ...state,
    };
  }

  static handlers = {
    checkIfLoggedIn: StateManipulateHandler.checkIfLoggedIn,
    verifyOneTimePassword: StateManipulateHandler.verifyOneTimePassword,
  };
}
