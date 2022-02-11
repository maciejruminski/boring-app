export default class StateHandler {
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
    setHistoricPlaces: StateHandler.setHistoricPlaces,
    setHistoricPlacesModalOn: StateHandler.setHistoricPlacesModalOn,
    setHistoricPlacesModalOff: StateHandler.setHistoricPlacesModalOff,
  };
}
