import styled from "styled-components";

// Functions.
// import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
// import Map from "./Map";
// import Actions from "../../../../controllers/Actions";

const SDetails = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  transform: ${({ isModalOpen }) => (isModalOpen ? "scale(1)" : "scale(1.02)")};
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  background-color: black;
  color: white;
  z-index: 3;
`;

const STest = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  /* transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0)" : "translateY(-90%)"}; */
  transition-duration: 0.5s;
  background-color: black;
  color: white;
  z-index: 4;
`;

export default function Details() {
  const {
    state: {
      places,
      currentPlace,
      modals: { isCurrentPlaceModalOpen },
    },
    actions: {
      setCurrentPlaceModalOff,
      getRandomPlaceDetails,
      addHistoricPlace,
      removeHistoricPlace,
    },
  } = useGlobalContext();

  const { id, name, rating, website, isSavedAsHistoric } = currentPlace;

  return (
    <SDetails isModalOpen={isCurrentPlaceModalOpen}>
      <p>{name}</p>
      <p>{rating}</p>
      <p>{website}</p>

      <button onClick={setCurrentPlaceModalOff}>X</button>

      {/* <Map /> */}

      <p>Czy zapisać lokację w historii?</p>
      <button onClick={() => addHistoricPlace(currentPlace)}>Tak</button>

      <button
        onClick={() => {
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
      <button onClick={() => getRandomPlaceDetails(places, id)}>
        losuj inne miejsce
      </button>
      {/* )} */}
    </SDetails>
  );
}
