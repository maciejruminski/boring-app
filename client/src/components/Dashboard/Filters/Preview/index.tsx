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

export default function Preview() {
  const {
    state: {
      filters: {
        types: { distance, keyword, type, minPrice, maxPrice, openNow },
      },
    },
    actions: { setFiltersModalOn },
  } = useGlobalContext();

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
        <Filter text="Dystans" type={distance} />
        <Filter text="Słowo kluczowe" type={keyword} />
        <Filter text="Typ" type={type} />
        <Filter text="Cena minimalna" type={minPrice} />
        <Filter text="Cena maksymalna" type={maxPrice} />
        <Filter
          text="Pokaż tylko otwarte miejsca"
          type={openNow ? "Tak" : "Nie"}
        />
      </SFiltersContainer>
    </SContainer>
  );
}
