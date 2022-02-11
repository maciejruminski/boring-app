export default class StateHandler {
  static setFiltersModalOn({ state }: IFiltersStateHandler) {
    return { ...state, isFiltersModalOpen: true };
  }

  static setFiltersModalOff({ state }: IFiltersStateHandler) {
    return { ...state, isFiltersModalOpen: false };
  }

  static handlers = {
    setFiltersModalOn: StateHandler.setFiltersModalOn,
    setFiltersModalOff: StateHandler.setFiltersModalOff,
  };
}
