export default class PlacesActions {
  private state: IPlacesState;
  private dispatch: React.Dispatch<IPlacesAction>;

  constructor(state: IPlacesState, dispatch: React.Dispatch<IPlacesAction>) {
    this.dispatch = dispatch;
    this.state = state;
  }

  resetNumberOfPlacesToShowAtOnce = (): void => {
    this.dispatch({ type: "setNumberOfPlacesToShowAtOnce", payload: 5 });
  };

  setNumberOfPlacesToShowAtOnce = (): void => {
    const numberOfPlacesToShowAtOnceIncreaser = 5;
    const numberOfPlacesToShowAtOnce =
      this.state.numberOfPlacesToShowAtOnce +
      numberOfPlacesToShowAtOnceIncreaser;

    this.dispatch({
      type: "setNumberOfPlacesToShowAtOnce",
      payload: numberOfPlacesToShowAtOnce,
    });
  };

  setNumberOfPlacesButtonVisibility = (places: any): void => {
    const isButtonVisible =
      places.length > this.state.numberOfPlacesToShowAtOnce;

    this.dispatch({
      type: "setNumberOfPlacesButtonVisibility",
      payload: isButtonVisible,
    });
  };

  setMaximumNumberOfPlaces = (number: number): void => {
    this.dispatch({ type: "setMaximumNumberOfPlaces", payload: number });
  };

  getAllActions = (): IPlacesActions => {
    return {
      setNumberOfPlacesToShowAtOnce: this.setNumberOfPlacesToShowAtOnce,
      setMaximumNumberOfPlaces: this.setMaximumNumberOfPlaces,
      resetNumberOfPlacesToShowAtOnce: this.resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility: this.setNumberOfPlacesButtonVisibility,
    };
  };
}
