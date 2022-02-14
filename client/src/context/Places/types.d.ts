interface IPlacesState {
  maximumNumberOfPlaces: number;
  numberOfPlacesToShowAtOnce: number;
  isShowMorePlacesButtonVisible: boolean;
}

interface IPlacesActions {
  setNumberOfPlacesToShowAtOnce: () => void;
  resetNumberOfPlacesToShowAtOnce: () => void;
  setNumberOfPlacesButtonVisibility: (places: any) => void;
  setMaximumNumberOfPlaces: (number: number) => void;
}

type PlacesActionTypes =
  | "setNumberOfPlacesToShowAtOnce"
  | "setNumberOfPlacesButtonVisibility"
  | "setMaximumNumberOfPlaces";

interface IPlacesAction {
  type: PlacesActionTypes;
  payload?: any;
}

type PlacesReducerType = (
  state: IPlacesState,
  action: IPlacesAction
) => IPlacesState;

type PlacesContextHook = () => {
  state: IPlacesState;
  actions: IPlacesActions;
};

interface IPlacesStateHandler {
  state: IPlacesState;
  payload?: any;
}
