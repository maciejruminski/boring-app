export default class StateHandler {
  static setCurrentPlace({
    state,
    payload: currentPlace,
  }: IDetailsStateHandler) {
    return { ...state, currentPlace };
  }

  static setCurrentPlaceModalOn({ state }: IDetailsStateHandler) {
    return { ...state, isCurrentPlaceModalOpen: true };
  }

  static setCurrentPlaceModalOff({ state }: IDetailsStateHandler) {
    return { ...state, isCurrentPlaceModalOpen: false };
  }

  static handlers = {
    setCurrentPlace: StateHandler.setCurrentPlace,
    setCurrentPlaceModalOn: StateHandler.setCurrentPlaceModalOn,
    setCurrentPlaceModalOff: StateHandler.setCurrentPlaceModalOff,
  };
}
