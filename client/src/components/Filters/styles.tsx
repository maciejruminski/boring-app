import styled from "styled-components";

const SForm = styled.form<{ isModalOpen: boolean }>`
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
  background-color: #0c1025;
  background: linear-gradient(135deg, #0c143d, #090b14);
`;

export { SForm };
