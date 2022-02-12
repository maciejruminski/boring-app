// Controllers.
import Helper from "../../controllers/Helper";
import LocalStorage from "../../controllers/LocalStorage";
import API from "../../controllers/API";
import OneTimePassword from "../../components/SignUp/OneTimePassword";

export default class AuthActions {
  private state: IAuthState;
  private dispatch: React.Dispatch<IAuthAction>;

  constructor(state: IAuthState, dispatch: React.Dispatch<IAuthAction>) {
    this.dispatch = dispatch;
    this.state = state;
  }

  setBusyOn = (): void => {
    this.dispatch({ type: "setBusyOn" });
  };

  setBusyOff = (): void => {
    this.dispatch({ type: "setBusyOff" });
  };

  setUserAuthenticationOn = (): void => {
    this.dispatch({ type: "setUserAuthenticationOn" });
  };

  setUserAuthenticationOff = (): void => {
    this.dispatch({ type: "setUserAuthenticationOff" });
  };

  setFadingOutOn = (): void => {
    this.dispatch({ type: "setFadingOutOn" });
  };

  setUserAuthenticationByLocalStorage = (): void => {
    LocalStorage.getUserAuthentication()
      ? this.setUserAuthenticationOn()
      : this.setUserAuthenticationOff();
  };

  setOneTimePasswordModalOn = (): void => {
    this.dispatch({ type: "setOneTimePasswordModalOn" });
  };

  verifyOneTimePassword = async (
    evt: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ): Promise<void> => {
    evt.preventDefault();
    this.setBusyOn();

    let response = await API.verifyOneTimePassword(oneTimePassword);

    if (Helper.statusIsNotOk(response.status)) {
      this.setSignUpError(response.message);
      this.setBusyOff();
      return;
    }

    response = await API.addUser(response.uuid);

    if (Helper.statusIsNotOk(response.status)) {
      this.setBusyOff();
      return;
    }

    // LocalStorage.setUserAuthentication();
    // LocalStorage.setUserUUID(response.uuid);

    this.setFadingOutOn();
    this.setBusyOff();

    const fadingOutTime = 300;

    setTimeout(this.setUserAuthenticationOn, fadingOutTime);
  };

  setSignUpError = (error: string): void => {
    this.dispatch({ type: "setSignUpError", payload: error });
  };

  setSignUpEmail = (emailInput: HTMLInputElement): void => {
    const emailIsNotValid: boolean = !this.validateInput(emailInput);

    if (emailIsNotValid) {
      return;
    }

    this.dispatch({ type: "setSignUpEmail", payload: emailInput.value });
  };

  setOneTimePassword = (passwordInput: HTMLInputElement): void => {
    const passwordIsNotValid: boolean = !this.validateInput(passwordInput);

    if (passwordIsNotValid) {
      return;
    }

    this.dispatch({
      type: "setOneTimePassword",
      payload: passwordInput.value,
    });
  };

  setSignUpEmailAsSent = (): void => {
    this.dispatch({ type: "setSignUpEmailAsSent" });
  };

  validateInput = (input: HTMLInputElement): boolean => {
    const inputIsNotValid = !Helper.validateInput(input);

    if (inputIsNotValid) {
      this.setSignUpError(input.validationMessage);
      return false;
    }

    this.setSignUpError("");
    return true;
  };

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const input = evt.target;

    switch (input.id) {
      case "email":
        this.setSignUpEmail(input);
        break;
      case "signUpPassword":
        this.setOneTimePassword(input);
        break;
      default:
        console.log("test...");
    }
  };

  sendPassword = (email: string): void => {
    // this.setBusyOn();

    Helper.sendPassword(email).then(() => {
      // this.setBusyOff();
      this.setSignUpEmailAsSent();
    });
  };

  getAllActions = (): IAuthActions => {
    return {
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      setUserAuthenticationOn: this.setUserAuthenticationOn,
      setUserAuthenticationOff: this.setUserAuthenticationOff,
      setFadingOutOn: this.setFadingOutOn,
      setUserAuthenticationByLocalStorage:
        this.setUserAuthenticationByLocalStorage,
      verifyOneTimePassword: this.verifyOneTimePassword,
      validateInput: this.validateInput,
      setSignUpEmail: this.setSignUpEmail,
      setSignUpEmailAsSent: this.setSignUpEmailAsSent,
      inputOnChange: this.inputOnChange,
      sendPassword: this.sendPassword,
      setOneTimePassword: this.setOneTimePassword,
      setOneTimePasswordModalOn: this.setOneTimePasswordModalOn,
    };
  };
}
