// Controllers.
import LocalStorageController from "./LocalStorageController";
import ApiController from "./ApiController";

export default class Controller {
  static checkIfLoggedIn(): boolean {
    return LocalStorageController.getUserAuthentication() ? true : false;
  }

  static async verifyOneTimePassword(
    oneTimePassword: string,
    checkIfLoggedIn: Function
  ): Promise<void> {
    const response = await ApiController.verifyOneTimePassword(oneTimePassword);
    const statusIsNotOk = response.status !== 200;

    if (statusIsNotOk) {
      throw Error(response.errorMessage);
    }

    LocalStorageController.setUserUUID(response.uuid);
    LocalStorageController.setUserAuthentication();

    checkIfLoggedIn();
  }
}
