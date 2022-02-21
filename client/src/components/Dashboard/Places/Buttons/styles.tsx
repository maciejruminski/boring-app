// functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

const SNote = styled.p`
  color: var(--text);
  margin: 20px 0;
`;

const SButton = styled(Button)``;

const SSecondButton = styled(SButton)`
  background-color: var(--secondary);
  margin: 20px 0 0;
`;

export { SNote, SButton, SSecondButton };
