// Functions.
import styled from "styled-components";

// Styles.

const SDashboard = styled.div`
  @keyframes example {
    from {
      opacity: 0;
      transform: scale(1.02);
      visibility: hidden;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  animation-name: example;
  animation-duration: 0.5s;
  animation-delay: 0.25s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export { SDashboard };
