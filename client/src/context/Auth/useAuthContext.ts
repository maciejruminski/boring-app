// Functions.
import { useContext, useEffect } from "react";

// Context.
import AuthContext from "./AuthContext";

// Controllers.
import Actions from "./AuthActions";

const useAuthContext: AuthContextHook = () => {
  const { state, dispatch } = useContext(AuthContext);
  const actions: IAuthActions = new Actions(state, dispatch).getAllActions();

  useEffect(() => actions.setUserAuthenticationByLocalStorage(), []);

  return { state, actions };
};

export default useAuthContext;
