const initialState: IState = {
  isLoggedIn: false,
  isBusy: false,
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
    details: {
      id: ''
    }
  }
};

export default initialState;
