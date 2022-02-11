export default class FiltersActions {
  private dispatch: React.Dispatch<IFiltersAction>;

  constructor(state: IFiltersState, dispatch: React.Dispatch<IFiltersAction>) {
    this.dispatch = dispatch;
  }

  setFiltersModalOn = (): void => {
    this.dispatch({ type: "setFiltersModalOn" });
  };

  setFiltersModalOff = (): void => {
    this.dispatch({ type: "setFiltersModalOff" });
  };

  getAllActions = (): IFiltersActions => {
    return {
      setFiltersModalOn: this.setFiltersModalOn,
      setFiltersModalOff: this.setFiltersModalOff,
    };
  };
}
