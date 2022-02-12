// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../Mixins";

// Styles.
const SHeading = styled.h3`
  ${Heading()};
`;

const SWarning = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--error);
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;

  img {
    width: 17px;
    margin-right: 10px;
    transform: translateY(3px);
  }
`;

export { SHeading, SWarning };
