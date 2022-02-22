// Functions.
import { useEffect } from "react";

// Components.
import Heading from "./Heading";
import List from "./List";
import Buttons from "./Buttons";
import CurrentPlace from "./CurrentPlace";
import HistoricPlaces from "./HistoricPlaces";

// Providers.
import { DetailsContextProvider } from "@context/Details";
import { HistoricPlacesContextProvider } from "@context/HistoricPlaces";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";

export default function Places() {
  const {
    state: { currentLocation },
    actions: { setFiltersAndShowPlaces, setCurrentLocation },
  } = useFiltersAndPlacesContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success: GeolocationPosition) =>
      setCurrentLocation(success)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFiltersAndShowPlaces(), [currentLocation]);

  return (
    <>
      <Heading />
      <DetailsContextProvider>
        <List />
        <HistoricPlacesContextProvider>
          <HistoricPlaces />
          <CurrentPlace />
          <Buttons />
        </HistoricPlacesContextProvider>
      </DetailsContextProvider>
    </>
  );
}
