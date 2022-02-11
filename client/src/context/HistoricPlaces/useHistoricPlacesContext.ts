// Functions.
import { useContext } from "react";

// Context.
import HistoricPlacesContext from "./HistoricPlacesContext";

// Controllers.
import Actions from "./HistoricPlacesActions";

const useHistoricPlacesContext: HistoricPlacesContextHook = () => {
  const { state, dispatch } = useContext(HistoricPlacesContext);

  const actions: IHistoricPlacesActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default useHistoricPlacesContext;
