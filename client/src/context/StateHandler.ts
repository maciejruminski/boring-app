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

  static setFilters({ state, payload: filterTypes }: IStateHandler) {
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
  
  static setPlaceModalOn({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isModalOpen: true } };
  }
  
  static setPlaceModalOff({ state }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, isModalOpen: false } };
  }
  
  static setCurrentPlaceDetails({ state, payload: details }: IStateHandler) {
    return { ...state, currentPlace: { ...state.currentPlace, details } };
  }

  static handlers = {
    setUserAuthenticationOn: StateHandler.setUserAuthenticationOn,
    setUserAuthenticationOff: StateHandler.setUserAuthenticationOff,
    setUserAuthenticationFromLocalStorage:
      StateHandler.setUserAuthenticationFromLocalStorage,
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setFilters: StateHandler.setFilters,
    setPlaces: StateHandler.setPlaces,
    setFiltersModalOn: StateHandler.setFiltersModalOn,
    setFiltersModalOff: StateHandler.setFiltersModalOff,
    setPlaceModalOn: StateHandler.setPlaceModalOn,
    setPlaceModalOff: StateHandler.setPlaceModalOff,
    setCurrentPlaceDetails: StateHandler.setCurrentPlaceDetails,
  };
}
