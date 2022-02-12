// Controllers.
import Helper from "../../controllers/Helper";
import LocalStorage from "../../controllers/LocalStorage";
import API from "../../controllers/API";

export default class AuthActions {
  private dispatch: React.Dispatch<IAuthAction>;

  constructor(state: IAuthState, dispatch: React.Dispatch<IAuthAction>) {
    this.dispatch = dispatch;
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

  setOneTimePassword = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const input = evt.target;

    const passwordIsNotValid: boolean = !this.validateInput(input);

    if (passwordIsNotValid) {
      return;
    }

    this.dispatch({
      type: "setOneTimePassword",
      payload: input.value,
    });
  };

  setSignUpEmailAsSent = (): void => {
    this.dispatch({ type: "setSignUpEmailAsSent" });
  };

  setSignUpEmailAsResent = (): void => {
    this.dispatch({ type: "setSignUpEmailAsResent" });
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
        // this.setOneTimePassword(input);
        break;
      default:
        console.log("test...");
    }
  };

  sendPassword = async (email: string): Promise<void> => {
    this.setBusyOn();

    const response = await API.sendPassword(email);

    if (Helper.statusIsNotOk(response.status)) {
      console.log("STATUS NOT OK");
      // this.setSignUpError(response.message); JAKIS ERROR, ŻE NIE WYSLALLO
      this.setBusyOff();
      return;
    }

    this.setSignUpEmailAsSent();
    this.setBusyOff();
  };

  resendPassword = async (email: string): Promise<void> => {
    this.setBusyOn();

    const response = await API.sendPassword(email);

    if (Helper.statusIsNotOk(response.status)) {
      console.log("STATUS NOT OK");
      // this.setSignUpError(response.message); JAKIS ERROR, ŻE NIE WYSLALLO
      this.setBusyOff();
      return;
    }

    this.setSignUpEmailAsResent();
    this.setBusyOff();
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
      setSignUpEmailAsResent: this.setSignUpEmailAsResent,
      inputOnChange: this.inputOnChange,
      sendPassword: this.sendPassword,
      resendPassword: this.resendPassword,
      setOneTimePassword: this.setOneTimePassword,
      setOneTimePasswordModalOn: this.setOneTimePasswordModalOn,
    };
  };
}
