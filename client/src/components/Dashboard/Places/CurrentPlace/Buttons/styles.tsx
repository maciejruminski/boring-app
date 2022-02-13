// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Styles.
const SButton = styled(Button)`
  margin-bottom: 20px;
`;

const SSecondButton = styled(Button)`
  background-color: var(--secondary);
  margin-bottom: 0;
`;

export { SButton, SSecondButton };
