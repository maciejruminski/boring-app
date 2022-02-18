// Functions.
import styled from "styled-components";

// Icons.
import { ReactComponent as StarIcon } from "@images/star.svg";

const SStars = styled.div`
  width: 75px;
  margin-left: -1px;
  position: relative;
`;

const SStarsContainer = styled.div<{ ratingWidth: number }>`
  display: flex;
  flex-wrap: nowrap;
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

const SStar = styled(StarIcon)`
  width: 15px;
  min-width: 15px;
  height: auto;
  fill: var(--primaryLight);
`;

export { SStars, SStarsContainer, SStar };
