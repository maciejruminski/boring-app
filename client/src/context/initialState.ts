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
    isModalOpen: false,
    types: {
      distance: 1000,
      keyword: "",
      type: "accounting",
      minPrice: 0,
      maxPrice: 4,
      openNow: false,
    },
  },
  places: [],
  currentPlace: {
    isModalOpen: false,
    isSavingModalOpen: false,
    details: {
      id: "",
    },
  },
  historicPlaces: {
    places: [],
    isModalOpen: false,
  },
};

export default initialState;
