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
}
