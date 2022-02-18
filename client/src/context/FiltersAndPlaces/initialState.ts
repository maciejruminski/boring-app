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
};

export default initialState;
