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
  amusement_park: string;
  aquarium: string;
  art_gallery: string;
  bar: string;
  book_store: string;
  bowling_alley: string;
  cafe: string;
  campground: string;
  casino: string;
  gym: string;
  library: string;
  meal_takeaway: string;
  movie_theater: string;
  museum: string;
  night_club: string;
  park: string;
  restaurant: string;
  stadium: string;
  tourist_attraction: string;
  zoo: string;
};

type Prices = {
  _: "-";
  _0: "Tanio";
  _1: "Średnio";
  _2: "Drogo";
  _3: "Bardzo drogo";
};
