// Controllers.
import LocalStorageController from "./LocalStorageController";
import ApiController from "./ApiController";

export default class Controller {
  private static async setUser(userUUID: string) {
    LocalStorageController.setUserUUID(userUUID);
    LocalStorageController.setUserAuthentication();

    const response = await ApiController.addUserToDatabase(userUUID);
  }

  private static async setPlaces(places: []) {
    LocalStorageController.setPlaces(JSON.stringify(places));
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

  static async findPlaces(filters: {
    distance: number;
    keyword: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    openNow: boolean;
  }) {
    const response = await ApiController.getPlaces(filters);
    const statusIsNotOk = response.status !== 200;
    console.log({ response });
    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    this.setPlaces(response.places);
    return response.places;
  }

  static async getPlaceDetails(placeId: string) {
    const response = await ApiController.getPlaceDetails(placeId);
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

    return { name, rating, website, reviews, location };
  }
}
