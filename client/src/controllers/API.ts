export default class API {
  private static async request(url: string, body = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  static async addUser(userUUID: string) {
    return await this.request("/add-user", { userUUID });
  }

  static async addFilters(filters: Filters, userUUID: string) {
    return await this.request("/add-filters", { filters, userUUID });
  }

  static async getFilters(userUUID: string) {
    return await this.request("/get-filters", { userUUID });
  }

  static async addHistoricPlaces(places: Place[], userUUID: string) {
    return await this.request("/add-historic-places", { places, userUUID });
  }

  static async getHistoricPlaces(userUUID: string) {
    return await this.request("/get-historic-places", { userUUID });
  }

  static async getPlaces(filters: Filters) {
    return await this.request("/get-places", { filters });
  }

  static async getCurrentPlaceDetails(placeID: string) {
    return await this.request("/get-place-details", { placeID });
  }

  static async verifyOneTimePassword(oneTimePassword: string) {
    return await this.request("/verify-password", { oneTimePassword });
  }

  static async sendPassword(email: string) {
    return await this.request("/send-password", { email });
  }
}
