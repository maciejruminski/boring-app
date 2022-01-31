// Functions.
import { useContext } from "react";

// Context.
import globalContext from "./globalContext";

// Controllers.
import Actions from "../controllers/Actions";

const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);

  const actions: IActions = new Actions(state, dispatch).getAllActions();

  return { state, actions };
};

export default useGlobalContext;
