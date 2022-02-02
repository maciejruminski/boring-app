// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../../Mixins";

const SHeading = styled.h3`
  ${Heading()};
  margin-bottom: 10px;
`;

const SSmallNote = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
  color: var(--primaryLight);
`;

const SNote = styled.p`
  margin: 0 0 20px;
`;

export { SHeading, SNote, SSmallNote };
