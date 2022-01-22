import styled, { css } from "styled-components";

const SEmail = styled.div<{ isError: string }>`
  color: white;
  overflow: hidden;

  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#css-custom-properties-the-trick-to-correct-sizing
  height: 100vh;
  height: ${window.innerHeight + "px"};
  /* min-height: 100vh; */
  /* margin-top: 20px; */
  /* width: calc(100% - 40px); */
  /* margin-left: 20px; */

  /* justify-content: center; */
  padding: 60px 40px;
  box-sizing: border-box;
  position: relative;
  /* text-align: center; */
  /* top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  background-color: black;
  color: white; */

  .lock {
    position: absolute;
    top: 20px;
    right: 100px;
    transform: translateX(50%);
    z-index: 0;
    opacity: 0.1;
    width: 600px;
    height: auto;
    fill: #0c3d68;
  }

  .form-group {
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
    }

    &:before {
      left: 0;
      border-left: 2px solid #abc2d4;
      border-top: 2px solid #abc2d4;
    }

    &:after {
      right: 0;
      border-top: 2px solid #abc2d4;
      border-right: 2px solid #abc2d4;
      border-radius: 0 5px 5px 0;
      width: calc(100% - 10px);
    }

    &-error {
      &:after,
      &:before {
        border-color: #ff8282;
      }

      .envelope {
        fill: #ff8282 !important;
      }

      input {
        color: #ff8282 !important;
        border-color: #ff8282 !important;
      }
    }

    &-success {
      &:after,
      &:before {
        border-color: #98e792;
      }

      .envelope {
        fill: #98e792 !important;
      }

      input {
        color: #98e792 !important;
        border-color: #98e792 !important;
      }
    }

    &-error,
    &-success {
      &:after {
        width: calc(100% - 165px);
      }

      label {
        transform: translateY(-27px) translateX(-10px) scale(0.85);
      }
    }

    label {
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

      /* &.label-active {
        transform: translateY(-26px) translateX(-10px) scale(0.85);
      } */
    }

    input {
      appearance: none;
      background-color: transparent;
      border: none;
      border: 2px solid #abc2d4;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
      border-top: none;
      margin: 0;
      padding: 16px 63px 14px 23px;
      color: #abc2d4;
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
    }

    .envelope {
      transition-duration: 0.3s;
      position: absolute;
      width: 20px;
      height: auto;
      fill: #abc2d4;
      right: 23px;
      bottom: 17px;
    }
  }

  .col-md-6 {
    position: relative;
  }

  .error-message {
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

    .error-message-text {
      transform: translateY(15px);
    }

    /* &.testowo {
      height: 0;
      position: relative;
      transform: translateY(15px);
    }

    &.visible {
      opacity: 1;
    } */
  }

  .btnRegister {
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
  }
`;

const SEmailContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export { SEmail, SEmailContainer };
