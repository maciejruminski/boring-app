// Functions.
import { forwardRef, useEffect, useState, useRef } from "react";

// Context.
import { useTranslation } from "react-i18next";

// Controllers.
import Helper from "@controllers/Helper";

// Styles.
import { SErrors, SContainer, SLabel, SInput } from "./styles";

export default forwardRef<
  HTMLInputElement,
  {
    label: string;
    value: string | number;
    id: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    error: string;
    checkValidity: boolean;
    type?: "email" | "text";
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    icon?: JSX.Element;
  }
>(
  (
    {
      label,
      value,
      id,
      onChangeHandler,
      error,
      type,
      checkValidity,
      minLength,
      maxLength,
      required,
      icon,
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const [labelWidth, setLabelWidth] = useState(0);
    const { i18n } = useTranslation();

    // We need label width to set the pseudo element width.
    useEffect(
      () =>
        setLabelWidth(
          Helper.setLabelWidthAfterScaling(labelRef.current as HTMLLabelElement)
        ),
      [i18n.language]
    );

    useEffect(() => {
      Helper.setInputErrorMessageHeight(
        errorRef.current as HTMLParagraphElement
      );

      if (typeof ref === "object" && ref?.current && error) {
        ref.current.focus();
      }
    }, [error]);

    let isError = Boolean(error);
    let isSuccess = Boolean(!isError && value);
    let isLabelActive = Boolean(isError || isSuccess);

    if (checkValidity === false) {
      isError = false;
      isSuccess = Boolean(value);
      isLabelActive = Boolean(value);
    }

    return (
      <>
        <SContainer
          isError={isError}
          isSuccess={isSuccess}
          checkValidity={checkValidity}
          pseudoElementWidth={labelWidth}
        >
          <SLabel isActive={isLabelActive} htmlFor={id} ref={labelRef}>
            {label}
          </SLabel>
          <SInput
            isError={isError}
            isSuccess={isSuccess}
            checkValidity={checkValidity}
            ref={ref}
            onChange={onChangeHandler}
            type={type ? type : "text"}
            name={id}
            id={id}
            autoComplete="off"
            autoCorrect="off"
            defaultValue={value}
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
