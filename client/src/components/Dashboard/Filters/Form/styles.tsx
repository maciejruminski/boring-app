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

const SForm = styled.form<{ isModalOpen: boolean; isFadingOut: boolean }>`
  ${Modal()};
  z-index: 2;
  ${fitIsFadingOutToStyle};

  @media screen and (min-width: 500px) and (min-height: 400px) {
    position: absolute;
  }
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

const SHeading = styled.h3`
  color: var(--textLight);
  font-weight: 500;
  /* text-transform: uppercase; */
  font-size: 20px;
  margin: 0 0 10px;
`;

const SNote = styled.p`
  color: var(--text);
  margin: 0 0 17px;
`;

const SWarning = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--error);
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;

  img {
    width: 17px;
    margin-right: 10px;
    transform: translateY(3px);
  }
`;

export { SForm, SClose, SHeading, SNote, SWarning };
