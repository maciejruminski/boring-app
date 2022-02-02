// Functions.
import styled from "styled-components";

// Mixins.
import { InputContainer, Label, Input } from "../../../../Mixins";

// Styles.
const SContainer = styled.div`
  ${InputContainer()};
  margin: 30px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SLabel = styled.label`
  ${Label()};
`;

const SSelect = styled.select`
  ${Input()};
`;

const SCustomSelect = styled.div<{ areOptionsVisible: boolean }>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #abc2d4;
  color: black;
  z-index: 10;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: 5px;
  display: ${({ areOptionsVisible }) => (areOptionsVisible ? "block" : "none")};
`;

const SCustomOption = styled.div`
  padding: 12px 23px;
  border-bottom: 1px solid #97b3c9;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 15px;
  }

  &.active {
    background: red;
  }
`;

export { SContainer, SLabel, SSelect, SCustomSelect, SCustomOption };
