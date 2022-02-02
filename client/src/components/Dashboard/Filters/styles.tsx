// functions.
import styled from "styled-components";

// Mixins.
import { Modal } from "../../../Mixins";

// Styles.
const SForm = styled.form<{ isModalOpen: boolean }>`
  ${Modal()};
  z-index: 2;
`;

export { SForm };
