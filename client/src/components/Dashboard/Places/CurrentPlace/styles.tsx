// Functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

// Mixins.
import { Modal, ScreenReaderText } from "../../../../Mixins";

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

export { SDetails, SClose };
