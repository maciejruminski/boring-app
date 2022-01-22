import { css } from "styled-components";

interface FontProps {
  size?: number;
  weight?: number;
}

export const Font = ({ size, weight }: FontProps) => css`
  font: ${weight} normal ${size + "px"} / 20px "Montserrat", sans-serif;
`;

export const ScreenReaderText = () => css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal;
`;

export const BodyBackground = () => css`
  background-color: #0c1025;
  background: linear-gradient(135deg, #0c143d, #090b14);
`;
