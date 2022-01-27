import styled from "styled-components";

// Functions.
// import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
// import Map from "./Map";
// import ActionsController from "../../../../controllers/ActionsController";

const SDetails = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  background-color: black;
  color: white;
  z-index: 3;
`;

const STest = styled.div<{ isSavingModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isSavingModalOpen }) => (isSavingModalOpen ? "1" : "0")};
  transform: ${({ isSavingModalOpen }) =>
    isSavingModalOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  background-color: black;
  color: white;
  z-index: 4;
`;

export default function Details() {
  const {
    state: {
      places,
      currentPlace: {
        isModalOpen,
        isSavingModalOpen,
        details: { id, name, rating, website, isSavedAsHistoric },
      },
      // historicPlaces,
    },
    actions: {
      setPlaceModalOff,
      getRandomPlace,
      setSavingModalOn,
      setSavingModalOff,
      addHistoricPlace,
      removeHistoricPlace,
    },
  } = useGlobalContext();

  return (
    <SDetails isModalOpen={isModalOpen}>
      <p>{name}</p>
      <p>{rating}</p>
      <p>{website}</p>

      <button onClick={setPlaceModalOff}>X</button>

      {/* <Map /> */}

      <STest isSavingModalOpen={isSavingModalOpen}>
        <button onClick={setSavingModalOff}>X</button>
        <p>Czy zapisać lokację w historii?</p>
        <button onClick={() => addHistoricPlace(id)}>Tak</button>
      </STest>

      <button
        onClick={() => {
          if (!isSavedAsHistoric) {
            setSavingModalOn();
          }
          // window.open('https://www.google.com/maps/dir/53.4614609,18.7250887,17/53.4614609,18.7272774/data=!3m1!4b1!4m2!4m1!3e2', '_blank');
        }}
      >
        odpal trase na google map
      </button>

      {isSavedAsHistoric && (
        <button onClick={() => removeHistoricPlace(id)}>
          Usuń lokację z historii
        </button>
      )}

      {/* {!isSavedAsHistoric && ( */}
      <button onClick={() => getRandomPlace(places, id)}>
        losuj inne miejsce
      </button>
      {/* )} */}
    </SDetails>
  );
}
