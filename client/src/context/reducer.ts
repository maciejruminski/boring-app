// Handlers.
import StateHandler from "./StateHandler";

const reducer: ReducerType = (state, action) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IState = handler({ state, payload });

  return _state;
};

export default reducer;
