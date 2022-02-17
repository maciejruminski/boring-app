export default class StateHandler {
  static setCurrentPlace({
    state,
    payload: currentPlace,
  }: IDetailsStateHandler) {
    return { ...state, currentPlace };
  }

  static setGeolocationAsAllowed({ state }: IDetailsStateHandler) {
    return { ...state, isGeolocationAllowed: true };
  }

  static setBusyOn({ state }: IDetailsStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IDetailsStateHandler) {
    return { ...state, isBusy: false };
  }

  static setCurrentPlaceModalOn({ state }: IDetailsStateHandler) {
    return { ...state, isCurrentPlaceModalOpen: true };
  }

  static setCurrentPlaceModalOff({ state }: IDetailsStateHandler) {
    return { ...state, isCurrentPlaceModalOpen: false };
  }

  static handlers = {
    setGeolocationAsAllowed: StateHandler.setGeolocationAsAllowed,
    setCurrentPlace: StateHandler.setCurrentPlace,
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setCurrentPlaceModalOn: StateHandler.setCurrentPlaceModalOn,
    setCurrentPlaceModalOff: StateHandler.setCurrentPlaceModalOff,
  };
}
