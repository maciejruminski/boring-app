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

interface IFiltersAndPlacesState {
  filters: Filters;
  places: Places;
  currentLocation: string;
  isBusy: boolean;
}

interface IFiltersAndPlacesActions {
  setBusyOn: () => void;
  setBusyOff: () => void;
  showNewPlacesByFilters: (filters: Filters) => void;
  setFiltersAndShowPlaces: () => void;
  updateFilters: (filters: Filters) => Promise<void>;
  setCurrentLocation: (geolocationPosition: GeolocationPosition) => void;
}

type FiltersAndPlacesActionTypes =
  | "setBusyOn"
  | "setBusyOff"
  | "setFilters"
  | "setPlaces"
  | "setCurrentLocation";

interface IFiltersAndPlacesAction {
  type: FiltersAndPlacesActionTypes;
  payload?: any;
}

type FiltersAndPlacesReducerType = (
  state: IFiltersAndPlacesState,
  action: IFiltersAndPlacesAction
) => IFiltersAndPlacesState;

type FiltersAndPlacesContextHook = () => {
  state: IFiltersAndPlacesState;
  actions: IFiltersAndPlacesActions;
};

interface IFiltersAndPlacesStateHandler {
  state: IFiltersAndPlacesState;
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
  _: "-";
  _0: "Tanio";
  _1: "Średnio";
  _2: "Drogo";
  _3: "Bardzo drogo";
};
