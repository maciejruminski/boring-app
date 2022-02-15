// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Styles.
const fitIsActiveToStyle = ({ isActive }: { isActive: boolean }) => {
  if (isActive) {
    return `color: var(--textLight);`;
  }

  return `
    color: var(--primaryLight);
    opacity: 0.6;
  `;
};

const SSwitcher = styled.div<{ isBusy: boolean }>`
  margin: 0 0 15px;
`;

const SButton = styled(Button)<{ isActive: boolean }>`
  padding: 0;
  width: 32px;
  height: 26px;
  text-transform: uppercase;
  border: 2px solid var(--primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px 0 0;
  background-color: transparent;
  ${fitIsActiveToStyle};
`;

export { SSwitcher, SButton };
