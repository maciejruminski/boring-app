// Controllers.
import Controller from "../controllers/Controller";

export default class StateHandler {
  static setUserAuthenticationOn({ state }: IStateHandler) {
    return { ...state, isLoggedIn: true };
  }

  static setUserAuthenticationOff({ state }: IStateHandler) {
    return { ...state, isLoggedIn: false };
  }

  static setUserAuthenticationFromLocalStorage({ state }: IStateHandler) {
    return { ...state, isLoggedIn: Controller.checkIfLoggedIn() };
  }

  static setBusyOn({ state }: IStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IStateHandler) {
    return { ...state, isBusy: false };
  }

  static setFilterTypes({ state, payload: filterTypes }: IStateHandler) {
    return { ...state, filters: { ...state.filters, types: filterTypes } };
  }

  static setPlaces({ state, payload: places }: IStateHandler) {
    return { ...state, places };
  }
  
  static setFiltersModalOn({ state }: IStateHandler) {
    return { ...state, filters: { ...state.filters, isModalOpen: true } };
  }
  
  static setFiltersModalOff({ state }: IStateHandler) {
    return { ...state, filters: { ...state.filters, isModalOpen: false } };
  }

  static setSavingModalOn({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isSavingModalOpen: true } };
  }
  
  static setSavingModalOff({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isSavingModalOpen: false } };
  }
  
  static setPlaceModalOn({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isModalOpen: true } };
  }
  
  static setPlaceModalOff({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isModalOpen: false } };
  }
  
  static setCurrentPlaceDetails({ state, payload: details }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, details } };
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

  static setHistoricPlaces({ state, payload: places }: IStateHandler) {
    return { ...state, historicPlaces: { ...state.historicPlaces, places } };
  }

  static handlers = {
    setUserAuthenticationOn: StateHandler.setUserAuthenticationOn,
    setUserAuthenticationOff: StateHandler.setUserAuthenticationOff,
    setUserAuthenticationFromLocalStorage:
      StateHandler.setUserAuthenticationFromLocalStorage,
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setFilterTypes: StateHandler.setFilterTypes,
    setPlaces: StateHandler.setPlaces,
    setFiltersModalOn: StateHandler.setFiltersModalOn,
    setFiltersModalOff: StateHandler.setFiltersModalOff,
    setSavingModalOn: StateHandler.setSavingModalOn,
    setSavingModalOff: StateHandler.setSavingModalOff,
    setPlaceModalOn: StateHandler.setPlaceModalOn,
    setPlaceModalOff: StateHandler.setPlaceModalOff,
    setCurrentPlaceDetails: StateHandler.setCurrentPlaceDetails,
    setPlacesFromLocalStorage: StateHandler.setPlacesFromLocalStorage,
    setSignUpError: StateHandler.setSignUpError,
    setSignUpEmail: StateHandler.setSignUpEmail,
    setSignUpEmailAsSent: StateHandler.setSignUpEmailAsSent,
    setOneTimePassword: StateHandler.setOneTimePassword,
    setHistoricPlaces: StateHandler.setHistoricPlaces,
  };
}
