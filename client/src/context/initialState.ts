const initialState: IState = {
  isLoggedIn: false,
  isBusy: false,
  signUp: {
    email: "",
    password: "",
    error: "",
    isSent: false,
  },
  filters: {
    distance: 1000,
    keyword: "",
    type: "accounting",
    minPrice: 0,
    maxPrice: 4,
    openNow: false,
  },
  places: [],
  currentPlace: {
    id: "",
    isSavedAsHistoric: false,
  },
  historicPlaces: [],
  modals: {
    isFiltersModalOpen: false,
    isCurrentPlaceModalOpen: false,
    isSavingHistoricPlaceModalOpen: false,
    isHistoricPlacesModalOpen: false,
  },
};

export default initialState;
