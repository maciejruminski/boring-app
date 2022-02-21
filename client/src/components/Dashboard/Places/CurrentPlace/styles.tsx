// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Mixins.
import { Modal, ScreenReaderText } from "@src/Mixins";

// Styles.
const fitIsFadingOutToStyle = ({ isFadingOut }: { isFadingOut: boolean }) => {
  if (isFadingOut) {
    return `
    @keyframes hideFilters {
      to {
        opacity: 0;
      }
    }
    
    animation: hideFilters var(--spinnerTransitionDuration) linear 0s forwards
    alternate;
    `;
  }
};

const SDetails = styled.div<{ isModalOpen: boolean; isFadingOut: boolean }>`
  ${Modal()};
  z-index: 3;

  @media screen and (min-width: 500px) and (min-height: 400px) {
    transform: translate(-50%, -50%);
  }

  ${fitIsFadingOutToStyle};
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

export { SDetails, SClose };
