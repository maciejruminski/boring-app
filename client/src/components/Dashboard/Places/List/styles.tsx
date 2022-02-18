// Functions.
import styled from "styled-components";

// Components.
import Button from "@common/Button";

// Styles.
const SListContainer = styled.div``;

const SListInnerContainer = styled.div`
  overflow: hidden;
  transition-duration: var(--transitionDuration);
  transition-timing-function: ease;
`;

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SButton = styled(Button)`
  margin: 20px 0 0;
  background-color: var(--textLight);
  color: var(--primary);
`;

export { SListContainer, SListInnerContainer, SList, SButton };
