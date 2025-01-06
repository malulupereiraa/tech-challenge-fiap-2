import styled from "styled-components";

export const Flip = styled.div`
  transition: 0.7s;
  transform-style: preserve-3d;
  -webkit-animation: flip 2.5s ease;
  animation: flip 2.5s ease;
`;

export const Left = styled.div`
  position: absolute;
  left: 0;
  width: 60vw;
  height: 100vh;
  background-image: linear-gradient(to right, #202020, gray);
`;

export const Right = styled.div`
  position: absolute;
  right: 0;
  width: 60vw;
  height: 100vh;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 450px;
  height: 280px;

  perspective: 1000;
  &:hover {
    ${Flip} {
      transform: rotateY(180deg);
    }
    .back {
      -webkit-backface-visibility: inherit;
      backface-visibility: inherit;
      display: inherit;
      height: 280px;
    }
    .front {
      display: none;
    }
  }
`;

export const Chip = styled.div`
  position: relative;
  top: 60px;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
  overflow: hidden;

  .chip-line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #333;

    &:nth-child(1) {
      top: 13px;
    }

    &:nth-child(2) {
      top: 20px;
    }

    &:nth-child(3) {
      top: 28px;
    }

    &:nth-child(4) {
      left: 25px;
      width: 1px;
      height: 50px;
    }
  }

  .chip-main {
    width: 20px;
    height: 25px;
    border: 1px solid #333;
    border-radius: 3px;
    background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
    z-index: 1;
  }
`;

export const Back = styled.div`
  display: none;
  width: inherit;
  height: inherit;
  border-radius: 15px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(to right, #47a138, #004d61);

  transform: rotateY(180deg) translateZ(0);

  .strip-black {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 50px;
    background: black;
  }

  .ccv {
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    height: 36px;
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    text-align: right;
    letter-spacing: 1px;
    color: #000;
    background: white;
  }

  label {
    display: block;
    margin: -30px 0 15px;
    font-size: 10px;
    text-transform: uppercase;
    color: white;
  }

  .terms {
    position: absolute;
    top: 150px;
    padding: 20px;
    font-size: 10px;
    text-align: justify;
  }
`;

export const Front = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 15px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(to right, #004d61, #47a138);
  overflow: hidden;

  transform: translateZ(0);
`;

export const Logo = styled.svg`
  position: absolute;
  top: 30px;
  right: 25px;
`;

export const Wave = styled.svg`
  position: relative;
  top: 20px;
  left: 100px;
`;

export const Limit = styled.div`
  position: relative;
  top: -30px;
  left: 150px;
`;

export const Investor = styled.div`
  position: relative;
  top: 30px;
  left: 25px;
  text-transform: uppercase;
`;

export const End = styled.div`
  margin-left: 25px;
  text-transform: uppercase;
  font-family: "cc font", monospace;

  .end-text {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Master = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;

  .circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .master-red {
    background-color: #eb001b;
  }
  .master-yellow {
    margin-left: -10px;
    background-color: rgba(255, 209, 0, 0.7);
  }
`;

export const CardNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 25px 10px;
  font-size: 23px;
  font-family: "cc font", monospace;
`;

export const CardHolder = styled.div`
  margin: 10px 25px;
  text-transform: uppercase;
  font-family: "cc font", monospace;
`;

export const CardLimitBar = styled.div`
  width: 283px;
`;

export const LabelLimit = styled.div`
  font-size: 12px;
`;
