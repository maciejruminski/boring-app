// Functions.
import React, { forwardRef, useState, useEffect } from "react";

// Styles.
import {
  SContainer,
  SLabel,
  SSelect,
  SCustomSelect,
  SCustomOption,
  SCaret,
} from "./styles";

// Icons.
import caretIconPath from "@images/caret.svg";

export default forwardRef<
  HTMLSelectElement,
  {
    label: string;
    defaultOption: string | number;
    options: string[] | { [name: string]: string };
    id: string;
  }
>(
  (
    { label, defaultOption, options, id },
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const [activeOption, setActiveOption] = useState(defaultOption);
    const [optionsVisibility, setOptionsVisibility] = useState(false);
    const [labelWidth, setLabelWidth] = useState(0);
    const labelRef = React.useRef<HTMLLabelElement>(null);

    const closeOptionsOnMouseDownHandler = (e: Event) => {
      window.removeEventListener("touchend", closeOptionsOnMouseDownHandler);
      window.removeEventListener("mousedown", closeOptionsOnMouseDownHandler);

      const refIsObject = typeof ref === "object";
      const clickedElementIsOutsideATarget =
        refIsObject && ref?.current !== e.target;

      if (clickedElementIsOutsideATarget) {
        setOptionsVisibility(false);
      }
    };

    const showOptionsOnMouseDownHandler = (
      e: React.MouseEvent<HTMLSelectElement, MouseEvent>
    ) => {
      e.preventDefault();
      setOptionsVisibility(!optionsVisibility);
    };

    const showOptionsOnChangeHandler = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      e.preventDefault();
      setActiveOption(e.target.value);
    };

    const setOptionHandler = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const type = (e.target as HTMLDivElement).dataset.type;

      if (type) {
        setActiveOption(type);
      }
    };

    const setLabelWidthAfterScaling = (): number => {
      let offsetWidth = labelRef.current?.offsetWidth;
      offsetWidth = offsetWidth ? offsetWidth : 0;

      const transformScaleMultiplier = 0.85;

      return offsetWidth * transformScaleMultiplier;
    };

    // We need label width to set the pseudo element width.
    useEffect(() => setLabelWidth(setLabelWidthAfterScaling()), []);

    useEffect(() => {
      if (optionsVisibility) {
        window.addEventListener("touchend", closeOptionsOnMouseDownHandler);
        window.addEventListener("mousedown", closeOptionsOnMouseDownHandler);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionsVisibility]);

    useEffect(() => setActiveOption(defaultOption), [defaultOption]);

    return (
      <SContainer
        isError={false}
        isSuccess={true}
        checkValidity={false}
        pseudoElementWidth={labelWidth}
      >
        <SLabel htmlFor={id} ref={labelRef} isActive={true}>
          {label}
        </SLabel>

        <SCaret
          src={caretIconPath}
          aria-hidden="true"
          alt="Ikona sugerująca możliwość wyboru"
        />

        <SSelect
          isError={false}
          isSuccess={true}
          checkValidity={false}
          id={id}
          name={id}
          ref={ref}
          onMouseDown={showOptionsOnMouseDownHandler}
          value={activeOption}
          onChange={showOptionsOnChangeHandler}
        >
          {Array.isArray(options)
            ? options.map((option: string, key: number) => {
                return (
                  <option value={option} key={key}>
                    {option}
                  </option>
                );
              })
            : Object.entries(options).map(
                (option: [string, string], key: number) => {
                  return (
                    <option value={option[0]} key={key}>
                      {option[1]}
                    </option>
                  );
                }
              )}
        </SSelect>

        <SCustomSelect areOptionsVisible={optionsVisibility}>
          {Array.isArray(options)
            ? options.map((option: string, key: number) => {
                return (
                  <SCustomOption
                    data-type={option}
                    className={`option ${option === activeOption && "active"}`}
                    onClick={setOptionHandler}
                    key={key}
                  >
                    {option}
                  </SCustomOption>
                );
              })
            : Object.entries(options).map(
                (option: [string, string], key: number) => {
                  return (
                    <SCustomOption
                      data-type={option[0]}
                      className={`option ${
                        option[0] === activeOption && "active"
                      }`}
                      onClick={setOptionHandler}
                      key={key}
                    >
                      {option[1]}
                    </SCustomOption>
                  );
                }
              )}
        </SCustomSelect>
      </SContainer>
    );
  }
);
