// Functions.
import { forwardRef, useState, useEffect } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";

// Components.
import Input from "@common/Form/Input";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: { filters },
  } = useFiltersAndPlacesContext();

  const [keyword, setKeyword] = useState(filters.keyword);

  const setHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  return (
    <Input
      label="Słowo kluczowe"
      value={keyword}
      id="keyword"
      onChangeHandler={setHandler}
      error={""}
      checkValidity={false}
      ref={ref}
    />
  );
});
