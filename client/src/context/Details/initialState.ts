const initialState: IDetailsState = {
  isBusy: false,
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
  },
  isCurrentPlaceModalOpen: false,
};

export default initialState;
