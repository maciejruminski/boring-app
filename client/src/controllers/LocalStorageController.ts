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
    const places = localStorage.getItem("places");

    return places ? JSON.parse(places) : [];
  }

  static setFilters(filters: string) {
    return localStorage.setItem("filters", filters);
  }

  static removeFilters() {
    return localStorage.removeItem("filters");
  }

  static getFilters() {
    return localStorage.getItem("filters");
  }

  static setHistoricPlaces(places: Place[]) {
    return localStorage.setItem("historicPlaces", JSON.stringify(places));
  }

  static removeHistoricPlaces() {
    return localStorage.removeItem("historicPlaces");
  }

  static getHistoricPlaces() {
    const historicPlaces = localStorage.getItem("historicPlaces");

    return historicPlaces ? JSON.parse(historicPlaces) : [];
  }
}
