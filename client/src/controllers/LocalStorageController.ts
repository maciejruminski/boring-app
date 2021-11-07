export default class LocalStorageController {
  static getIsLoggedIn() {
    return localStorage.getItem("isLoggedIn");
  }
}
