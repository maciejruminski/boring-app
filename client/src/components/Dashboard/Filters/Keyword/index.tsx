// Functions.
import { forwardRef, useState, useEffect } from "react";

// Context.
import useFiltersAndPlacesContext from "../../../../context/FiltersAndPlaces/useFiltersAndPlacesContext";

// Components.
import Input from "../../../Common/Form/Input";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: {
      filters: { keyword },
    },
  } = useFiltersAndPlacesContext();

  const [isKeyword, setIsKeyword] = useState(keyword ? true : false);

  const setErrorHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsKeyword(e.target.value ? true : false);
  };

  useEffect(() => {
    if (keyword) {
      setIsKeyword(true);
    }
  }, [keyword]);

return <></>

  // return (
  //   <Input
  //     label="Słowo kluczowe"
  //     defaultValue={keyword}
  //     id="keyword"
  //     onChangeHandler={setErrorHandler}
  //     labelActivity={isKeyword}
  //     error={false}
  //     success={isKeyword}
  //     checkValidity={false}
  //     ref={ref}
  //   />
  // );
});
