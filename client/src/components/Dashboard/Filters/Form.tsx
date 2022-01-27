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
import { SForm } from "./styles";

export default function Form() {
  const {
    state: {
      filters: { isModalOpen },
    },
    actions: { filter, setFiltersModalOff },
  } = useGlobalContext();

  const distanceRef = useRef<HTMLSelectElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filter({
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
      <SForm method="POST" isModalOpen={isModalOpen} onSubmit={onSubmitHandler}>
        <Distance ref={distanceRef} />
        <Keyword ref={keywordRef} />
        <Types ref={typeRef} />
        <MinPrice ref={minPriceRef} />
        <MaxPrice ref={maxPriceRef} />
        <OpenNow ref={openNowRef} />

        <Button
          type="submit"
          onClickHandler={setFiltersModalOff}
          text="Submit"
        />
      </SForm>
    </>
  );
}
