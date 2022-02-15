// Components.
import Filters from "./Filters";
import Places from "./Places";
import LanguageSwitcher from "@common/LanguageSwitcher";

// Styles.
import { SDashboard } from "./styles";

// Providers.
import { PlacesContextProvider } from "@context/Places";
import { FiltersContextProvider } from "@context/Filters";
import { FiltersAndPlacesContextProvider } from "@context/FiltersAndPlaces";

export default function Dashboard() {
  return (
    <SDashboard>
      <LanguageSwitcher />
      <FiltersAndPlacesContextProvider>
        <FiltersContextProvider>
          <Filters />
        </FiltersContextProvider>
        <PlacesContextProvider>
          <Places />
        </PlacesContextProvider>
      </FiltersAndPlacesContextProvider>
    </SDashboard>
  );
}
