// Functions.
import React, { forwardRef, useState } from "react";

// Components.
// import Label from "../../Common/Form/Label";

// Styles.
import {
  SContainer,
  SLabel,
  SSelect,
  SCustomSelect,
  SCustomOption,
} from "./styles";

export default forwardRef<
  HTMLSelectElement,
  { label: string; defaultOption: string | number; options: any; id: string }
>(
  (
    { label, defaultOption, options, id },
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const [activeOption, setActiveOption] = useState(defaultOption);
    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const showOptionsOnMouseDownHandler = (
      e: React.MouseEvent<HTMLSelectElement, MouseEvent>
    ) => {
      e.preventDefault();
      setOptionsVisibility(true);
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
        setOptionsVisibility(false);
        setActiveOption(type);
      }
    };

    return (
      <SContainer>
        {/* <Label text="Type" /> */}
        <SLabel htmlFor={id}>{label}</SLabel>
        <SSelect
          id={id}
          name={id}
          ref={ref}
          onMouseDown={showOptionsOnMouseDownHandler}
          value={activeOption}
          onChange={showOptionsOnChangeHandler}
        >
          {options.map((option: string, key: number) => {
            return (
              <option value={option} key={key}>
                {option}
              </option>
            );
          })}
        </SSelect>

        <SCustomSelect areOptionsVisible={optionsVisibility}>
          {options.map((option: string, key: number) => {
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
          })}
        </SCustomSelect>
      </SContainer>
    );
  }
);
