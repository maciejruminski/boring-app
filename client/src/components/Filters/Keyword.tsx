// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

export default forwardRef<HTMLInputElement>(({}, ref) => {
  const { state } = useGlobalContext();

  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Keyword</label>
      <input
        ref={ref}
        type="text"
        className="form-control"
        id="keyword"
        name="keyword"
        placeholder="keyword"
        defaultValue={state.filters.keyword}
      />
    </div>
  );
});
