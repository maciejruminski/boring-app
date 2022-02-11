interface IHistoricPlacesState {
  historicPlaces: Places;
  isHistoricPlacesModalOpen: boolean;
}

interface IHistoricPlacesActions {
  addHistoricPlace: (place: Place) => void;
  removeHistoricPlace: (place: PlaceWithDetails) => void;
  setHistoricPlaces: () => void;
  setHistoricPlacesModalOn: () => void;
  setHistoricPlacesModalOff: () => void;
}

type HistoricPlacesActionTypes =
  | "setHistoricPlaces"
  | "setHistoricPlacesModalOn"
  | "setHistoricPlacesModalOff";

interface IHistoricPlacesAction {
  type: HistoricPlacesActionTypes;
  payload?: any;
}

type HistoricPlacesReducerType = (
  state: IHistoricPlacesState,
  action: IHistoricPlacesAction
) => IHistoricPlacesState;

type HistoricPlacesContextHook = () => {
  state: IHistoricPlacesState;
  actions: IHistoricPlacesActions;
};

interface IHistoricPlacesStateHandler {
  state: IHistoricPlacesState;
  payload?: any;
}
