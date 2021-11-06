// Controllers.
import LocalStorageController from "./LocalStorageController";

export default class Controller {
  static checkIfLoggedIn() {
    return LocalStorageController.getIsLoggedIn() ? true : false;
  }
}
