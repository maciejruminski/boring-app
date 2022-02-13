// Components.
import Dashboard from "@components/Dashboard";
import SignUp from "@components/SignUp";

// Context.
import { useAuthContext } from "@context/Auth";

function App() {
  const {
    state: { isLoggedIn },
  } = useAuthContext();

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <SignUp />;
}

export default App;
