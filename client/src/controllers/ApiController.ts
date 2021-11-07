export default class ApiController {
  static async verifyOneTimePassword(oneTimePassword: any) {
    const response = await fetch("/verify-one-time-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oneTimePassword }),
    });

    return await response.json();
  }
}
