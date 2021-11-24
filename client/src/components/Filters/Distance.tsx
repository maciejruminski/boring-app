// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

export default forwardRef<HTMLInputElement>(({}, ref) => {
  const { state } = useGlobalContext();

  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Distance</label>

      <input
        ref={ref}
        type="number"
        className="form-control"
        id="distance"
        name="distance"
        placeholder="distance"
        defaultValue={state.filters.distance}
      />
    </div>
  );
});
