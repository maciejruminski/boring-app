const initialState: IFiltersAndPlacesState = {
  places: [],
  filters: {
    distance: "1000",
    keyword: "",
    type: "accounting",
    minPrice: "_",
    maxPrice: "_",
    openNow: false,
  },
  currentLocation: "",
  isBusy: false,
};

export default initialState;
