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

  static setPlaces(places: string) {
    return localStorage.setItem("places", places);
  }

  static removePlaces() {
    return localStorage.removeItem("places");
  }

  static getPlaces() {
    return localStorage.getItem("places");
  }

  static setFilterTypes(filterTypes: string) {
    console.log('setfilterTypes')
    return localStorage.setItem("filterTypes", filterTypes);
  }

  static removeFilterTypes() {
    return localStorage.removeItem("filterTypes");
  }

  static getFilterTypes() {
    return localStorage.getItem("filterTypes");
  }
}
