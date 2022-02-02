// Functions.
import styled from "styled-components";

// Mixins.
import { ScreenReaderText, Heading } from "../../../../Mixins";

// Components.
import Button from "../../../Common/Button";

// Styles.
const SContainer = styled.div`
  margin-bottom: 30px;
`;

const SFiltersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SButton = styled(Button)`
  background-color: transparent;
  padding: 5px 0 5px 5px;
  width: auto;

  .text {
    ${ScreenReaderText()};
  }

  .icon {
    width: 26px;
    display: block;
  }
`;

const SFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
`;

const SFilter = styled.p`
  margin: 4px;
  color: var(--text);
  font-size: 14px;
  line-height: 1.3;

  span {
    color: var(--primaryLight);
    font-weight: 500;
  }
`;

const SHeading = styled.h3`
  ${Heading()};
`;

export {
  SContainer,
  SFiltersHeader,
  SFiltersContainer,
  SButton,
  SFilter,
  SHeading,
};
