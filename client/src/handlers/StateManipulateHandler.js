// Controllers.
import Controller from "../controllers/Controller";

export default class StateManipulateHandler {
  static checkIfLoggedIn(state) {
    return {
      ...state,
      isLoggedIn: Controller.checkIfLoggedIn(),
    };
  }

  static handlers = {
    checkIfLoggedIn: StateManipulateHandler.checkIfLoggedIn,
  };
}
