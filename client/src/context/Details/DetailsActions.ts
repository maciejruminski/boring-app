// Controllers.
import Helper from "@controllers/Helper";
import API from "@controllers/API";

export default class DetailsActions {
  private dispatch: React.Dispatch<IDetailsAction>;

  constructor(state: IDetailsState, dispatch: React.Dispatch<IDetailsAction>) {
    this.dispatch = dispatch;
  }

  setGeolocationAsAllowed = (): void => {
    this.dispatch({ type: "setGeolocationAsAllowed" });
  };

  setBusyOn = (): void => {
    this.dispatch({ type: "setBusyOn" });
  };

  setBusyOff = (): void => {
    this.dispatch({ type: "setBusyOff" });
  };

  setCurrentPlaceModalOn = (): void => {
    this.dispatch({ type: "setCurrentPlaceModalOn" });
  };

  setCurrentPlaceModalOff = (): void => {
    this.dispatch({ type: "setCurrentPlaceModalOff" });
  };

  setCurrentPlace = (placeWithDetails: PlaceWithDetails): void => {
    this.dispatch({ type: "setCurrentPlace", payload: placeWithDetails });
  };

  showDetails = async (place: Place): Promise<void> => {
    this.setBusyOn();

    const response = await API.getCurrentPlaceDetails(place.id);

    if (Helper.statusIsNotOk(response.status)) {
      return;
    }

    const placeDetails: PlaceDetails = Helper.extractPlaceDetailsFromAPI(
      response.placeDetails
    );

    let placeWithDetails: PlaceWithDetails = {
      ...place,
      ...placeDetails,
    };

    this.setCurrentPlace(placeWithDetails);
    this.setCurrentPlaceModalOn();
    this.setBusyOff();
  };

  getAllActions = (): IDetailsActions => {
    return {
      setGeolocationAsAllowed: this.setGeolocationAsAllowed,
      setBusyOn: this.setBusyOn,
      setBusyOff: this.setBusyOff,
      setCurrentPlaceModalOn: this.setCurrentPlaceModalOn,
      setCurrentPlaceModalOff: this.setCurrentPlaceModalOff,
      setCurrentPlace: this.setCurrentPlace,
      showDetails: this.showDetails,
    };
  };
}
