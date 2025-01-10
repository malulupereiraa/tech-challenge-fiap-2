"use client";

import { BackgroundContainer } from "./WeatherWidget.styles";
import { useEffect, useState } from "react";
import Image from "next/image";

import axios from "axios";

export default function WeatherWidget() {
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const AllowLocAndViewWeather = () => {
    if (!location) {
      return (
        <>
          Habilite sua localização no browser para que possa ver as condições de
          tempo.
        </>
      );
    } else if (!weather) {
      return <>Buscando o informações sobre o clima...</>;
    } else {
      return (
        <>
          <div id="local-temp-container" className="infos-containers">
              <p>{weather.name}</p>
              <h4>{weather.main.temp.toFixed(1)}<span>°C</span></h4>
          </div>
          <div id="desc-info-container" className="infos-containers">
            <div id="description-container">
              <p>{weather.weather[0].description}</p>
            </div>
            <p>Temperatura máxima: {weather.main.temp_max.toFixed(1)}°C</p>
            <p>Temperatura mínima: {weather.main.temp_min.toFixed(1)}°C</p>
            <p>Pressão atmosférica: {weather.main.pressure} hPa</p>
            <p>Umidade: {weather.main.humidity}%</p>
          </div>
        </>
      );
    }
  };

  const getWeather = async (lat: number, long: number) => {
    setLoading(true);
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

    setLoading(false);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  return (
    <BackgroundContainer>
      <h3>O TEMPO AGORA</h3>
      <div id="info-weather-container">
        <AllowLocAndViewWeather />
      </div>
    </BackgroundContainer>
  );
}
