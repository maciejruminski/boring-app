// Functions.
import { useContext } from "react";

// Context.
import FiltersAndPlacesContext from "./FiltersAndPlacesContext";

// Controllers.
import Actions from "./FiltersAndPlacesActions";

const useFiltersAndPlacesContext: FiltersAndPlacesContextHook = () => {
  const { state, dispatch } = useContext(FiltersAndPlacesContext);

  const actions: IFiltersAndPlacesActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default useFiltersAndPlacesContext;
