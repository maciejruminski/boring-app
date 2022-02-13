// Functions.
import { forwardRef, useEffect, useState, useRef } from "react";

// Controllers.
import Helper from "../../../../controllers/Helper";

// Styles.
import { SErrors, SContainer, SLabel, SInput } from "./styles";

export default forwardRef<
  HTMLInputElement,
  {
    label: string;
    defaultValue: string | number;
    id: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    error: string;
    // errorMessage?: string;
    // success: boolean;
    checkValidity: boolean;
    // labelActivity: boolean;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    icon?: JSX.Element;
  }
>(
  (
    {
      label,
      defaultValue,
      id,
      onChangeHandler,
      error,
      // success,
      // labelActivity,
      checkValidity,
      minLength,
      maxLength,
      required,
      // errorMessage,
      icon,
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const [labelWidth, setLabelWidth] = useState(0);

    // We need label width to set the pseudo element width.
    useEffect(
      () =>
        setLabelWidth(
          Helper.setLabelWidthAfterScaling(labelRef.current as HTMLLabelElement)
        ),
      []
    );

    useEffect(
      () =>
        Helper.setInputErrorMessageHeight(
          errorRef.current as HTMLParagraphElement
        ),
      [error]
    );

    return (
      <>
        <SContainer
          isError={true}
          isSuccess={true}
          checkValidity={checkValidity}
          pseudoElementWidth={labelWidth}
        >
          <SLabel isActive={true} htmlFor={id} ref={labelRef}>
            {label}
          </SLabel>
          <SInput
            isError={true}
            isSuccess={true}
            checkValidity={checkValidity}
            ref={ref}
            onChange={onChangeHandler}
            type="email"
            name={id}
            id={id}
            autoComplete="off"
            autoCorrect="off"
            defaultValue={defaultValue}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
          />
          {icon}
        </SContainer>

        {error && (
          <SErrors ref={errorRef}>
            <div>{error}</div>
          </SErrors>
        )}
      </>
    );
  }
);
