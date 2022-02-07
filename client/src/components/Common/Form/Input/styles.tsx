// Functions.
import styled from "styled-components";

// Mixins.
import { InputContainer, Label, Input } from "../../../../Mixins";

// Styles.
const SContainer = styled.div<{
  isError: boolean;
  isSuccess: boolean;
  checkValidity: boolean;
  pseudoElementWidth: number;
}>`
  ${InputContainer()};

  /* .envelope {
    transition-duration: 0.3s;
    position: absolute;
    right: 23px;
    bottom: 17px;
    width: 20px;
    height: auto;
    fill: ${({ isError, isSuccess, checkValidity }) =>
    !checkValidity
      ? "#abc2d4"
      : isError
      ? "#ff8282"
      : isSuccess
      ? "#98e792"
      : "#abc2d4"};
  } */
`;

const SLabel = styled.label<{ isActive: boolean }>`
  ${Label()};
`;

const SInput = styled.input<{
  isError: boolean;
  isSuccess: boolean;
  checkValidity: boolean;
}>`
  ${Input()};
`;

const SErrors = styled.p`
  color: #ff8282;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  /* margin: -20px 0 50px; */
  line-height: 1.6;
  letter-spacing: 0.4px;
  /* position: absolute;
    top: 100%;
    left: 0; */
  /* opacity: 0; */
  height: 0;
  transition-duration: 0.3s;
  opacity: 0;

  div {
    transform: translateY(15px);
  }
`;

export { SContainer, SLabel, SInput, SErrors, Input };
