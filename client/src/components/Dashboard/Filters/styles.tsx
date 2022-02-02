// Functions.
import styled from "styled-components";

// Components.
import Button from "../../Common/Button";

// Mixins.
import { Modal, ScreenReaderText } from "../../../Mixins";

// Styles.
const SForm = styled.form<{ isModalOpen: boolean }>`
  ${Modal()};
  z-index: 2;
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
  text-transform: uppercase;
  font-size: 18px;
  margin: 0 0 10px;
`;

const SNote = styled.p`
  color: var(--text);
  margin: 0 0 17px;
`;

export { SForm, SClose, SHeading, SNote };
