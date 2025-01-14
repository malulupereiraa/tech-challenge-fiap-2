"use client";

import { BackgroundContainer } from "./WeatherWidget.styles";
import { useEffect, useState } from "react";

import axios from "axios";

export default function WeatherWidget() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const AllowLocAndViewWeather = () => {
    if (!location) {
      return (
        <div id="habilitar-local-container" className="infos-containers">
          <p>
            Habilite sua localização para que possa ver as condições de tempo.
          </p>
        </div>
      );
    } else if (!weather) {
      return (
        <div id="habilitar-local-container" className="infos-containers">
          Buscando o informações sobre o clima...;
        </div>
      );
    } else {
      return (
        <>
          <div id="tit-local-temp-container">
            <div>
              <h3>O TEMPO</h3>
              <h4 style={{ lineHeight: 0.8 }}>AGORA</h4>
              <div id="description-container">
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
            <div id="local-temp-container" className="infos-containers">
              <p>{weather.name}</p>
              <h4>
                {weather.main.temp.toFixed(1)}
                <span> °C</span>
              </h4>
            </div>
          </div>
          <div className="espaçador-vert"></div>
          <div id="desc-info-container" className="infos-containers">
            <div>
              <p>Temp. max: {weather.main.temp_max.toFixed(1)}°C</p>
              <p>Temp. min: {weather.main.temp_min.toFixed(1)}°C</p>
            </div>
            <div>
              <p>Pres atm.: {weather.main.pressure} hPa</p>
              <p>Umidade: {weather.main.humidity}%</p>
            </div>
          </div>
        </>
      );
    }
  };

  const getWeather = async (lat: number, long: number) => {
    try {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat,
            lon: long,
            appid: APIKEY,
            lang: "pt",
            units: "metric",
          },
        }
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  return (
    <BackgroundContainer>
      <div id="gradiente">
        <AllowLocAndViewWeather />
      </div>
    </BackgroundContainer>
  );
}
