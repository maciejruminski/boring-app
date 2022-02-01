// Components.
import Heading from "./Heading";
import List from "./List";
import Buttons from "./Buttons";
import CurrentPlace from "./CurrentPlace";
import HistoricPlaces from "./HistoricPlaces";

export default function Places() {
  return (
    <>
      <Heading />
      <List />
      <Buttons />
      <CurrentPlace />
      <HistoricPlaces />
    </>
  );
}
