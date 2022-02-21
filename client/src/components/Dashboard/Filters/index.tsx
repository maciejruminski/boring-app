// Components.
import Form from "./Form";
import Preview from "./Preview";
import Spinner from "@common/Spinner";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";

export default function Filters(): JSX.Element {
  const {
    state: { isBusy },
  } = useFiltersAndPlacesContext();

  return (
    <>
      <Form />
      <Preview />
      <Spinner isBusy={isBusy} />
    </>
  );
}
