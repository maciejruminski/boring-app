// Functions.
import styled from "styled-components";

// Mixins.
import { InputContainer, Label, Input } from "@src/Mixins";

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
  background: var(--textLight);
  color: var(--textDark);
  z-index: 10;
  max-height: 250px;
  overflow-y: scroll;
  border-radius: var(--borderRadius);
  transition-duration: var(--transitionDuration);
  transition-timing-function: ease-in;
  opacity: ${({ areOptionsVisible }) => (areOptionsVisible ? "1" : "0")};
  visibility: ${({ areOptionsVisible }) =>
    areOptionsVisible ? "visible" : "hidden"};

  &[data-id="maxPrice"] {
    top: auto;
    bottom: 65px;
  }
`;

const SCustomOption = styled.div`
  padding: 12px 23px;
  font-size: 15px;
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid var(--textDark);
    opacity: 0.05;
  }

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    padding-bottom: 15px;

    &:after {
      display: none;
    }
  }

  &.active {
    background-color: var(--primary);
    color: var(--textLight);
  }
`;

const SCaret = styled.img`
  position: absolute;
  top: 22px;
  right: 23px;
  width: 14px;
  height: auto;
`;

export { SContainer, SLabel, SSelect, SCustomSelect, SCustomOption, SCaret };
