// Handlers.
import StateHandler from "./StateHandler";

const reducer: HistoricPlacesReducerType = (state: IHistoricPlacesState, action: IHistoricPlacesAction) => {
  const { type, payload } = action;

  const handler = StateHandler.handlers[type];

  if (!handler) {
    throw new Error(`There is no action like ${type}`);
  }

  const _state: IHistoricPlacesState = handler({ state, payload });

  return _state;
};

export default reducer;
