// Controllers.
import LocalStorageController from "./LocalStorageController";
import ApiController from "./ApiController";

export default class Controller {
  private static setUser(userUUID: string): void {
    LocalStorageController.setUserUUID(userUUID);
    LocalStorageController.setUserAuthentication();
  }

  static checkIfLoggedIn(): boolean {
    return LocalStorageController.getUserAuthentication() ? true : false;
  }

  static async verifyOneTimePassword(
    oneTimePassword: string
  ): Promise<boolean> {
    const response = await ApiController.verifyOneTimePassword(oneTimePassword);
    const statusIsNotOk = response.status !== 200;

    if (statusIsNotOk) {
      throw Error(response.errorMessage);
    }

    this.setUser(response.uuid);

    return true;
  }
}
