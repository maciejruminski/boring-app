// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Mixins.
import { Modal, ScreenReaderText } from "@src/Mixins";

// Styles.
const SModal = styled.div<{ isModalOpen: boolean }>`
  ${Modal()};
  z-index: 2;  
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
