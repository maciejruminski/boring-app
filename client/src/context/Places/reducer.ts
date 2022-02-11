// Handlers.
import StateHandler from "./StateHandler";

const reducer: PlacesReducerType = (state: IPlacesState, action: IPlacesAction) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IPlacesState = handler({ state, payload });

  return _state;
};

export default reducer;
