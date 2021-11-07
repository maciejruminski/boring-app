interface IState {
  isLoggedIn: boolean;
}

interface IActions {
  checkIfLoggedIn: () => boolean;
  verifyOneTimePassword: () => void;
}

type ActionTypes = "checkIfLoggedIn" | "verifyOneTimePassword";

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
