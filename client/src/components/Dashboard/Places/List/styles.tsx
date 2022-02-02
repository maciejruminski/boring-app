// functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

// Styles.
const SListContainer = styled.div``;

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SButton = styled(Button)`
  margin: 0;
  background-color: #ffffff;
  color: var(--primary);
`;

export { SListContainer, SList, SButton };
