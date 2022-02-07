// Functions.
import styled from "styled-components";

// Components.
import Button from "../../../../Common/Button";

// Styles.
const SMap = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--textLight);
`;

const SMapText = styled.p`
  margin: 0;
  font-size: 15px;
  text-transform: uppercase;
  max-width: 150px;
  text-align: center;
  font-weight: 600;
  color: var(--textDark);
  line-height: 1.45;
`;

const SButton = styled(Button)`
  margin: 20px 0;
  background-color: var(--textLight);
  color: var(--primary);
`;

export { SMap, SMapText, SButton };
