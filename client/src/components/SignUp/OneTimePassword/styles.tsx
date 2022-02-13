// Functions.
import styled from "styled-components";

// Mixins.
import { Modal } from "../../../Mixins";

// Components.
import { Lock } from "../../Common/Icons";

// Styles.
const fitFadingOutToStyle = ({ isFadingOut }: { isFadingOut: boolean }) => {
  if (isFadingOut) {
    return `opacity:0; transform: scale(1.02);`;
  }

  return `opacity:1;`;
};

const SOneTimePassword = styled.div<{ isModalOpen: boolean }>`
  ${Modal()};

  @keyframes example {
    from {
      opacity: 0;
      transform: scale(1.02);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation-name: example;
  animation-duration: var(--spinnerTransitionDuration);
  animation-fill-mode: forwards;
`;

const SOneTimePasswordContainer = styled.div<{ isFadingOut: boolean }>`
  ${fitFadingOutToStyle}
  transition-duration: var(--transitionDuration);
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

export { SOneTimePassword, SOneTimePasswordContainer, SLock };
