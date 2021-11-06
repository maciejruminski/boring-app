// Handlers.
import StateManipulateHandler from "../handlers/StateManipulateHandler";

const reducer = (state, action) => {
  const { type, payload } = action;

  const handler = StateManipulateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state = handler(state, payload);

  return _state;
};

export default reducer;
