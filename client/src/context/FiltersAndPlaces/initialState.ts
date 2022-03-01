const initialState: IFiltersAndPlacesState = {
  places: [],
  filters: {
    distance: "1000",
    keyword: "",
    type: "bar",
    minPrice: "_",
    maxPrice: "_",
    openNow: false,
  },
  currentLocation: "",
  isBusy: false,
};

export default initialState;
