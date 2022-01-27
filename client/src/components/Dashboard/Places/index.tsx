// Components.
import Buttons from "./Buttons";
import Heading from "./Heading";
import List from "./List";
import CurrentPlace from "./CurrentPlace";
import HistoricPlaces from "./HistoricPlaces";

export default function Places() {
  return (
    <>
      <Heading />
      <List />
      <CurrentPlace />
      <Buttons />
      <HistoricPlaces />
    </>
  );
}
