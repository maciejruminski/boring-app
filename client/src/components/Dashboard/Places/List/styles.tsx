// functions.
import styled from "styled-components";

// Components.
import Button from "../../../Common/Button";

// Styles.
const SListContainer = styled.div`
  /* position: relative; */

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid var(--text);
    border-radius: var(--borderRadius);
    opacity: 0.15;
  } */
`;

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SButton = styled(Button)`
  margin-bottom: 20px;
  background-color: #ffffff;
  color: var(--primary);
`;

export { SListContainer, SList, SButton };
