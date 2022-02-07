// Functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

// Mixins.
import { Modal, ScreenReaderText, Heading } from "../../../../Mixins";

// Styles.
const SDetails = styled.div<{ isModalOpen: boolean }>`
  ${Modal()};
  z-index: 3;
`;

const SClose = styled(Button)`
  background-color: transparent;
  padding: 5px;
  margin: -5px 0 15px -5px;
  width: auto;

  .text {
    ${ScreenReaderText()};
  }

  .icon {
    width: 16px;
    display: block;
  }
`;

const SNote = styled.p`
  margin: 15px 0;

  &:nth-of-type(1) {
    margin: 0 0 10px;
  }

  &:nth-of-type(1) {
    margin-bottom: 0;
  }

  a {
    color: var(--primaryLight);
  }
`;

const SHeading = styled.h3`
  ${Heading()};
  margin: 10px 0 5px;
`;

const SAddress = styled.p`
  margin: 8px 0 13px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--textLight);
  font-style: italic;
`;

const SOpenNow = styled.p`
  margin: 15px 0 0;
  font-size: 14px;
  line-height: 1.3;
  color: #98e792;
  font-weight: 500;
`;

const SStars = styled.div`
  width: 75px;
  margin-left: -1px;
  position: relative;
`;

const SStarsContainer = styled.div<{ ratingWidth: number }>`
  display: flex;
  width: ${({ ratingWidth }) => `${ratingWidth}%`};
  overflow: hidden;

  &:last-child {
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
    opacity: 0.3;
  }
`;

const SStar = styled.img`
  width: 15px;
`;

const SButton = styled(Button)`
  margin-bottom: 20px;
`;

const SSecondButton = styled(Button)`
  background-color: var(--secondary);
  margin-bottom: 0;
`;

// Styles.
const SMap = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--textLight);
`;

export {
  SDetails,
  SClose,
  SNote,
  SHeading,
  SAddress,
  SOpenNow,
  SStars,
  SStarsContainer,
  SStar,
  SButton,
  SSecondButton,
  SMap,
};
