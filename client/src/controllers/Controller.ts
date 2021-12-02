// Controllers.
import LocalStorageController from "./LocalStorageController";
import ApiController from "./ApiController";

export default class Controller {
  private static async setUser(userUUID: string) {
    LocalStorageController.setUserUUID(userUUID);
    LocalStorageController.setUserAuthentication();

    const response = await ApiController.addUserToDatabase(userUUID);
  }

  private static setPlaces(places: []) {
    LocalStorageController.setPlaces(JSON.stringify(places));
  }

  private static setFilterTypes(filterTypes: {
    distance: number;
    keyword: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    openNow: boolean;
  }) {
    console.log('wdwqdwq');
    LocalStorageController.setFilterTypes(JSON.stringify(filterTypes));
  }

  static checkIfLoggedIn(): boolean {
    return LocalStorageController.getUserAuthentication() ? true : false;
  }

  static async verifyOneTimePassword(oneTimePassword: string) {
    const response = await ApiController.verifyOneTimePassword(oneTimePassword);
    const statusIsNotOk = response.status !== 200;
    console.log(response);
    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    this.setUser(response.uuid);
    return true;
  }

  static async findPlaces(filterTypes: {
    distance: number;
    keyword: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    openNow: boolean;
  }) {
    const placesFromLocalStorage = this.getPlacesFromLocalStorage();
    const filterTypesFromLocalStorage = this.getFilterTypesFromLocalStorage();
    const areFilterTypesEqual = JSON.stringify(filterTypes) === JSON.stringify(filterTypesFromLocalStorage);

    if(areFilterTypesEqual) {
      return placesFromLocalStorage;
    }

    const response = await ApiController.getPlaces(filterTypes);
    const statusIsNotOk = response.status !== 200;
    console.log({ response });
    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    this.setPlaces(response.places);
    this.setFilterTypes(filterTypes);

    return response.places;
  }

  static async getPlaceDetails(id: string) {
    const response = await ApiController.getPlaceDetails(id);
    const statusIsNotOk = response.status !== 200;

    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    const {
      name,
      rating,
      website,
      reviews,
      geometry: { location },
    } = response.placeDetails.result;

    return { id, name, rating, website, reviews, location };
  }

  static getRandomPlace(places: [], currentPlaceId: string) {
    const filteredPlaces = places.filter(
      (place: { id: string }) => place.id !== currentPlaceId
    );

    const randomPlace: { id: string } =
      filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];

    return randomPlace.id;

    // const {
    //   name,
    //   rating,
    //   website,
    //   reviews,
    //   geometry: { location },
    // } = response.placeDetails.result;

    // return { id, name, rating, website, reviews, location };
  }

  static getPlacesFromLocalStorage() {
    let places = LocalStorageController.getPlaces();

    if (places) {
      places = JSON.parse(places);
    }

    return places;
  }

  static getFilterTypesFromLocalStorage() {
    let filters = LocalStorageController.getFilterTypes();

    if (filters) {
      filters = JSON.parse(filters);
    }

    return filters;
  }
}
