import styled from "styled-components";

const SContainer = styled.div`
  position: relative;
  margin: 50px 0;

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
    border-color: #abc2d4;
    box-sizing: border-box;
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
    width: calc(100% - 73px);
  }
`;

const SLabel = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  position: absolute;
  top: 19px;
  left: 23px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.5px;
  transition-duration: 0.3s;
  transform: translateY(-27px) translateX(0) scale(0.85);
`;

const SSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: 2px solid #abc2d4;
  color: #abc2d4;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  width: 100%;
  /* height: 50px; */
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

const SCustomSelect = styled.div<{ areOptionsVisible: boolean }>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #abc2d4;
  color: black;
  z-index: 10;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: 5px;
  display: ${({ areOptionsVisible }) => (areOptionsVisible ? "block" : "none")};
`;

const SCustomOption = styled.div`
  padding: 12px 23px;
  border-bottom: 1px solid #97b3c9;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 15px;
  }

  &.active {
    background: red;
  }
`;

export { SContainer, SLabel, SSelect, SCustomSelect, SCustomOption };
