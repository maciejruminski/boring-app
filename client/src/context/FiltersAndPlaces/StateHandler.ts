export default class StateHandler {
  static setBusyOn({ state }: IFiltersAndPlacesStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IFiltersAndPlacesStateHandler) {
    return { ...state, isBusy: false };
  }

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
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
    setCurrentLocation: StateHandler.setCurrentLocation,
  };
}
