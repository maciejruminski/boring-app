const initialState: IPlacesState = {
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

  },
  modals: {
    isCurrentPlaceModalOpen: false,
    isHistoricPlacesModalOpen: false,
  },
};

export default initialState;
