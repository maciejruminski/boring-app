export default class LocalStorage {
  static setUserAuthentication(): void {
    localStorage.setItem("userAuthentication", "true");
  }

  static removeUserAuthentication(): void {
    localStorage.removeItem("userAuthentication");
  }

  static getUserAuthentication(): boolean {
    const userAuthentication = localStorage.getItem("userAuthentication");

    return userAuthentication ? true : false;
  }

  static setUserUUID(userUUID: string): void {
    localStorage.setItem("userUUID", userUUID);
  }

  static removeUserUUID(): void {
    localStorage.removeItem("userUUID");
  }

  static getUserUUID() {
    return localStorage.getItem("userUUID");
  }

  static setPlaces(places: Place[]): void {
    localStorage.setItem("places", JSON.stringify(places));
  }

  static removePlaces(): void {
    localStorage.removeItem("places");
  }

  static getPlaces(): Place[] {
    const places = localStorage.getItem("places");

    return places ? JSON.parse(places) : [];
  }

  static setFilters(filters: Filters) {
    localStorage.setItem("filters", JSON.stringify(filters));
  }

  static removeFilters(): void {
    localStorage.removeItem("filters");
  }

  static getFilters(): Filters {
    const filters = localStorage.getItem("filters");

    return filters ? JSON.parse(filters) : {};
  }

  static setHistoricPlaces(places: Place[]): void {
    localStorage.setItem("historicPlaces", JSON.stringify(places));
  }

  static removeHistoricPlaces(): void {
    localStorage.removeItem("historicPlaces");
  }

  static getHistoricPlaces(): Place[] {
    const historicPlaces = localStorage.getItem("historicPlaces");

    return historicPlaces ? JSON.parse(historicPlaces) : [];
  }
}
