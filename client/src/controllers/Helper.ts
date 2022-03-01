// Controllers.
import LocalStorage from "./LocalStorage";
import API from "./API";

// Language.
import { TFunction } from "react-i18next";

export default class Controller {
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

    // }

    return false;
  }

  static async setHistoricPlaces(historicPlaces: Place[]): Promise<any> {
    const userUUID = LocalStorage.getUserUUID();
    if (userUUID) {
      LocalStorage.setHistoricPlaces(historicPlaces);
      const response = await API.addHistoricPlaces(historicPlaces, userUUID);

      if (this.statusIsNotOk(response.status)) {
        return false;
      }

      return true;
    }
  }

  static getPlaceById(palces: Place[], placeID: string): any {
    return palces.find((place: { id: string }) => place.id === placeID);
  }

  static validateInput(input: HTMLInputElement): boolean {
    const {
      id,
      validity: { tooLong, tooShort },
    } = input;

    if (id === "signUpPassword") {
      input.setCustomValidity(
        tooShort || tooLong ? "Password must contain exactly 6 digits." : ""
      );
    }

    return input.checkValidity() ? true : false;
  }

  static comparewithLocalStorageFilters(filters: Filters): boolean {
    return (
      JSON.stringify(filters) === JSON.stringify(LocalStorage.getFilters())
    );
  }

  static statusIsNotOk(status: string): boolean {
    return status !== "OK";
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

  static getFilterTypesObject(
    t: TFunction<"translation", undefined>
  ): FilterTypes {
    return {
      amusement_park: t("Objects.FilterTypes.amusement_park"),
      aquarium: t("Objects.FilterTypes.aquarium"),
      art_gallery: t("Objects.FilterTypes.art_gallery"),
      bar: t("Objects.FilterTypes.bar"),
      book_store: t("Objects.FilterTypes.book_store"),
      bowling_alley: t("Objects.FilterTypes.bowling_alley"),
      cafe: t("Objects.FilterTypes.cafe"),
      campground: t("Objects.FilterTypes.campground"),
      casino: t("Objects.FilterTypes.casino"),
      gym: t("Objects.FilterTypes.gym"),
      library: t("Objects.FilterTypes.library"),
      meal_takeaway: t("Objects.FilterTypes.meal_takeaway"),
      movie_theater: t("Objects.FilterTypes.movie_theater"),
      museum: t("Objects.FilterTypes.museum"),
      night_club: t("Objects.FilterTypes.night_club"),
      park: t("Objects.FilterTypes.park"),
      restaurant: t("Objects.FilterTypes.restaurant"),
      stadium: t("Objects.FilterTypes.stadium"),
      tourist_attraction: t("Objects.FilterTypes.tourist_attraction"),
      zoo: t("Objects.FilterTypes.zoo"),
    };
  }

  static getPricesObject(t: TFunction<"translation", undefined>): Prices {
    return {
      _: "-",
      _0: t("Objects.Prices.cheap"),
      _1: t("Objects.Prices.average"),
      _2: t("Objects.Prices.expensive"),
      _3: t("Objects.Prices.very-expensive"),
    };
  }
}
