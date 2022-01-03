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
  { label: string; defaultOption: string; options: any }
>(
  (
    { label, defaultOption, options },
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    const [activeOption, setActiveOption] = useState(defaultOption);
    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const showOptionsHandler = (
      e: React.MouseEvent<HTMLSelectElement, MouseEvent>
    ) => {
      e.preventDefault();
      setOptionsVisibility(true);
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
        <SLabel htmlFor="test">{label}</SLabel>
        <SSelect
          id="test"
          name="test"
          ref={ref}
          onMouseDown={showOptionsHandler}
          value={activeOption}
        >
          {options.map((option: any) => {
            return <option value={option}>{option}</option>;
          })}
        </SSelect>

        <SCustomSelect areOptionsVisible={optionsVisibility}>
          {options.map((option: any) => {
            return (
              <SCustomOption
                data-type={option}
                className={`option ${option === activeOption && "active"}`}
                onClick={setOptionHandler}
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
