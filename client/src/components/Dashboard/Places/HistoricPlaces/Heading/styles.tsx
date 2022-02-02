// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../../Mixins";

const SHeading = styled.h3`
  ${Heading()};
  margin-bottom: 10px;
`;

const SNote = styled.p`
  margin: 0 0 20px;
`;

export { SHeading, SNote };
