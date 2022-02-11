// Handlers.
import StateHandler from "./StateHandler";

const reducer: DetailsReducerType = (
  state: IDetailsState,
  action: IDetailsAction
) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IDetailsState = handler({ state, payload });

  return _state;
};

export default reducer;
