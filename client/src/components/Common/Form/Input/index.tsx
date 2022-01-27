// Functions.
import React, { forwardRef } from "react";

// Components.
// import Label from "../../Common/Form/Label";

// Styles.
import {
  // SErrors,
  SContainer,
  SLabel,
  SInput,
} from "./styles";

export default forwardRef<
  HTMLInputElement,
  {
    label: string;
    defaultValue: string | number;
    id: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    error: boolean;
    success: boolean;
    checkValidity: boolean;
  }
>(
  (
    { label, defaultValue, id, onChangeHandler, error, success, checkValidity },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <SContainer
        isError={error}
        isSuccess={success}
        checkValidity={checkValidity}
      >
        <SLabel isActive={success} htmlFor={id}>
          {label}
        </SLabel>
        <SInput
          isError={error}
          isSuccess={success}
          checkValidity={checkValidity}
          ref={ref}
          onChange={onChangeHandler}
          type="text"
          name={id}
          id={id}
          autoComplete="off"
          autoCorrect="off"
          defaultValue={defaultValue}
        />
        {/* <Envelope /> */}
      </SContainer>
    );
  }
);
