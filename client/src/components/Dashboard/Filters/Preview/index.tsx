// Controllers.
import Helper from "@controllers/Helper";

// Context.
import useFiltersContext from "@context/Filters/useFiltersContext";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";

// Components.
import Filter from "./Filter";

// Styles.
import {
  SContainer,
  SFiltersHeader,
  SHeading,
  SFiltersContainer,
  SButton,
} from "./styles";

// Icons.
import filterIconPath from "../../../../images/filter.svg";

// Array with types and prices.
import types from "../filterTypes";
import prices from "../prices";

export default function Preview() {
  const {
    state: {
      filters: { distance, keyword, type, minPrice, maxPrice, openNow },
    },
  } = useFiltersAndPlacesContext();

  const {
    actions: { setFiltersModalOn },
  } = useFiltersContext();

  const formattedDistance = Helper.formatDistance(distance);

  return (
    <SContainer>
      <SFiltersHeader>
        <SHeading>Filtry</SHeading>;
        <SButton
          onClickHandler={setFiltersModalOn}
          text="Pokaż filtry"
          icon={filterIconPath}
        />
      </SFiltersHeader>
      <SFiltersContainer>
        <Filter text="Dystans" type={formattedDistance} />
        <Filter text="Słowo kluczowe" type={keyword} />
        <Filter text="Typ" type={types[type as keyof FilterTypes]} />
        {minPrice !== "_" && (
          <Filter
            text="Cena minimalna"
            type={prices[minPrice as keyof Prices]}
          />
        )}
        {maxPrice !== "_" && (
          <Filter
            text="Cena maksymalna"
            type={prices[maxPrice as keyof Prices]}
          />
        )}
        <Filter
          text="Pokaż tylko otwarte miejsca"
          type={openNow ? "Tak" : "Nie"}
        />
      </SFiltersContainer>
    </SContainer>
  );
}
