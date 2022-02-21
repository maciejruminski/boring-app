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
      opacity: 1;
      transform: scale(1);

      @media screen and (min-width: 500px) and (min-height: 400px) {
        transform: scale(1) translate(-50%, -50%);
      }
    `;
  } else {
    return `
      @keyframes showFilters {
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @media screen and (min-width: 500px) and (min-height: 400px) {
        transform: scale(1.02) translate(-50%, -50%);

        @keyframes showFilters {
          to {
            opacity: 1;
            transform: scale(1) translate(-50%, -50%);
          }
        }   
      }
    
      transform: scale(1.02);
      opacity: 0;
      animation: showFilters var(--spinnerTransitionDuration) linear 0.3s forwards
        alternate;
    `;
  }
};

const SModal = styled.div<{ isModalOpen: boolean; isFadingOut: boolean }>`
  ${Modal()};
  z-index: 2;
  ${fitIsFadingOutToStyle};

  @media screen and (min-width: 500px) and (min-height: 400px) {
    position: absolute;
  }
`;

const SButton = styled(Button)`
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

export { SModal, SButton };
