// Functions.
import { useEffect } from "react";

// Components.
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

// Hooks.
import { useGlobalContext } from "./context";

function App() {
  const {
    state: { isLoggedIn },
    actions: {
      setUserAuthenticationFromLocalStorage,
      setPlacesFromLocalStorage,
      setFilterTypesFromLocalStorage,
    },
  } = useGlobalContext();

  useEffect(() => {
    setUserAuthenticationFromLocalStorage();
    setPlacesFromLocalStorage();
    setFilterTypesFromLocalStorage();
  }, []);

  return <>{isLoggedIn ? <Dashboard /> : <SignUp />}</>;
}

export default App;
