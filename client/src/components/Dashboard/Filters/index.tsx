// Functions.
import { useEffect } from "react";

// Components.
import Form from "./Form";
import Preview from "./Preview";

// Context.
import { useFiltersAndPlacesContext } from "../../../context/FiltersAndPlaces";

export default function Filters(): JSX.Element {
  const {
    actions: { setFiltersAndShowPlaces },
  } = useFiltersAndPlacesContext();

  useEffect(() => setFiltersAndShowPlaces(), []);

  return (
    <>
      <Form />
      <Preview />
    </>
  );
}
