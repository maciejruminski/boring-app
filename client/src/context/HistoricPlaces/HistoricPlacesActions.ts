// Controllers.
import Helper from "@controllers/Helper";
import LocalStorage from "@controllers/LocalStorage";
import API from "@controllers/API";

export default class HistoricPlacesActions {
  // private state: IHistoricPlacesState;
  private dispatch: React.Dispatch<IHistoricPlacesAction>;
  private historicPlaces: Place[];

  constructor(
    state: IHistoricPlacesState,
    dispatch: React.Dispatch<IHistoricPlacesAction>
  ) {
    this.dispatch = dispatch;
    // this.state = state;
    this.historicPlaces = state.historicPlaces;
  }

  setBusyOn = (): void => {
    this.dispatch({ type: "setBusyOn" });
  };

  setBusyOff = (): void => {
    this.dispatch({ type: "setBusyOff" });
  };

  setHistoricPlaces = async (): Promise<void> => {
    this.setBusyOn();

    const historicPlaces = LocalStorage.getHistoricPlaces();

    if (historicPlaces && Boolean(historicPlaces.length)) {
      this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
      this.setBusyOff();

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getHistoricPlaces(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      if (response.historicPlaces && Boolean(response.historicPlaces.length)) {
        const parsedHistoricPlaces: Place[] = JSON.parse(
          response.historicPlaces
        );
        LocalStorage.setHistoricPlaces(parsedHistoricPlaces);
        this.dispatch({
          type: "setHistoricPlaces",
          payload: parsedHistoricPlaces,
        });
      }

      this.setBusyOff();

      return response.historicPlaces;
    }
  };

  addHistoricPlace = async (place: Place): Promise<void> => {
    this.setBusyOn();

    const isHistoricPlaceSaved = await Helper.checkIfHistoricPlaceIsSaved(
      place.id
    );

    if (isHistoricPlaceSaved) {
      this.setBusyOff();
      return;
    }

    const historicPlaces = [...this.historicPlaces, place];

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      LocalStorage.setHistoricPlaces(historicPlaces);
      const response = await API.addHistoricPlaces(historicPlaces, userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      this.dispatch({
        type: "setHistoricPlaces",
        payload: historicPlaces,
      });

      this.setBusyOff();
    }
  };

  removeHistoricPlace = async (place: PlaceWithDetails): Promise<void> => {
    this.setBusyOn();

    const isHistoricPlaceSaved = await Helper.checkIfHistoricPlaceIsSaved(
      place.id
    );

    if (isHistoricPlaceSaved) {
      const historicPlaceToRemove = Helper.getPlaceById(
        this.historicPlaces,
        place.id
      );

      const historicPlaces: Place[] = [...this.historicPlaces].filter(
        (place: Place) => place.id !== historicPlaceToRemove.id
      );

      const userUUID = LocalStorage.getUserUUID();

      if (userUUID) {
        LocalStorage.setHistoricPlaces(historicPlaces);
        const response = await API.addHistoricPlaces(historicPlaces, userUUID);

        if (Helper.statusIsNotOk(response.status)) {
          return;
        }

        this.dispatch({
          type: "setHistoricPlaces",
          payload: historicPlaces,
        });

        this.setBusyOff();
      }
    }
  };

  setHistoricPlacesModalOn = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOn" });
  };

  setHistoricPlacesModalOff = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOff" });
  };

  getAllActions = (): IHistoricPlacesActions => {
    return {
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      addHistoricPlace: this.addHistoricPlace,
      removeHistoricPlace: this.removeHistoricPlace,
      setHistoricPlaces: this.setHistoricPlaces,
      setHistoricPlacesModalOn: this.setHistoricPlacesModalOn,
      setHistoricPlacesModalOff: this.setHistoricPlacesModalOff,
    };
  };
}
