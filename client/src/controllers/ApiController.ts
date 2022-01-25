export default class ApiController {
  static async addUserToDatabase(userUUID: string) {
    const response = await fetch("/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userUUID }),
    });

    return await response.json();
  }

  static async addFilterTypesToDatabase(
    filterTypes: {
      distance: number;
      keyword: string;
      type: string;
      minPrice: number;
      maxPrice: number;
      openNow: boolean;
    },
    userUUID: string
  ) {
    const response = await fetch("/add-filter-types", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filterTypes, userUUID }),
    });

    return await response.json();
  }

  static async addHistoricPlacesToDatabase(
    places: Place[],
    userUUID: string
  ) {
    const response = await fetch("/add-historic-place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ places, userUUID }),
    });

    return await response.json();
  }

  static async verifyOneTimePassword(oneTimePassword: string) {
    const response = await fetch("/verify-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oneTimePassword }),
    });

    return await response.json();
  }

  static async getPlaces(filters: {
    distance: number;
    keyword: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    openNow: boolean;
  }) {
    const response = await fetch("/get-places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filters }),
    });

    return await response.json();
  }

  static async getPlaceDetails(placeId: string) {
    const response = await fetch("/get-place-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ placeId }),
    });

    return await response.json();
  }

  static async sendPassword(email: string) {
    const response = await fetch("/send-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    return await response.json();
  }
}
