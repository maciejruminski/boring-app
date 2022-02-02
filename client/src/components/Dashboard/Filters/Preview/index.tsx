// Controllers.
import Helper from "../../../../controllers/Helper";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Heading from "./Heading";
import Filter from "./Filter";

// Styles.
import {
  SContainer,
  SFiltersHeader,
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
    actions: { setFiltersModalOn },
  } = useGlobalContext();

  const formattedDistance = Helper.formatDistance(distance);

  return (
    <SContainer>
      <SFiltersHeader>
        <Heading />
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
        <Filter text="Cena minimalna" type={prices[minPrice as keyof Prices]} />
        <Filter
          text="Cena maksymalna"
          type={prices[maxPrice as keyof Prices]}
        />
        <Filter
          text="Pokaż tylko otwarte miejsca"
          type={openNow ? "Tak" : "Nie"}
        />
      </SFiltersContainer>
    </SContainer>
  );
}
