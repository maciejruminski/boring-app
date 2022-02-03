// Functions.
import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../../context";

// Components.
import Types from "./Types";
import Keyword from "./Keyword";
import Distance from "./Distance";
import MinPrice from "./MinPrice";
import MaxPrice from "./MaxPrice";
import OpenNow from "./OpenNow";
import Button from "../../Common/Button";

// Styles.
import { SForm, SClose, SHeading, SNote } from "./styles";

// Icons.
import closeIconPath from "../../../images/close.svg";

export default function Form() {
  const {
    state: {
      modals: { isFiltersModalOpen },
    },
    actions: { filterForNewPlacesByFilters, setFiltersModalOff },
  } = useGlobalContext();

  const distanceRef = useRef<HTMLSelectElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterForNewPlacesByFilters({
      distance: distanceRef?.current?.value,
      keyword: keywordRef?.current?.value,
      type: typeRef?.current?.value,
      minPrice: minPriceRef?.current?.value,
      maxPrice: maxPriceRef?.current?.value,
      openNow: openNowRef?.current?.checked,
    });
  };

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
