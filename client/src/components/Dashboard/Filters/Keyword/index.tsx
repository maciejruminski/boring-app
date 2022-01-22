// Functions.
import { forwardRef, useState } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Input from "../../../Common/Form/Input";

export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: {
      filters: {
        types: { keyword },
      },
    },
  } = useGlobalContext();

  const [isKeyword, setIsKeyword] = useState(keyword ? true : false);

  const setErrorHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsKeyword(e.target.value ? true : false);
  };

  return (
    <Input
      label="Keyword"
      defaultValue={keyword}
      id="keyword"
      onChangeHandler={setErrorHandler}
      error={false}
      success={isKeyword}
      checkValidity={false}
      ref={ref}
    />
  );
});
