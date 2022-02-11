// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../../Mixins";

// Styles.
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

export { SNote, SHeading, SAddress, SOpenNow, SStars, SStarsContainer, SStar };
