export default class ApiController {
  static async addUserToDatabase(userUUID: string) {
    const response = await fetch("/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userUUID }),
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
}
