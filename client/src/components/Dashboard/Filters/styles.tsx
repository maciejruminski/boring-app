// functions.
import styled from "styled-components";

// Mixins.
import { BodyBackground } from "../../../Mixins";

// Styles.
const SForm = styled.form<{ isModalOpen: boolean }>`
  ${BodyBackground()};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  color: white;
  padding: 60px 40px;
  box-sizing: border-box;
  z-index: 2;
  overflow: scroll;
`;

export { SForm };
