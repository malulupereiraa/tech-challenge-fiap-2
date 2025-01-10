import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 315px;
  max-width: 450px;
  height: 280px;
  border-radius: 12px;
  margin-top: 30px;
  background: url("/noaa-p9BRX1mBfe4-unsplash.png") no-repeat;
  background-size: 500px 300px;
  padding: 15px;
  color: #ffffff;
  text-align: left;
  font-size: 16px;

  p {
    margin: 0;
    line-height: 2;
    text-shadow: 0.1rem 0.1rem 0.2rem #00000080;
  }

  h4 {
    color: #ff8c00;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
    color: #ff8c00;
    font-family: 'Arial Narrow', sans-serif;
  }

  h4 span {
    font-size: 1.5rem;
  }

  #info-weather-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-height: 90%;
    padding: 8px;
  }

  #local-temp-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    height: 50%;
    margin: 0;
    text-align: left;
  }

  #desc-info-container {
  }
  .infos-containers {
    background-color: #00000080;
    box-shadow: 0 0 15px #00000080;
    border-radius: 12px;
    padding: 15px;
  }
`;
