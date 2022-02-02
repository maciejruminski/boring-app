// Functions.
import { forwardRef, useEffect, useState, useRef } from "react";

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
    const [labelWidth, setLabelWidth] = useState(0);
    const labelRef = useRef<HTMLLabelElement>(null);

    const setLabelWidthAfterScaling = (): number => {
      let offsetWidth = labelRef.current?.offsetWidth;
      offsetWidth = offsetWidth ? offsetWidth : 0;

      const transformScaleMultiplier = 0.85;

      return offsetWidth * transformScaleMultiplier;
    };

    // We need label width to set the pseudo element width.
    useEffect(() => setLabelWidth(setLabelWidthAfterScaling()), []);

    return (
      <SContainer
        isError={error}
        isSuccess={success}
        checkValidity={checkValidity}
        pseudoElementWidth={labelWidth}
      >
        <SLabel isActive={success} htmlFor={id} ref={labelRef}>
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
