export default class StateHandler {
  static setBusyOn({ state }: IHistoricPlacesStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IHistoricPlacesStateHandler) {
    return { ...state, isBusy: false };
  }

  static setHistoricPlacesModalOn({ state }: IHistoricPlacesStateHandler) {
    return { ...state, isHistoricPlacesModalOpen: true };
  }

  static setHistoricPlacesModalOff({ state }: IHistoricPlacesStateHandler) {
    return { ...state, isHistoricPlacesModalOpen: false };
  }

  static setHistoricPlaces({
    state,
    payload: historicPlaces,
  }: IHistoricPlacesStateHandler) {
    return { ...state, historicPlaces };
  }

  static handlers = {
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setHistoricPlaces: StateHandler.setHistoricPlaces,
    setHistoricPlacesModalOn: StateHandler.setHistoricPlacesModalOn,
    setHistoricPlacesModalOff: StateHandler.setHistoricPlacesModalOff,
  };
}
