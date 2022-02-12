// Functions.
import styled from "styled-components";

// Mixins.
import { Heading } from "../../../../Mixins";

// Components.
import Button from "../../../Common/Button";

// Styles.
const SForm = styled.form`
  margin-top: 30px;
  padding-top: 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.15;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--text);
    z-index: -1;
  }
`;

const SHeading = styled.h3`
  ${Heading()};
`;

const SNotification = styled.p`
  color: var(--success);
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 20px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  height: 0;
  transition-duration: var(--transitionDuration);
  opacity: 0;
`;

const SButton = styled(Button)`
  background-color: var(--secondary);
  margin-top: 0;
`;

export { SForm, SHeading, SNotification, SButton };
