// Controllers.
import Helper from "@controllers/Helper";
import LocalStorage from "@controllers/LocalStorage";
import API from "@controllers/API";

export default class HistoricPlacesActions {
  private state: IHistoricPlacesState;
  private dispatch: React.Dispatch<IHistoricPlacesAction>;
  private historicPlaces: Place[];

  constructor(
    state: IHistoricPlacesState,
    dispatch: React.Dispatch<IHistoricPlacesAction>
  ) {
    this.dispatch = dispatch;
    this.state = state;
    this.historicPlaces = state.historicPlaces;
  }

  setHistoricPlaces = async (): Promise<void> => {
    const historicPlaces = LocalStorage.getHistoricPlaces();

    if (historicPlaces.length) {
      this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
      // this.setBusyOff();

      return;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getHistoricPlaces(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      if (response.historicPlaces.length) {
        const parsedHistoricPlaces: Place[] = JSON.parse(
          response.historicPlaces
        );
        LocalStorage.setHistoricPlaces(parsedHistoricPlaces);
        this.dispatch({
          type: "setHistoricPlaces",
          payload: parsedHistoricPlaces,
        });
      }

      // this.setBusyOff();

      return response.historicPlaces;
    }
  };

  addHistoricPlace = (place: Place): void => {
    // this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(place.id);

    isHistoricPlaceSaved.then((isSaved: any) => {
      if (isSaved) {
        // this.setBusyOff();
        console.log("Historyczne miejsce już istnieje!");
        return;
      }

      const historicPlaces = [...this.historicPlaces, place];

      console.log(place);

      Helper.setHistoricPlaces(historicPlaces).then(() => {
        console.log("Historyczne miejsce dodane do bazy danych!");
        this.dispatch({ type: "setHistoricPlaces", payload: historicPlaces });
        // this.setBusyOff();
      });
    });
  };

  removeHistoricPlace = (place: PlaceWithDetails): void => {
    // this.setBusyOn();

    const isHistoricPlaceSaved = Helper.checkIfHistoricPlaceSaved(place.id);

    isHistoricPlaceSaved.then((isSaved: any) => {
      if (isSaved) {
        const historicPlaceToRemove = Helper.getPlaceById(
          this.historicPlaces,
          place.id
        );

        // const newPlaceDetails = this.state.currentPlace;



        // this.setCurrentPlace(newPlaceDetails);

        const historicPlaces: Place[] = [...this.historicPlaces].filter(
          (place: Place) => place.id !== historicPlaceToRemove.id
        );

        Helper.setHistoricPlaces(historicPlaces).then(() => {
          console.log("Historyczne miejsce usunięte z bazy danych!");
          this.dispatch({
            type: "setHistoricPlaces",
            payload: historicPlaces,
          });

          // this.setBusyOff();
        });
      }
    });
  };

  setHistoricPlacesModalOn = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOn" });
  };

  setHistoricPlacesModalOff = (): void => {
    this.dispatch({ type: "setHistoricPlacesModalOff" });
  };

  getAllActions = (): IHistoricPlacesActions => {
    return {
      addHistoricPlace: this.addHistoricPlace,
      removeHistoricPlace: this.removeHistoricPlace,
      setHistoricPlaces: this.setHistoricPlaces,
      setHistoricPlacesModalOn: this.setHistoricPlacesModalOn,
      setHistoricPlacesModalOff: this.setHistoricPlacesModalOff,
    };
  };
}
