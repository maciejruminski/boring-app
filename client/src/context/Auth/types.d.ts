interface IAuthState {
  isBusy: boolean;
  isLoggedIn: boolean;
  email: {
    email: string;
    error: string;
    isSent: boolean;
    isResent: boolean;
    isComponentActive: boolean;
  };
  password: {
    password: string;
    error: string;
    isComponentInactive: boolean;
  };
}

interface IAuthActions {
  setBusyOn: () => void;
  setBusyOff: () => void;
  setUserAuthenticationOn: () => void;
  setUserAuthenticationOff: () => void;
  setPasswordComponentAsInactive: () => void;
  setUserAuthenticationByLocalStorage: () => void;
  verifyPassword: (oneTimePassword: string) => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setEmailAsSent: () => void;
  setEmailAsResent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string, resend: boolean = false) => void;
  setPasswordModalOn: () => void;
  setEmailComponentAsInactive: () => void;
}

type AuthActionTypes =
  | "setBusyOn"
  | "setBusyOff"
  | "setUserAuthenticationOn"
  | "setUserAuthenticationOff"
  | "setPasswordComponentAsInactive"
  | "setOneTimePassword"
  | "setEmailError"
  | "setPasswordError"
  | "setSignUpEmail"
  | "setEmailAsSent"
  | "setEmailAsResent"
  | "setPasswordModalOn"
  | "setEmailComponentAsInactive";

interface IAuthAction {
  type: AuthActionTypes;
  payload?: any;
}

type AuthReducerType = (state: IAuthState, action: IAuthAction) => IAuthState;

type AuthContextHook = () => {
  state: IAuthState;
  actions: IAuthActions;
};

interface IAuthStateHandler {
  state: IAuthState;
  payload?: any;
}
