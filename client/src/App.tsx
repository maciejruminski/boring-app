// Functions.
import { useEffect } from "react";

// Components.
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Spinner from "./components/Spinner";

// Hooks.
import { useGlobalContext } from "./context";

function App() {
  const {
    state: { isLoggedIn, historicPlaces },
    actions: {
      setUserAuthenticationByLocalStorage,
      setPlacesFromLocalStorage,
      setFiltersFromLocalStorage,
      setHistoricPlaces,
    },
  } = useGlobalContext();

  useEffect(() => {
    setUserAuthenticationByLocalStorage();
    setPlacesFromLocalStorage();
    setFiltersFromLocalStorage();
    setHistoricPlaces();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <SignUp />}
      <Spinner />
    </>
  );
}

export default App;
