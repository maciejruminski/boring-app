// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Styles.
const fitIsSavedToStyle = ({ isSaved }: { isSaved: boolean }) => {
  if (isSaved) {
    return `
      background-color: var(--error);
    `;
  }

  return `
    background-color: var(--success);
  `;
};

const SButton = styled(Button)`
  margin-bottom: 0;
  color: var(--textDark);
  ${fitIsSavedToStyle};
`;

const SSecondButton = styled(Button)`
  margin-bottom: 20px;
`;

export { SButton, SSecondButton };
