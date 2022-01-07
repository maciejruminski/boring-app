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
import Button from "../Common/Button";

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
  background-color: #0c1025;
  background: linear-gradient(135deg, #0c143d, #090b14);
`;

export default () => {
  const { state, actions } = useGlobalContext();
  const distanceRef = useRef<HTMLSelectElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  console.log("checked", openNowRef?.current?.checked);
  console.log("value", openNowRef?.current?.value);

  return (
    <>
      <Button onClickHandler={actions.setFiltersModalOn} text="Pokaż filtry" />

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

        <Button
          type="submit"
          onClickHandler={actions.setFiltersModalOff}
          text="Submit"
        />
      </SForm>
    </>
  );
};
