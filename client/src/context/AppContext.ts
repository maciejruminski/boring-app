// Functions.
import { createContext } from "react";

interface IAppContext {
  state: {};
  actions: {};
}

const AppContext: React.Context<IAppContext> = createContext({
  state: {},
  actions: {},
});

export default AppContext;
