// Controllers.
import Helper from "@controllers/Helper";
import LocalStorage from "@controllers/LocalStorage";
import API from "@controllers/API";

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

  setPasswordComponentAsInactive = (): void => {
    this.dispatch({ type: "setPasswordComponentAsInactive" });
  };

  setUserAuthenticationByLocalStorage = (): void => {
    LocalStorage.getUserAuthentication()
      ? this.setUserAuthenticationOn()
      : this.setUserAuthenticationOff();
  };

  setPasswordModalOn = (): void => {
    this.dispatch({ type: "setPasswordModalOn" });
  };

  verifyPassword = async (oneTimePassword: string): Promise<void> => {
    this.setBusyOn();

    let response = await API.verifyPassword(oneTimePassword);

    if (Helper.statusIsNotOk(response.status)) {
      this.setPasswordError(response.message);
      this.setBusyOff();
      return;
    }

    response = await API.addUser(response.uuid);

    if (Helper.statusIsNotOk(response.status)) {
      this.setBusyOff();
      return;
    }

    LocalStorage.setUserAuthentication();
    LocalStorage.setUserUUID(response.uuid);

    this.setPasswordComponentAsInactive();
    this.setBusyOff();
  };

  setEmailError = (error: string): void => {
    this.dispatch({ type: "setEmailError", payload: error });
  };

  setPasswordError = (error: string): void => {
    this.dispatch({ type: "setPasswordError", payload: error });
  };

  setEmailAsSent = (): void => {
    this.dispatch({ type: "setEmailAsSent" });
  };

  setEmailAsResent = (): void => {
    this.dispatch({ type: "setEmailAsResent" });
  };

  setEmailComponentAsInactive = (): void => {
    this.dispatch({ type: "setEmailComponentAsInactive" });
  };

  validateInput = (input: HTMLInputElement): boolean => {
    const inputIsNotValid = !Helper.validateInput(input);

    if (inputIsNotValid) {
      const error = input.validationMessage;

      input.id === "email"
        ? this.setEmailError(error)
        : this.setPasswordError(error);

      return false;
    }

    input.id === "email" ? this.setEmailError("") : this.setPasswordError("");
    return true;
  };

  inputOnChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const input = evt.target;

    const inputIsNotValid: boolean = !this.validateInput(input);

    if (inputIsNotValid) {
      return;
    }

    switch (input.id) {
      case "email":
        this.dispatch({ type: "setSignUpEmail", payload: input.value });
        break;
      case "signUpPassword":
        this.dispatch({ type: "setOneTimePassword", payload: input.value });
        break;
    }
  };

  sendPassword = async (
    email: string,
    resend: boolean = false
  ): Promise<void> => {
    this.setBusyOn();

    const response = await API.sendPassword(email);

    if (Helper.statusIsNotOk(response.status)) {
      this.setEmailError(response.message);
      this.setBusyOff();
      return;
    }

    resend ? this.setEmailAsResent() : this.setEmailAsSent();

    this.setBusyOff();
  };

  getAllActions = (): IAuthActions => {
    return {
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      setUserAuthenticationOn: this.setUserAuthenticationOn,
      setUserAuthenticationOff: this.setUserAuthenticationOff,
      setPasswordComponentAsInactive: this.setPasswordComponentAsInactive,
      setUserAuthenticationByLocalStorage:
        this.setUserAuthenticationByLocalStorage,
      verifyPassword: this.verifyPassword,
      validateInput: this.validateInput,
      setEmailAsSent: this.setEmailAsSent,
      setEmailAsResent: this.setEmailAsResent,
      inputOnChange: this.inputOnChange,
      sendPassword: this.sendPassword,
      setPasswordModalOn: this.setPasswordModalOn,
      setEmailComponentAsInactive: this.setEmailComponentAsInactive,
    };
  };
}
