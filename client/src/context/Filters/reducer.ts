// Handlers.
import StateHandler from "./StateHandler";

const reducer: FiltersReducerType = (state: IFiltersState, action: IFiltersAction) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IFiltersState = handler({ state, payload });

  return _state;
};

export default reducer;
