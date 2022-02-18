// Functions.
import styled from "styled-components";

// Mixins.
import { Font } from "@src/Mixins";

// Styles.
const SSubmit = styled.button`
  ${Font({ weight: 600, size: 15 })};
  appearance: none;
  border: none;
  background-color: var(--primary);
  padding: 16px 22px;
  letter-spacing: 0.2px;
  border-radius: var(--borderRadius);
  color: var(--textLight);
  cursor: pointer;
  width: 100%;
  transition-duration: var(--transitionDuration);
  outline: none;
`;

export { SSubmit };
