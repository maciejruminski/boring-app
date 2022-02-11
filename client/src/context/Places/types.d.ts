interface IPlacesState {
  places: Places;
  historicPlaces: Places;
  maximumNumberOfPlaces: number;
  numberOfPlacesToShowAtOnce: number;
  isShowMorePlacesButtonVisible: boolean;
  currentPlace: PlaceWithDetails;
  modals: {
    isCurrentPlaceModalOpen: boolean;
    isHistoricPlacesModalOpen: boolean;
  };
}

interface IPlacesActions {
  setCurrentPlace: (placeWithDetails: PlaceWithDetails) => void;
  getCurrentPlaceDetails: (place: Place) => Promise<void>;

  addHistoricPlace: (place: Place) => void;
  removeHistoricPlace: (id: string) => void;
  setHistoricPlaces: () => void;
  setHistoricPlacesModalOn: () => void;
  setHistoricPlacesModalOff: () => void;
  setNumberOfPlacesToShowAtOnce: () => void;
  resetNumberOfPlacesToShowAtOnce: () => void;
  setNumberOfPlacesButtonVisibility: (places: any) => void;
  setMaximumNumberOfPlaces: (number: number) => void;

}

type PlacesActionTypes =
| "setPlaces"
| "setHistoricPlaces"
| "setCurrentPlace"
| "setHistoricPlacesModalOn"
| "setHistoricPlacesModalOff"
| "setPlacesFromLocalStorage"
| "setNumberOfPlacesToShowAtOnce"
| "setNumberOfPlacesButtonVisibility"
| "setMaximumNumberOfPlaces";

interface IPlacesAction {
  type: PlacesActionTypes;
  payload?: any;
}

type PlacesReducerType = (state: IPlacesState, action: IPlacesAction) => IPlacesState;

type PlacesContextHook = () => {
  state: IPlacesState;
  actions: IPlacesActions;
};

interface IPlacesStateHandler {
  state: IPlacesState;
  payload?: any;
}
