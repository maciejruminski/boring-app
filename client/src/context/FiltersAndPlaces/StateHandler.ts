export default class StateHandler {
  // static setUserAuthenticationOn({ state }: IFiltersAndPlacesStateHandler) {
  //   return { ...state, isLoggedIn: true };
  // }

  // static setUserAuthenticationOff({ state }: IFiltersAndPlacesStateHandler) {
  //   return { ...state, isLoggedIn: false };
  // }

  static setFilters({ state, payload: filters }: IFiltersAndPlacesStateHandler) {
    return { ...state, filters };
  }

  static setPlaces({ state, payload: places }: IFiltersAndPlacesStateHandler) {
    return { ...state, places };
  }

  // static setFiltersModalOn({ state }: IFiltersAndPlacesStateHandler) {
  //   return { ...state, modals: { ...state.modals, isFiltersModalOpen: true } };
  // }

  // static setFiltersModalOff({ state }: IFiltersAndPlacesStateHandler) {
  //   return { ...state, modals: { ...state.modals, isFiltersModalOpen: false } };
  // }

 

  static setHistoricPlacesModalOn({ state }: IFiltersAndPlacesStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: true },
    };
  }

  static setHistoricPlacesModalOff({ state }: IFiltersAndPlacesStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: false },
    };
  }

  static setCurrentPlace({
    state,
    payload: currentPlace,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, currentPlace };
  }

  static setPlacesFromLocalStorage({
    state,
    payload: places,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, places };
  }

  static setHistoricPlaces({
    state,
    payload: historicPlaces,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, historicPlaces };
  }

  static setNumberOfPlacesToShowAtOnce({
    state,
    payload: numberOfPlacesToShowAtOnce,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, numberOfPlacesToShowAtOnce };
  }

  static setNumberOfPlacesButtonVisibility({
    state,
    payload: isShowMorePlacesButtonVisible,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, isShowMorePlacesButtonVisible };
  }

  static setMaximumNumberOfPlaces({
    state,
    payload: maximumNumberOfPlaces,
  }: IFiltersAndPlacesStateHandler) {
    return { ...state, maximumNumberOfPlaces };
  }

  // static setMap({ state, payload: map }: IFiltersAndPlacesStateHandler) {
  //   return { ...state, map };
  // }

  static handlers = {
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
    // setFiltersModalOn: StateHandler.setFiltersModalOn,
    // setFiltersModalOff: StateHandler.setFiltersModalOff,
    setCurrentPlace: StateHandler.setCurrentPlace,
    setPlacesFromLocalStorage: StateHandler.setPlacesFromLocalStorage,
    setHistoricPlaces: StateHandler.setHistoricPlaces,
    setHistoricPlacesModalOn: StateHandler.setHistoricPlacesModalOn,
    setHistoricPlacesModalOff: StateHandler.setHistoricPlacesModalOff,
    setNumberOfPlacesToShowAtOnce: StateHandler.setNumberOfPlacesToShowAtOnce,
    setNumberOfPlacesButtonVisibility:
      StateHandler.setNumberOfPlacesButtonVisibility,
    setMaximumNumberOfPlaces: StateHandler.setMaximumNumberOfPlaces,
    // setMap: StateHandler.setMap,
  };
}
