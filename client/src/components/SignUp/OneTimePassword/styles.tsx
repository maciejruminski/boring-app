import styled from "styled-components";

const SForm = styled.form``;

const SEmailContainer = styled.div<{ isError: boolean; isSuccess: boolean }>`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 53px;
    border-radius: 5px 0 0 5px;
    bottom: 0;
    transition-duration: 0.3s;
    border: 2px solid #abc2d4;
    border-bottom: none;
    border-color: ${({ isError, isSuccess }) =>
      isError ? "#ff8282" : isSuccess ? "#98e792" : "#abc2d4"};
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
    width: ${({ isError, isSuccess }) =>
      isError || isSuccess ? "calc(100% - 165px)" : "calc(100% - 10px)"};
  }

  .key {
    transition-duration: 0.3s;
    position: absolute;
    right: 23px;
    bottom: 17px;
    width: 20px;
    height: auto;
    fill: ${({ isError, isSuccess }) =>
      isError ? "#ff8282" : isSuccess ? "#98e792" : "#abc2d4"};
  }
`;

const SLabel = styled.label<{ isActive: boolean }>`
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  top: 19px;
  left: 23px;
  font-weight: 500;
  color: #abc2d4;
  letter-spacing: 0.5px;
  transition-duration: 0.3s;
  transform: ${({ isActive }) =>
    isActive ? "translateY(-27px) translateX(-10px) scale(0.85)" : ""};
`;

const SEmail = styled.input<{ isError: boolean; isSuccess: boolean }>`
  appearance: none;
  background-color: transparent;
  border: 2px solid
    ${({ isError, isSuccess }) =>
      isError ? "#ff8282" : isSuccess ? "#98e792" : "#abc2d4"};
  color: ${({ isError, isSuccess }) =>
    isError ? "#ff8282" : isSuccess ? "#98e792" : "#abc2d4"};
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  border-top: none;
  margin: 0;
  padding: 16px 63px 14px 23px;
  width: 100%;
  display: block;
  /* border-bottom: 1px solid white; */
  font-size: 20px;
  font-weight: 300;
  border-radius: 5px;
  /* text-transform: uppercase; */
  outline: none;
  /* font-family: "Arial"; */
  letter-spacing: 0.5px;
  text-decoration: none;
  transition-duration: 0.3s;
`;

const SErrors = styled.p`
  color: #ff8282;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  /* margin: -20px 0 50px; */
  line-height: 1.6;
  letter-spacing: 0.4px;
  /* position: absolute;
    top: 100%;
    left: 0; */
  /* opacity: 0; */
  height: 0;
  transition-duration: 0.3s;
  opacity: 0;

  div {
    transform: translateY(15px);
  }
`;

const SSubmit = styled.input`
  appearance: none;
  background-color: #1a7bcf;
  border: none;
  padding: 16px 28px;
  font-size: 16px;
  letter-spacing: 0.5px;
  /* text-transform: uppercase; */
  border-radius: 5px;
  font-weight: 600;
  color: white;
  margin-top: 30px;
  font-family: inherit;
`;

export { SForm, SEmailContainer, SLabel, SEmail, SErrors, SSubmit };
