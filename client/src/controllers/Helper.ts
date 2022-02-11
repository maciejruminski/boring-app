// Controllers.
import LocalStorage from "./LocalStorage";
import API from "./API";

export default class Controller {
  private static async setUser(userUUID: string) {
    LocalStorage.setUserUUID(userUUID);
    LocalStorage.setUserAuthentication();

    // const response = await API.addUser(userUUID);
    await API.addUser(userUUID);
  }

  static async verifyOneTimePassword(oneTimePassword: string) {
    const response = await API.verifyOneTimePassword(oneTimePassword);
    const statusIsNotOk = response.status !== 200;

    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    this.setUser(response.uuid);
    return true;
  }

  static getRandomPlace(places: Places, currentPlaceID: string): Place {
    const filteredPlaces = places.filter(
      (place: { id: string }) => place.id !== currentPlaceID
    );

    const randomPlace: Place =
      filteredPlaces[Math.floor(Math.random() * filteredPlaces.length)];

    return randomPlace;
  }

  static async checkIfHistoricPlaceSaved(placeID: string): Promise<boolean> {
    let historicPlaces: Place[] = LocalStorage.getHistoricPlaces();
    let isHistoricPlaceSaved = historicPlaces.find(
      (place) => place.id === placeID
    );

    if (isHistoricPlaceSaved) {
      return true;
    }

    // const userUUID = LocalStorage.getUserUUID();

    // if (userUUID) {
    // const response = await API.getHistoricPlaces(userUUID);
    // console.log({ test });
    // }

    return false;
  }

  static async setHistoricPlaces(historicPlaces: Place[]): Promise<any> {
    const userUUID = LocalStorage.getUserUUID();
    if (userUUID) {
      LocalStorage.setHistoricPlaces(historicPlaces);
      const response = await API.addHistoricPlaces(historicPlaces, userUUID);

      const statusIsNotOk = response.status !== 200;

      if (statusIsNotOk) {
        return false;
      }

      return true;
    }
  }

  static getPlaceById(palces: Place[], placeID: string): any {
    return palces.find((place: { id: string }) => place.id === placeID);
  }

  static async sendPassword(email: string) {
    const response = await API.sendPassword(email);
    const statusIsNotOk = response.status !== 200;

    console.log(response);

    if (statusIsNotOk) {
      return false;
      // throw Error(response.errorMessage);
    }

    // this.setUser(response.uuid);
    return true;
  }

  static validateInput(input: HTMLInputElement): boolean {
    const {
      id,
      validity: { tooLong, tooShort },
    } = input;

    if (id === "signUpPassword") {
      input.setCustomValidity(
        tooShort || tooLong
          ? "A one time password must contain exactly 6 digits."
          : ""
      );
    }

    return input.checkValidity() ? true : false;
  }

  static comparewithLocalStorageFilters(filters: Filters): boolean {
    return (
      JSON.stringify(filters) === JSON.stringify(LocalStorage.getFilters())
    );
  }

  static statusIsNotOk(status: number): boolean {
    return status !== 200;
  }

  static extractPlaceDetailsFromAPI(
    APIPlaceDetails: APIPlaceDetails
  ): PlaceDetails {
    const { website, reviews, vicinity, formatted_phone_number } =
      APIPlaceDetails;

    return { website, reviews, vicinity, phone: formatted_phone_number };
  }

  static formatDistance(distance: string): string {
    const number = Number(distance);

    if (number >= 1000) {
      return `${number / 1000}km`;
    }

    return `${distance}m`;
  }

  static makeBodyUnscrollable(isModalOpen: boolean): void {
    document.body.classList.toggle("no-scroll", isModalOpen);
  }

  static setInputErrorMessageHeight(errorMessage: HTMLParagraphElement): void {
    const text = errorMessage?.children[0];
    const height = text?.clientHeight;

    if (errorMessage) {
      errorMessage.style.height = height + "px";
      errorMessage.style.opacity = "1";
    }
  }

  static setLabelWidthAfterScaling(label: HTMLLabelElement): number {
    let offsetWidth = label.offsetWidth;
    offsetWidth = offsetWidth ? offsetWidth : 0;

    const transformScaleMultiplier = 0.85;

    return offsetWidth * transformScaleMultiplier;
  }
}
