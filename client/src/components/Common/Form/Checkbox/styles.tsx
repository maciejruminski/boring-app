import styled from "styled-components";

const SContainer = styled.div`
  position: relative;
  margin: 30px 0;
  min-height: 34px;

  label {
    padding-left: 55px;
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #abc2d4;
    letter-spacing: 0.5px;
  }
`;

const SCheckbox = styled.input<{
  isChecked: boolean;
}>`
  position: absolute;
  appearance: none;
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
  margin: 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition-duration: 0.3s;
  }

  &:before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid ${({ isChecked }) => (isChecked ? "#98e792" : "#abc2d4")};
  }

  &:after {
    top: 12px;
    left: 12px;
    border-radius: 2px;
    width: 10px;
    height: 10px;
    background-color: ${({ isChecked }) =>
      isChecked ? "#98e792" : "transparent"};
    /* transform: ${({ isChecked }) =>
      isChecked ? "translateX(100%)" : "translateX(0)"}; */
  }
`;

export { SContainer, SCheckbox };
