// functions.
import styled from "styled-components";

// Mixins.
import { BodyBackground } from "../../../../Mixins";

// Styles.
const SModal = styled.div<{ isModalOpen: boolean }>`
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

const SListContainer = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid var(--text);
    border-radius: var(--borderRadius);
    opacity: 0.15;
  }
`;

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  height: 300px;
  position: relative;
  z-index: 1;
`;

export { SModal, SListContainer, SList };
