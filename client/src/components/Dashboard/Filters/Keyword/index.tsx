// Functions.
import { forwardRef, useState } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Input from "../../../Common/Form/Input";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: {
      filters: { keyword },
    },
  } = useGlobalContext();

  const [isKeyword, setIsKeyword] = useState(keyword ? true : false);

  const setErrorHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsKeyword(e.target.value ? true : false);
  };

  return (
    <Input
      label="Słowo kluczowe"
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
