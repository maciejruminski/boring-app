interface APIPlaceDetails {
  address_components: {}[];
  adr_address: string;
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  international_phone_number: string;
  name: string;
  opening_hours: {
    open_now: boolean;
    periods: {}[];
    weekday_text: string[];
  };
  photos: {}[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  reviews: {}[];
  types: string[];
  url: string;
  user_ratings_total: number;
  utc_offset: number;
  vicinity: string;
  website: string;
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

interface PlaceDetails {
  website?: string;
  reviews?: {}[];
  vicinity?: string;
  phone?: string;
}

interface PlaceWithDetails extends Place, PlaceDetails {}

type Places = Place[];

type Filters = {
  distance: number;
  keyword: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  openNow: boolean;
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
  places: Places;
  historicPlaces: Places;
  maximumNumberOfPlaces: number;
  numberOfPlacesToShowAtOnce: number;
  isShowMorePlacesButtonVisible: boolean;
  currentPlace: PlaceWithDetails;
  modals: {
    isFiltersModalOpen: boolean;
    isCurrentPlaceModalOpen: boolean;
    isHistoricPlacesModalOpen: boolean;
  };
}

interface IActions {
  setUserAuthenticationOn: () => void;
  setUserAuthenticationOff: () => void;
  setUserAuthenticationByLocalStorage: () => void;
  verifyOneTimePassword: (
    e: React.FormEvent<HTMLFormElement>,
    oneTimePassword: string
  ) => void;
  setBusyOn: () => void;
  setBusyOff: () => void;
  setNewPlacesByFilters: (filters: Filters) => void;
  setFiltersModalOn: () => void;
  setFiltersModalOff: () => void;
  setCurrentPlaceModalOn: () => void;
  setCurrentPlaceModalOff: () => void;
  setCurrentPlace: (placeWithDetails: PlaceWithDetails) => void;
  getCurrentPlaceDetails: (place: Place) => Promise<void>;
  getRandomPlaceDetails: (currentPlaceID: string) => void;
  setPlacesFromLocalStorage: () => void;
  setFiltersFromLocalStorage: () => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setSignUpEmail: (input: HTMLInputElement) => void;
  setSignUpEmailAsSent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  setOneTimePassword: (input: HTMLInputElement) => void;
  addHistoricPlace: (place: Place) => void;
  removeHistoricPlace: (id: string) => void;
  setHistoricPlaces: () => void;
  setHistoricPlacesFromLocalStorage: () => void;
  setHistoricPlacesModalOn: () => void;
  setHistoricPlacesModalOff: () => void;
  setNumberOfPlacesToShowAtOnce: () => void;
  resetNumberOfPlacesToShowAtOnce: () => void;
  setNumberOfPlacesButtonVisibility: () => void;
  setMaximumNumberOfPlaces: (number: number) => void;
}

type ActionTypes =
  | "setUserAuthenticationOn"
  | "setUserAuthenticationOff"
  | "setBusyOn"
  | "setBusyOff"
  | "setFiltersModalOn"
  | "setFiltersModalOff"
  | "setFilters"
  | "setPlaces"
  | "setHistoricPlaces"
  | "setCurrentPlace"
  | "setCurrentPlaceModalOn"
  | "setCurrentPlaceModalOff"
  | "setHistoricPlacesModalOn"
  | "setHistoricPlacesModalOff"
  | "setPlacesFromLocalStorage"
  | "setOneTimePassword"
  | "setSignUpError"
  | "setSignUpEmail"
  | "setSignUpEmailAsSent"
  | "setNumberOfPlacesToShowAtOnce"
  | "setNumberOfPlacesButtonVisibility"
  | "setMaximumNumberOfPlaces";

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
