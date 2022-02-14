export default class StateHandler {
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

  static handlers = {
    setNumberOfPlacesToShowAtOnce: StateHandler.setNumberOfPlacesToShowAtOnce,
    setNumberOfPlacesButtonVisibility:
      StateHandler.setNumberOfPlacesButtonVisibility,
    setMaximumNumberOfPlaces: StateHandler.setMaximumNumberOfPlaces,
  };
}
