// functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

const SNote = styled.p`
  color: var(--text);
  margin: 0 0 17px;
`;

const SButton = styled(Button)`
  margin-bottom: 20px;
`;

const SSecondButton = styled(SButton)`
  background-color: var(--secondary);
`;

export { SNote, SButton, SSecondButton };
