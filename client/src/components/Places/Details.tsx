import styled from "styled-components";

// Functions.
import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

// Components.
import Map from './Map';
import ActionsController from "../../controllers/ActionsController";

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
`;

export default () => {
  const {
    state: {
      places,
      currentPlace: {
        isModalOpen,
        details: { id, name, rating, website },
      },
    },
    actions: { setPlaceModalOff, getRandomPlace },
  } = useGlobalContext();

  return (
    <SDetails isModalOpen={isModalOpen}>
      <p>{name}</p>
      <p>{rating}</p>
      <p>{website}</p>

      <button onClick={() => setPlaceModalOff()}>X</button>

      {/* <Map /> */}

      <a href="https://www.google.com/maps/dir/53.4614609,18.7250887,17/53.4614609,18.7272774/data=!3m1!4b1!4m2!4m1!3e2">
      odpal trase na google map
      </a>

      <button onClick={() => getRandomPlace(places, id)}>
        losuj inne miejsce
      </button>
    </SDetails>
  );
};
