// functions.
import styled from "styled-components";

// Mixins.
// import { BodyBackground } from "../../../Mixins";

// Components.
// import Button from "../../Common/Button";

// Styles.
const SPlace = styled.li`
  margin: 0;
  padding: 0;

  &:last-child button:after {
    display: none;
  }
`;

const SButton = styled.button`
  margin: 0;
  padding: 15px;
  background-color: transparent;
  border: none;
  color: var(--text);
  display: block;
  width: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    border-bottom: 1px solid var(--text);
    width: 100%;
    opacity: 0.15;
  }
`;

const SName = styled.p`
  margin: 0 0 5px;
  font-size: 16px;
  text-align: left;
`;

const SStars = styled.div`
  width: 75px;
`;

const SStarsContainer = styled.div<{ ratingWidth: number }>`
  display: flex;
  width: ${({ ratingWidth }) => `${ratingWidth}%`};
  overflow: hidden;
`;

const SStar = styled.img`
  width: 15px;
`;

export { SPlace, SButton, SName, SStars, SStarsContainer, SStar };
