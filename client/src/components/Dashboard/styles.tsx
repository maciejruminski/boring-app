// Functions.
import styled from "styled-components";

// Styles.
const SDashboard = styled.div`
  @keyframes showDashboard {
    to {
      opacity: 1;
    }
  }

  animation: showDashboard var(--spinnerTransitionDuration) linear 0.25s
    forwards alternate;
  opacity: 0;
`;

export { SDashboard };
