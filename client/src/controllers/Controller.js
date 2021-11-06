export default class Controller {
  static checkIfLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return isLoggedIn ? true : false;
  }
}
