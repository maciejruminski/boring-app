// Functions.
import { createContext, useEffect } from "react";

// Components.
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

// Hooks.
import useBoringApp from "./hooks/useBoringApp";

// Context.
export const AppContext = createContext({});

function App() {
  const { state, actions } = useBoringApp();

  useEffect(() => {
    console.log(state);
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {state.isLoggedIn ? <Dashboard /> : <SignUp />}
    </AppContext.Provider>
  );
}

export default App;
