export default class LocalStorageController {
  static setUserAuthentication() {
    return localStorage.setItem("userAuthentication", "true");
  }

  static removeUserAuthentication() {
    return localStorage.removeItem("userAuthentication");
  }

  static getUserAuthentication() {
    return localStorage.getItem("userAuthentication");
  }

  static setUserUUID(userUUID: string) {
    return localStorage.setItem("userUUID", userUUID);
  }

  static removeUserUUID() {
    return localStorage.removeItem("userUUID");
  }

  static getUserUUID() {
    return localStorage.getItem("userUUID");
  }
}
