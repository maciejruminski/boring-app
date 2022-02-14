export default class StateHandler {
  static setFilters({
    state,
    payload: filters,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, filters };
  }

  static setPlaces({ state, payload: places }: IFiltersAndPlacesStateHandler) {
    return { ...state, places };
  }

  static handlers = {
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
  };
}
