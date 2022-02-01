import styled from "styled-components";

import { Font } from "../../../Mixins";

const SSubmit = styled.button`
  ${Font({ weight: 600, size: 15 })};
  appearance: none;
  border: none;
  background-color: var(--primary);
  padding: 14px 22px;
  letter-spacing: 0.2px;
  border-radius: var(--borderRadius);
  color: #ffffff;
  cursor: pointer;
  width: 100%;
`;

export { SSubmit };
