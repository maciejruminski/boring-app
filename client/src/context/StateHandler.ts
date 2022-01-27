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
    return { ...state, modals: { ...state.modals, isFiltersModalOpen: true } };
  }
  
  static setFiltersModalOff({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isFiltersModalOpen: false } };
  }

  static setSavingHistoricPlaceModalOn({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isSavingHistoricPlaceModalOpen: true } };
  }
  
  static setSavingHistoricPlaceModalOff({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isSavingHistoricPlaceModalOpen: false } };
  }
  
  static setCurrentPlaceModalOn({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isCurrentPlaceModalOpen: true } };
  }
  
  static setCurrentPlaceModalOff({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isCurrentPlaceModalOpen: false } };
  }
  
  static setHistoricPlacesModalOn({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isHistoricPlacesModalOpen: true } };
  }

  static setHistoricPlacesModalOff({ state }: IStateHandler) {
    return { ...state, modals: { ...state.modals, isHistoricPlacesModalOpen: false } };
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
    setSavingHistoricPlaceModalOn: StateHandler.setSavingHistoricPlaceModalOn,
    setSavingHistoricPlaceModalOff: StateHandler.setSavingHistoricPlaceModalOff,
    setCurrentPlaceModalOn: StateHandler.setCurrentPlaceModalOn,
    setCurrentPlaceModalOff: StateHandler.setCurrentPlaceModalOff,
    setCurrentPlaceDetails: StateHandler.setCurrentPlaceDetails,
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
