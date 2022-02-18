// Functions.
import styled from "styled-components";

// Mixins.
import { InputContainer, Label, Input } from "@src/Mixins";

// Styles.
const SContainer = styled.div<{
  isError: boolean;
  isSuccess: boolean;
  checkValidity: boolean;
  pseudoElementWidth: number;
}>`
  ${InputContainer()};

  .icon {
    transition-duration: 0.3s;
    position: absolute;
    right: 23px;
    bottom: 17px;
    width: 20px;
    height: auto;
    fill: ${({ isError, isSuccess }) =>
      isError ? "var(--error)" : isSuccess ? "var(--success)" : "var(--text)"};
  }
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
  color: var(--error);
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 10px;
  line-height: 1.6;
  letter-spacing: 0.4px;
  height: 0;
  transition-duration: 0.3s;
  opacity: 0;
  transform: translateY(14px);
`;

export { SContainer, SLabel, SInput, SErrors, Input };
