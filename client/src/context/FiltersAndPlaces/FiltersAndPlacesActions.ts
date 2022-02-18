// Controllers.
import Helper from "@controllers/Helper";
import LocalStorage from "@controllers/LocalStorage";
import API from "@controllers/API";

export default class FiltersAndPlacesActions {
  private state: IFiltersAndPlacesState;
  private dispatch: React.Dispatch<IFiltersAndPlacesAction>;

  constructor(
    state: IFiltersAndPlacesState,
    dispatch: React.Dispatch<IFiltersAndPlacesAction>
  ) {
    this.dispatch = dispatch;
    this.state = state;
  }

  private setFilters = async (): Promise<Filters | void> => {
    const filters = LocalStorage.getFilters();
    const filtersAreNotEmpty = Object.keys(filters).length !== 0;

    if (filtersAreNotEmpty) {
      this.dispatch({ type: "setFilters", payload: filters });

      return filters;
    }

    const userUUID = LocalStorage.getUserUUID();

    if (userUUID) {
      const response = await API.getFilters(userUUID);

      if (Helper.statusIsNotOk(response.status)) {
        return;
      }

      const filtersAreNotEmpty = Object.keys(response.filters).length !== 0;

      if (filtersAreNotEmpty) {
        const filters: Filters = JSON.parse(response.filters);

        LocalStorage.setFilters(filters);
        this.dispatch({ type: "setFilters", payload: filters });

        return filters;
      }

      // this.setBusyOff();
    }
  };

  updateFilters = async (filters: Filters): Promise<void> => {
    const filtersAreNotEqual = !Helper.comparewithLocalStorageFilters(filters);

    if (filtersAreNotEqual) {
      this.dispatch({ type: "setFilters", payload: filters });

      LocalStorage.setFilters(filters);

      const userUUID = LocalStorage.getUserUUID();

      if (userUUID) {
        const response = await API.addFilters(filters, userUUID);

        if (Helper.statusIsNotOk(response.status)) {
          return;
        }

        console.log("Filters are saved");
      }
    }
  };

  showNewPlacesByFilters = async (filters: Filters): Promise<void> => {
    // this.setBusyOn();

    const filtersAreEqual = Helper.comparewithLocalStorageFilters(filters);
    const placesFromLocalStorage = LocalStorage.getPlaces();

    if (filtersAreEqual && placesFromLocalStorage.length) {
      this.dispatch({ type: "setPlaces", payload: placesFromLocalStorage });

      // this.setBusyOff();
      return;
    }

    const response = await API.getPlaces(filters, this.state.currentLocation);
    console.log(response);
    if (Helper.statusIsNotOk(response.status)) {
      return;
    }

    LocalStorage.setPlaces(response.places);

    this.dispatch({ type: "setPlaces", payload: response.places });
    // this.setBusyOff();
  };

  setFiltersAndShowPlaces = (): void => {
    if (this.state.currentLocation) {
      this.setFilters().then((updatedFilters: Filters | void) =>
        this.showNewPlacesByFilters(
          updatedFilters ? updatedFilters : this.state.filters
        )
      );
    }
  };

  setCurrentLocation = (geolocationPosition: GeolocationPosition): void => {
    const { latitude, longitude } = geolocationPosition.coords;
    const location: string = `${latitude},${longitude}`;

    this.dispatch({ type: "setCurrentLocation", payload: location });
  };

  getAllActions = (): IFiltersAndPlacesActions => {
    return {
      showNewPlacesByFilters: this.showNewPlacesByFilters,
      setFiltersAndShowPlaces: this.setFiltersAndShowPlaces,
      updateFilters: this.updateFilters,
      setCurrentLocation: this.setCurrentLocation,
    };
  };
}
