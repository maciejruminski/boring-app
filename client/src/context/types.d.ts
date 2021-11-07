interface IState {
  isLoggedIn: boolean;
  isBusy: boolean;
}

interface IActions {
  setUserAuthenticationOn: () => void;
  setUserAuthenticationOff: () => void;
  setUserAuthenticationFromLocalStorage: () => void;
  verifyOneTimePassword: (
    e: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ) => void;
  setBusyOn: () => void;
  setBusyOff: () => void;
}

type ActionTypes =
  | "setUserAuthenticationOn"
  | "setUserAuthenticationOff"
  | "setUserAuthenticationFromLocalStorage"
  | "setBusyOn"
  | "setBusyOff";

interface IAction {
  type: ActionTypes;
  payload?: any;
}

type ReducerType = (state: IState, action: IAction) => IState;

type ContextHook = () => {
  state: IState;
  actions: Actions;
};

interface IStateHandler {
  state: IState;
  payload?: any;
}
