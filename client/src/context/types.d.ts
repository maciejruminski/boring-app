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
  distance: string;
  keyword: string;
  type: string;
  minPrice: string;
  maxPrice: string;
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
  setPlacesByFilters: (filters: Filters) => void;
  filterForNewPlacesByFilters: (filters: Filters) => void;
  setFiltersModalOn: () => void;
  setFiltersModalOff: () => void;
  setCurrentPlaceModalOn: () => void;
  setCurrentPlaceModalOff: () => void;
  setCurrentPlace: (placeWithDetails: PlaceWithDetails) => void;
  getCurrentPlaceDetails: (place: Place) => Promise<void>;
  getRandomPlaceDetails: (currentPlaceID: string) => void;
  setPlacesFromLocalStorage: () => void;
  setFilters: () => void;
  setFiltersAndNewPlaces: () => Promise<void>;
  // setFiltersFromLocalStorage: () => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setSignUpEmail: (input: HTMLInputElement) => void;
  setSignUpEmailAsSent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  setOneTimePassword: (input: HTMLInputElement) => void;
  addHistoricPlace: (place: Place) => void;
  removeHistoricPlace: (id: string) => void;
  setHistoricPlaces: () => void;
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

type FilterTypes = {
  accounting: string;
  airport: string;
  amusement_park: string;
  aquarium: string;
  art_gallery: string;
  atm: string;
  bakery: string;
  bank: string;
  bar: string;
  beauty_salon: string;
  book_store: string;
  bowling_alley: string;
  cafe: string;
  campground: string;
  casino: string;
  city_hall: string;
  clothing_store: string;
  convenience_store: string;
  department_store: string;
  embassy: string;
  fire_station: string;
  florist: string;
  gas_station: string;
  gym: string;
  hair_care: string;
  hardware_store: string;
  jewelry_store: string;
  library: string;
  liquor_store: string;
  lodging: string;
  meal_delivery: string;
  meal_takeaway: string;
  mosque: string;
  movie_rental: string;
  movie_theater: string;
  museum: string;
  night_club: string;
  park: string;
  parking: string;
  pet_store: string;
  pharmacy: string;
  post_office: string;
  restaurant: string;
  shopping_mall: string;
  spa: string;
  stadium: string;
  store: string;
  subway_station: string;
  supermarket: string;
  synagogue: string;
  taxi_stand: string;
  tourist_attraction: string;
  train_station: string;
  travel_agency: string;
  university: string;
  zoo: string;
};

type Prices = {
  "0": "Tanio";
  "1": "Średnio";
  "2": "Drogo";
  "3": "Bardzo drogo";
};
