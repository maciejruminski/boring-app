export default class StateHandler {
  static setPlaces({ state, payload: places }: IPlacesStateHandler) {
    return { ...state, places };
  }


  static setHistoricPlacesModalOn({ state }: IPlacesStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: true },
    };
  }

  static setHistoricPlacesModalOff({ state }: IPlacesStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: false },
    };
  }

  static setCurrentPlace({
    state,
    payload: currentPlace,
  }: IPlacesStateHandler) {
    return { ...state, currentPlace };
  }

  static setPlacesFromLocalStorage({
    state,
    payload: places,
  }: IPlacesStateHandler) {
    return { ...state, places };
  }

  static setHistoricPlaces({
    state,
    payload: historicPlaces,
  }: IPlacesStateHandler) {
    return { ...state, historicPlaces };
  }

  static setNumberOfPlacesToShowAtOnce({
    state,
    payload: numberOfPlacesToShowAtOnce,
  }: IPlacesStateHandler) {
    return { ...state, numberOfPlacesToShowAtOnce };
  }

  static setNumberOfPlacesButtonVisibility({
    state,
    payload: isShowMorePlacesButtonVisible,
  }: IPlacesStateHandler) {
    return { ...state, isShowMorePlacesButtonVisible };
  }

  static setMaximumNumberOfPlaces({
    state,
    payload: maximumNumberOfPlaces,
  }: IPlacesStateHandler) {
    return { ...state, maximumNumberOfPlaces };
  }

  // static setMap({ state, payload: map }: IPlacesStateHandler) {
  //   return { ...state, map };
  // }

  static handlers = {
    // setFilters: StateHandler.setFilters,
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
