// Functions.
import styled from "styled-components";

// Mixins.
import { Modal, Heading } from "../../../Mixins";

// Components.
import Button from "../../Common/Button";
import { Lock } from "../../Common/Icons";

// Styles.
const SOneTimePassword = styled.div<{ isModalOpen: boolean }>`
  ${Modal()};
  z-index: 2;
`;

const SLock = styled(Lock)`
  position: absolute;
  top: 20px;
  right: 100px;
  transform: translateX(50%);
  z-index: -1;
  opacity: 0.04;
  width: 600px;
  height: auto;
  fill: var(--primary);
`;

const SForm = styled.form``;

const SHeading = styled.h3`
  ${Heading()};
`;

const SWarning = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--error);
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;

  img {
    width: 17px;
    margin-right: 10px;
    transform: translateY(3px);
  }
`;

const SButton = styled(Button)`
  margin-top: 20px;
`;

const SSecondForm = styled.form`
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

const SSecondButton = styled(SButton)`
  background-color: var(--secondary);
  margin-top: 5px;
`;

export {
  SOneTimePassword,
  SLock,
  SForm,
  SHeading,
  SWarning,
  SButton,
  SSecondForm,
  SSecondButton,
};
