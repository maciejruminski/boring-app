import styled from "styled-components";

// Functions.
import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

// Components.
import Types from "./Types";
import Keyword from "./Keyword";
import Distance from "./Distance";
import MinPrice from "./MinPrice";
import MaxPrice from "./MaxPrice";
import OpenNow from "./OpenNow";

const SForm = styled.form<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0)" : "translateY(-100%)"}; */
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  background-color: black;
  color: white;
  padding: 60px 40px;
  box-sizing: border-box;
`;

export default () => {
  const { state, actions } = useGlobalContext();
  const distanceRef = useRef<HTMLInputElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => actions.setFiltersModalOn()}>Pokaż filtry</button>

      <SForm
        isModalOpen={state.filters.isModalOpen}
        method="POST"
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          actions.filter({
            distance: distanceRef?.current?.value,
            keyword: keywordRef?.current?.value,
            type: typeRef?.current?.value,
            minPrice: minPriceRef?.current?.value,
            maxPrice: maxPriceRef?.current?.value,
            openNow: openNowRef?.current?.checked,
          });
        }}
      >
        <Distance ref={distanceRef} />
        <Keyword ref={keywordRef} />
        <Types ref={typeRef} />
        <MinPrice ref={minPriceRef} />
        <MaxPrice ref={maxPriceRef} />
        <OpenNow ref={openNowRef} />

        <button
          type="submit"
          className="btn btn-primary btn-sm"
          onClick={() => actions.setFiltersModalOff()}
        >
          Submit
        </button>
      </SForm>
    </>
  );
};
