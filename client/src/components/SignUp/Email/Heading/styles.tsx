import styled from "styled-components";

const SHeading = styled.h1`
  padding: 0 0 35px;
  margin: 0 0 40px;
  position: relative;
  font-weight: 500;
  font-size: 22px;
  color: #75b3e7;
  letter-spacing: 0.5px;

  span {
    font-size: 48px;
    color: #abc2d4;
    color: white;
    display: block;
    margin-top: 5px;
    font-weight: 300;
    transform: translateX(-5px);
    letter-spacing: 0;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 20px;
    height: 1px;
    /* border-bottom: 4px dotted #abc2d4; */
    border-bottom: 4px dotted #abc2d4;
    opacity: 0.5;
    /* background-color: #1a7bcf; */
  }

  &::after {
    background-color: white;
    left: 30px;
    width: 40px;
    width: 0;
    opacity: 0.1;
  }
`;

export { SHeading };
