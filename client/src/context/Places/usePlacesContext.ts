// Functions.
import { useContext } from "react";

// Context.
import PlacesContext from "./PlacesContext";

// Controllers.
import Actions from "./PlacesActions";

const usePlacesContext: PlacesContextHook = () => {
  const { state, dispatch } = useContext(PlacesContext);

  const actions: IPlacesActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default usePlacesContext;
