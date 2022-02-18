// Functions.
import styled from "styled-components";

// Styles.
const SPlace = styled.li<{ isVisible: boolean }>`
  margin: 0;
  padding: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const SButton = styled.button`
  margin: 0 0 15px;
  padding: 22px;
  background-color: rgb(85, 143, 231, 3%);
  border: none;
  color: var(--text);
  display: block;
  width: 100%;
  position: relative;
  border-radius: var(--borderRadius);

  ${SPlace}:last-child & {
    margin-bottom: 0;
  }

  &:before,
  &:after {
  }

  &:before {
    content: "";
    position: absolute;
    opacity: 0.15;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* width: 100%; */
    border: 2px solid var(--text);
    border-radius: var(--borderRadius);
    z-index: -1;
  }

  &:after {
    /* top: 1px; */
    /* bottom: 1px; */
    /* right: -1px; */
    /* width: 40px; */
    /* background-color: var(--text); */
    /* border-radius: 0 var(--borderRadius) var(--borderRadius) 0; */
  }
`;

const SBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const SName = styled.p`
  margin: -5px 0 0;
  font-size: 16px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  max-width: calc(100% - 42px);
  color: white;
`;

const SArrowContainer = styled.div`
  position: relative;
  padding: 6px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.4;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 2px solid var(--text);
    border-radius: 50px;
    z-index: -1;
  }
`;

const SArrow = styled.img`
  width: 12px;
`;

export { SPlace, SButton, SBottom, SName, SArrowContainer, SArrow };
