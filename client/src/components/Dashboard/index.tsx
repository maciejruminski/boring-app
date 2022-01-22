// Components.
import Filters from "./Filters";
import Places from "./Places";

// Styles.
import { SDashboard } from "./styles";

export default function Dashboard() {
  return (
    <SDashboard>
      <Filters />
      <Places />
    </SDashboard>
  );
}
