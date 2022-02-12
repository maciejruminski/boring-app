interface IAuthState {
  isBusy: boolean;
  isLoggedIn: boolean;
  signUp: {
    email: string;
    password: string;
    error: string;
    isEmailSent: boolean;
    isEmailResent: boolean;
  };
  isFadingOut: boolean;
  isOneTimePasswordModalOpen: boolean;
}

interface IAuthActions {
  setBusyOn: () => void;
  setBusyOff: () => void;
  setUserAuthenticationOn: () => void;
  setUserAuthenticationOff: () => void;
  setFadingOutOn: () => void;
  setUserAuthenticationByLocalStorage: () => void;
  verifyOneTimePassword: (
    e: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ) => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setSignUpEmail: (input: HTMLInputElement) => void;
  setSignUpEmailAsSent: () => void;
  setSignUpEmailAsResent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  resendPassword: (email: string) => void;
  setOneTimePassword: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  setOneTimePasswordModalOn: () => void;
}

type AuthActionTypes =
  | "setBusyOn"
  | "setBusyOff"
  | "setUserAuthenticationOn"
  | "setUserAuthenticationOff"
  | "setFadingOutOn"
  | "setOneTimePassword"
  | "setSignUpError"
  | "setSignUpEmail"
  | "setSignUpEmailAsSent"
  | "setSignUpEmailAsResent"
  | "setOneTimePasswordModalOn";

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
