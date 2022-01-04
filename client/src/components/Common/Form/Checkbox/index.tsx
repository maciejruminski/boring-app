// Functions.
import React, { forwardRef, useState } from "react";

// Components.
// import Label from "../../Common/Form/Label";

// Styles.
import { SContainer, SCheckbox } from "./styles";

export default forwardRef<
  HTMLInputElement,
  { label: string; defaultValue: boolean; id: string }
>(({ label, defaultValue, id }, ref: React.ForwardedRef<HTMLInputElement>) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  return (
    <SContainer>
      <label htmlFor={id}>{label}</label>
      <SCheckbox
        isChecked={isChecked}
        ref={ref}
        type="checkbox"
        className="form-control"
        id={id}
        name={id}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </SContainer>
  );
});
