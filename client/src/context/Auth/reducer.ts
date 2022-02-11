// Handlers.
import StateHandler from "./StateHandler";

const reducer: AuthReducerType = (state: IAuthState, action: IAuthAction) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IAuthState = handler({ state, payload });

  return _state;
};

export default reducer;
