// functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

const SNote = styled.p`
  color: var(--text);
  margin: 20px 0;
`;

const SButton = styled(Button)`
  margin-bottom: 20px;
`;

const SSecondButton = styled(SButton)`
  background-color: var(--secondary);
  margin-bottom: 0;
`;

export { SNote, SButton, SSecondButton };
