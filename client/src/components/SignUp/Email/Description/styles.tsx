// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../Mixins";

// Styles.
const SDescription = styled.div`
  transition-duration: 0.3s;
  margin-top: auto;
`;

const SHeading = styled.h3`
  ${Heading()};
  position: relative;
  padding-top: 20px;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.15;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--text);
  }
`;

export { SDescription, SHeading };
