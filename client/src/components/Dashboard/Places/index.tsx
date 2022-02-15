// Components.
import Heading from "./Heading";
import List from "./List";
import Buttons from "./Buttons";
import CurrentPlace from "./CurrentPlace";
import HistoricPlaces from "./HistoricPlaces";

// Providers.
import { DetailsContextProvider } from "@context/Details";
import { HistoricPlacesContextProvider } from "@context/HistoricPlaces";

export default function Places() {
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
