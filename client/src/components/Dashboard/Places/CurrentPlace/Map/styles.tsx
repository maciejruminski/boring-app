// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Styles.
const SMap = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: var(--borderRadius);
  background-color: var(--textLight);
`;

const SMapText = styled.p`
  margin: 0;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: var(--textDark);
  line-height: 1.45;
`;

const SButton = styled(Button)`
  margin: 0 0 20px;
  background-color: var(--textLight);
  color: var(--primary);
`;

export { SMap, SMapText, SButton };
