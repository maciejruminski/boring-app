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

interface IDetailsState {
  isBusy: boolean;
  isCurrentPlaceModalOpen: boolean;
  isGeolocationAllowed: boolean;
  currentPlace: PlaceWithDetails;
}

interface IDetailsActions {
  setGeolocationAsAllowed: () => void;
  setBusyOn: () => void;
  setBusyOff: () => void;
  setCurrentPlaceModalOn: () => void;
  setCurrentPlaceModalOff: () => void;
  setCurrentPlace: (placeWithDetails: PlaceWithDetails) => void;
  showDetails: (place: Place) => Promise<void>;
}

type DetailsActionTypes =
  | "setGeolocationAsAllowed"
  | "setBusyOn"
  | "setBusyOff"
  | "setCurrentPlace"
  | "setCurrentPlaceModalOn"
  | "setCurrentPlaceModalOff";

interface IDetailsAction {
  type: DetailsActionTypes;
  payload?: any;
}

type DetailsReducerType = (
  state: IDetailsState,
  action: IDetailsAction
) => IDetailsState;

type DetailsContextHook = () => {
  state: IDetailsState;
  actions: IDetailsActions;
};

interface IDetailsStateHandler {
  state: IDetailsState;
  payload?: any;
}
