type TypesOfFilters = {
  distance: number;
  keyword: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  openNow: boolean;
};

type Filters = {
  isModalOpen: boolean;
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
  places: [];
  currentPlace: {
    isModalOpen: boolean;
    details: {
      id: string;
      name?: string;
      rating?: number;
      website?: string;
    };
  };
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
  setPlaceModalOn: () => void;
  setPlaceModalOff: () => void;
  getPlace: (placeId: string) => void;
  getRandomPlace: (places: [], currentPlaceId: string) => void;
  setPlacesFromLocalStorage: () => void;
  setFilterTypesFromLocalStorage: () => void;
  validateInput: (input: HTMLInputElement) => boolean;
  setSignUpEmail: (input: HTMLInputElement) => void;
  setSignUpEmailAsSent: () => void;
  inputOnChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  sendPassword: (email: string) => void;
  setOneTimePassword: (input: HTMLInputElement) => void;
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
