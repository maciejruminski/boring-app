// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

export default forwardRef<HTMLInputElement>(({}, ref) => {
  const { state } = useGlobalContext();

  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Show only open now items</label>
      <input
        ref={ref}
        type="checkbox"
        className="form-control"
        id="opennow"
        name="opennow"
        placeholder="opennow"
        defaultValue={state.filters.openNow ? "true" : "false"}
      />
    </div>
  );
});
