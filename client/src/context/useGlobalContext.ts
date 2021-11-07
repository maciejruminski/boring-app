// Functions.
import { useContext } from "react";

// Context.
import globalContext from "./globalContext";

// Controllers.
import ActionsController from "../controllers/ActionsController";

const useGlobalContext: ContextHook = () => {
  const { state, dispatch } = useContext(globalContext);

  const actions: IActions = new ActionsController(dispatch).getAllActions();

  return { state, actions };
};

export default useGlobalContext;
