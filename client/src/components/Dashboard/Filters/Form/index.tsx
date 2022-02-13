// Functions.
import { useRef, useEffect } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import useFiltersContext from "@context/Filters/useFiltersContext";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";

// Components.
import Types from "../Types";
import Keyword from "../Keyword";
import Distance from "../Distance";
import MinPrice from "../MinPrice";
import MaxPrice from "../MaxPrice";
import OpenNow from "../OpenNow";
import Button from "@common/Button";

// Styles.
import { SForm, SClose, SHeading, SNote } from "./styles";

// Icons.
import closeIconPath from "../../../../images/close.svg";

export default function Form() {
  const {
    state: { isFiltersModalOpen },
    actions: { setFiltersModalOff },
  } = useFiltersContext();

  const {
    actions: { updateFilters, showNewPlacesByFilters },
  } = useFiltersAndPlacesContext();

  const distanceRef = useRef<HTMLSelectElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filters = {
      distance: distanceRef?.current?.value as string,
      keyword: keywordRef?.current?.value as string,
      type: typeRef?.current?.value as string,
      minPrice: minPriceRef?.current?.value as string,
      maxPrice: maxPriceRef?.current?.value as string,
      openNow: openNowRef?.current?.checked as boolean,
    };

    showNewPlacesByFilters(filters);
    updateFilters(filters);
  };

  useEffect(
    () => Helper.makeBodyUnscrollable(isFiltersModalOpen),
    [isFiltersModalOpen]
  );

  return (
    <>
      <SForm
        method="POST"
        isModalOpen={isFiltersModalOpen}
        onSubmit={onSubmitHandler}
      >
        <SClose
          onClickHandler={setFiltersModalOff}
          text="Zamknij modal z filtrami"
          icon={closeIconPath}
        />
        <SHeading>Filtry</SHeading>
        <SNote>Dostosuj filtry aby znaleźć interesujące Cię lokalizacje.</SNote>
        <Distance ref={distanceRef} />
        <Keyword ref={keywordRef} />
        <Types ref={typeRef} />
        <MinPrice ref={minPriceRef} />
        <MaxPrice ref={maxPriceRef} />
        <OpenNow ref={openNowRef} />

        <Button
          type="submit"
          onClickHandler={setFiltersModalOff}
          text="Filtruj"
        />
      </SForm>
    </>
  );
}
