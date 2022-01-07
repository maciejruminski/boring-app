import styled from "styled-components";

import { Font } from "../../../Mixins";

const SSubmit = styled.button`
  ${Font({ weight: 600, size: 16 })};
  appearance: none;
  border: none;
  background-color: var(--theme);
  padding: 16px 28px;
  letter-spacing: 0.5px;
  border-radius: var(--borderRadius);
  color: #ffffff;
  cursor: pointer;
`;

export { SSubmit };
