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

  static setCurrentLocation({
    state,
    payload: currentLocation,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, currentLocation };
  }

  static handlers = {
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
    setCurrentLocation: StateHandler.setCurrentLocation,
  };
}
