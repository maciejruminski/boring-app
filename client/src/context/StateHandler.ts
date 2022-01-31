export default class StateHandler {
  static setUserAuthenticationOn({ state }: IStateHandler) {
    return { ...state, isLoggedIn: true };
  }

  static setUserAuthenticationOff({ state }: IStateHandler) {
    return { ...state, isLoggedIn: false };
  }

  static setBusyOn({ state }: IStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IStateHandler) {
    return { ...state, isBusy: false };
  }

  static setFilters({ state, payload: filters }: IStateHandler) {
    return { ...state, filters };
  }

  static setPlaces({ state, payload: places }: IStateHandler) {
    return { ...state, places };
  }

  static setFiltersModalOn({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isFiltersModalOpen: true } };
  }

  static setFiltersModalOff({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isFiltersModalOpen: false } };
  }

  static setCurrentPlaceModalOn({ state }: IStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isCurrentPlaceModalOpen: true },
    };
  }

  static setCurrentPlaceModalOff({ state }: IStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isCurrentPlaceModalOpen: false },
    };
  }

  static setHistoricPlacesModalOn({ state }: IStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: true },
    };
  }

  static setHistoricPlacesModalOff({ state }: IStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isHistoricPlacesModalOpen: false },
    };
  }

  static setCurrentPlace({ state, payload: currentPlace }: IStateHandler) {
    return { ...state, currentPlace };
  }

  static setPlacesFromLocalStorage({ state, payload: places }: IStateHandler) {
    return { ...state, places };
  }

  static setSignUpError({ state, payload: error }: IStateHandler) {
    return { ...state, signUp: { ...state.signUp, error } };
  }

  static setSignUpEmail({ state, payload: email }: IStateHandler) {
    return { ...state, signUp: { ...state.signUp, email } };
  }

  static setOneTimePassword({ state, payload: password }: IStateHandler) {
    return { ...state, signUp: { ...state.signUp, password } };
  }

  static setSignUpEmailAsSent({ state }: IStateHandler) {
    return { ...state, signUp: { ...state.signUp, isSent: true } };
  }

  static setHistoricPlaces({ state, payload: historicPlaces }: IStateHandler) {
    return { ...state, historicPlaces };
  }

  static handlers = {
    setUserAuthenticationOn: StateHandler.setUserAuthenticationOn,
    setUserAuthenticationOff: StateHandler.setUserAuthenticationOff,
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
    setFiltersModalOn: StateHandler.setFiltersModalOn,
    setFiltersModalOff: StateHandler.setFiltersModalOff,
    setCurrentPlaceModalOn: StateHandler.setCurrentPlaceModalOn,
    setCurrentPlaceModalOff: StateHandler.setCurrentPlaceModalOff,
    setCurrentPlace: StateHandler.setCurrentPlace,
    setPlacesFromLocalStorage: StateHandler.setPlacesFromLocalStorage,
    setSignUpError: StateHandler.setSignUpError,
    setSignUpEmail: StateHandler.setSignUpEmail,
    setSignUpEmailAsSent: StateHandler.setSignUpEmailAsSent,
    setOneTimePassword: StateHandler.setOneTimePassword,
    setHistoricPlaces: StateHandler.setHistoricPlaces,
    setHistoricPlacesModalOn: StateHandler.setHistoricPlacesModalOn,
    setHistoricPlacesModalOff: StateHandler.setHistoricPlacesModalOff,
  };
}
