// Functions.
import styled from "styled-components";

// Components.
import { Lock } from "@common/Icons";

// Styles.
const SEmail = styled.div`
  position: relative;
`;

const SLock = styled(Lock)`
  position: absolute;
  top: 20px;
  right: 100px;
  transform: translateX(50%);
  z-index: -1;
  opacity: 0.04;
  width: 600px;
  height: auto;
  fill: var(--primary);
`;

export { SEmail, SLock };
