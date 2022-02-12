interface IAuthState {
  isBusy: boolean;
  isLoggedIn: boolean;
  signUp: {
    email: string;
    password: string;
    error: string;
    isSent: boolean;
  };
  isFadingOut: boolean;
  modals: {
    isOneTimePasswordModalOpen: boolean;
  };
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
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  setOneTimePassword: (input: HTMLInputElement) => void;
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
