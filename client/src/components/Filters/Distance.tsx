// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

const Distance = ({}, ref: any) => {
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
        defaultValue={state.filters.types.distance}
      />
    </div>
  );
};

export default forwardRef<HTMLInputElement>(Distance);
