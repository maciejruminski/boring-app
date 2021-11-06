// Functions.
import { useReducer, useEffect } from "react";

// Controllers.
import ActionsController from "../controllers/ActionsController";

// Reducers.
import reducer from "../reducers/reducer";

// States.
import initialState from "../states/initialState";

export default function useBoringApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = new ActionsController(dispatch).getAllActions();

  useEffect(() => {
    actions.checkIfLoggedIn();
  }, []);

  return { state, actions };
}
