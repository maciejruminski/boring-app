// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

export default forwardRef<HTMLSelectElement>(({}, ref) => {
  const { state } = useGlobalContext();

  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Max Price</label>
      <select
        ref={ref}
        className="form-control"
        id="maxprice"
        name="maxprice"
        placeholder="maxprice"
        defaultValue={state.filters.maxPrice}
      >
        <option value="">--Please choose a price</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
});
