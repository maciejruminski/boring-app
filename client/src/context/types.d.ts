type TypesOfFilters = {
  distance: number;
  keyword: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  openNow: boolean;
};

type Filters = {
  types: TypesOfFilters;
};

interface IState {
  isLoggedIn: boolean;
  isBusy: boolean;
  signUp: {
    email: string;
    password: string;
    error: string;
    isSent: boolean;
  };
  filters: Filters;
  places: Place[];
  currentPlace: {
    details: {
      id: string;
      name?: string;
      rating?: number;
      website?: string;
      isSavedAsHistoric: boolean;
    };
  };
  historicPlaces: {
    places: Place[];
  };
  modals: {
    isFiltersModalOpen: boolean;
    isCurrentPlaceModalOpen: boolean;
    isSavingHistoricPlaceModalOpen: boolean;
    isHistoricPlacesModalOpen: boolean;
  }
}

interface IActions {
  setUserAuthenticationOn: () => void;
  setUserAuthenticationOff: () => void;
  setUserAuthenticationFromLocalStorage: () => void;
  verifyOneTimePassword: (
    e: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ) => void;
  setBusyOn: () => void;
  setBusyOff: () => void;
  filter: (filters: TypesOfFilters) => void;
  setFiltersModalOn: () => void;
  setFiltersModalOff: () => void;
  setSavingHistoricPlaceModalOn: () => void;
  setSavingHistoricPlaceModalOff: () => void;
  setCurrentPlaceModalOn: () => void;
  setCurrentPlaceModalOff: () => void;
  getPlaceDetails: (placeId: string) => void;
  getRandomPlace: (places: [], currentPlaceId: string) => void;
  setPlacesFromLocalStorage: () => void;
  setFilterTypesFromLocalStorage: () => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setSignUpEmail: (input: HTMLInputElement) => void;
  setSignUpEmailAsSent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  setOneTimePassword: (input: HTMLInputElement) => void;
  addHistoricPlace: (id: string) => void;
  removeHistoricPlace: (id: string) => void;
  setHistoricPlaces: () => void;
  setHistoricPlacesFromLocalStorage: () => void;
  setHistoricPlacesModalOn: () => void;
  setHistoricPlacesModalOff: () => void;
}

type ActionTypes =
  | "setUserAuthenticationOn"
  | "setUserAuthenticationOff"
  | "setUserAuthenticationFromLocalStorage"
  | "setBusyOn"
  | "setBusyOff"
  | "setFilterTypes"
  | "setSignUpEmailAsSent";

interface IAction {
  type: ActionTypes;
  payload?: any;
}

type ReducerType = (state: IState, action: IAction) => IState;

type ContextHook = () => {
  state: IState;
  actions: Actions;
};

interface IStateHandler {
  state: IState;
  payload?: any;
}

interface Place {
  id: string;
  name: string;
  rating: number;
  geometry: {
    location: { lat: number; lng: number };
    viewport: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
  };
  openNow: boolean;
  isSavedAsHistoric: boolean;
}
