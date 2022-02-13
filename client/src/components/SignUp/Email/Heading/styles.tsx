// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "@src/Mixins";

const SHeading = styled.h1`
  ${Heading()};
  font-size: 34px;
  line-height: 1.25;
  margin-bottom: 15px;

  span {
    display: block;
    font-weight: 600;
    color: var(--primaryLight);
  }
`;

export { SHeading };
