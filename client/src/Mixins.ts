import { css } from "styled-components";

interface FontProps {
  size?: number;
  weight?: number;
}

export const Font = ({ size, weight }: FontProps) => css`
  font: ${weight} normal ${size + "px"} / 20px "Montserrat", sans-serif;
`;
