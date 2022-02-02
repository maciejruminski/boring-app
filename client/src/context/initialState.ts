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
  historicPlaces: [],
  maximumNumberOfPlaces: 0,
  numberOfPlacesToShowAtOnce: 5,
  isShowMorePlacesButtonVisible: false,
  currentPlace: {
    id: "",
    name: "",
    rating: 0,
    geometry: {
      location: { lat: 0, lng: 0 },
      viewport: {
        northeast: { lat: 0, lng: 0 },
        southwest: { lat: 0, lng: 0 },
      },
    },
    openNow: false,
    isSavedAsHistoric: false,
  },
  modals: {
    isFiltersModalOpen: true,
    isCurrentPlaceModalOpen: false,
    isHistoricPlacesModalOpen: false,
  },
};

export default initialState;
