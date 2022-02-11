// Functions.
import { useContext } from "react";

// Context.
import DetailsContext from "./DetailsContext";

// Controllers.
import Actions from "./DetailsActions";

const useDetailsContext: DetailsContextHook = () => {
  const { state, dispatch } = useContext(DetailsContext);

  const actions: IDetailsActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default useDetailsContext;
