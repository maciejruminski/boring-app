import { css } from "styled-components";

export const Font = ({
  size,
  weight,
}: {
  size?: number;
  weight?: number;
}) => css`
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
  background-color: var(--polyfillBackground);
  background: linear-gradient(
    135deg,
    var(--gradientBackgroundFrom),
    var(--gradientBackgroundTo)
  );
`;

export const Modal = () => css<{ isModalOpen: boolean }>`
  ${BodyBackground()};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  transform: ${({ isModalOpen }) => (isModalOpen ? "scale(1)" : "scale(1.02)")};
  transition-duration: var(--spinnerTransitionDuration);
  transition-timing-function: ease-in;
`;

export const InputContainer = () => css<{
  isError: boolean;
  isSuccess: boolean;
  checkValidity: boolean;
  pseudoElementWidth: number;
}>`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 54px;
    border-radius: 5px 0 0 5px;
    bottom: 2px;
    transition-duration: 0.3s;
    border: 2px solid var(--text);
    border-bottom: none;
    border-color: ${({ isError, isSuccess, checkValidity }) =>
      !checkValidity
        ? "var(--text)"
        : isError
        ? "var(--error)"
        : isSuccess
        ? "var(--success)"
        : "var(--text)"};
  }

  &:before {
    left: 0;
    border-right: none;
    border-radius: 5px 0 0 5px;
  }

  &:after {
    right: 0;
    border-left: none;
    border-radius: 0 5px 5px 0;
    width: ${({ isError, isSuccess, pseudoElementWidth }) =>
      isError || isSuccess
        ? `calc(100% - ${pseudoElementWidth + 40}px)`
        : "calc(100% - 10px)"};
  }
`;

export const Label = () => css<{ isActive: boolean }>`
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  top: 19px;
  left: 23px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition-duration: 0.3s;
  transform-origin: left;
  transform: ${({ isActive }) =>
    isActive ? "translateY(-27px) translateX(1px) scale(0.85)" : ""};
  color: ${({ isActive }) => (isActive ? "var(--primaryLight)" : "var(--text)")};
`;

export const Input = () => css<{
  isError: boolean;
  isSuccess: boolean;
  checkValidity: boolean;
}>`
  appearance: none;
  padding: 16px 63px 14px 23px;
  border: 2px solid transparent;
  border-top: none;
  background-color: transparent;
  position: relative;
  z-index: 1;
  margin: 0;
  width: 100%;
  display: block;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 300;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition-duration: 0.3s;
  border-color: ${({ isError, isSuccess, checkValidity }) =>
    !checkValidity
      ? "var(--text)"
      : isError
      ? "var(--error)"
      : isSuccess
      ? "var(--success)"
      : "var(--text)"};
  color: ${({ isError, isSuccess, checkValidity }) =>
    !checkValidity
      ? "var(--text)"
      : isError
      ? "var(--error)"
      : isSuccess
      ? "var(--success)"
      : "var(--text)"};
`;

export const Heading = () => css`
  color: var(--textLight);
  font-weight: 500;
  font-size: 22px;
  margin: 0 0 -5px;
  line-height: 1.4;
`;
