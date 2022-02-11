// Functions.
import { useContext } from "react";

// Context.
import FiltersContext from "./FiltersContext";

// Controllers.
import Actions from "./FiltersActions";

const useFiltersContext: FiltersContextHook = () => {
  const { state, dispatch } = useContext(FiltersContext);

  const actions: IFiltersActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default useFiltersContext;
