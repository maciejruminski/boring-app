// Components.
import Heading from "./Heading";
import PlacesList from "./PlacesList";
import Buttons from "./Buttons";
import CurrentPlace from "./CurrentPlace";
import HistoricPlacesList from "./HistoricPlacesList";

export default function Places() {
  return (
    <>
      <Heading />
      <PlacesList />
      <Buttons />
      <CurrentPlace />
      <HistoricPlacesList />
    </>
  );
}
