// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Checkbox from "../../../Common/Form/Checkbox";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: {
      filters: { openNow },
    },
  } = useGlobalContext();

  return (
    <Checkbox
      label="Pokaż tylko miejsca, które są teraz otwarte"
      defaultValue={openNow ? true : false}
      id="openNow"
      ref={ref}
    />
  );
});
