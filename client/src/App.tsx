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
      setHistoricPlaces
    },
  } = useGlobalContext();

  useEffect(() => {
    setUserAuthenticationFromLocalStorage();
    setPlacesFromLocalStorage();
    setFilterTypesFromLocalStorage();
    setHistoricPlaces();
  }, []);

  return <>{isLoggedIn ? <Dashboard /> : <SignUp />}</>;
}

export default App;
