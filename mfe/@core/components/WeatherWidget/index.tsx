"use client";

import { WidgetContainer } from "./WeatherWidget.styles";
import { useEffect, useState } from "react";

import axios from "axios";

interface WeatherData {
  weather: [{
    description: string;
  }];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    humidity: number;
  };
}

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
    } else if (!weather){
      return(
        <>
        Buscando o informações sobre o clima...
        </>
      )
    }else {
      return(
        <ul>
        <li>{weather.weather[0].description}</li>
        <li>Temperatura atual: {weather.main.temp.toFixed(1)}°C</li>
        <li>Temperatura máxima: {weather.main.temp_max.toFixed(1)}°C</li>
        <li>Temperatura mínima: {weather.main.temp_min.toFixed(1)}°C</li>
        <li>Pressão atmosférica: {weather.main.pressure} hPa</li>
        <li>Umidade: {weather.main.humidity}%</li>
      </ul>
      )
    }
  };

  let getWeather = async (lat: number, long: number) => {
    setLoading(true);
    try {
      const response = await axios.get<WeatherData>(
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
      setLoading(false)
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  return (
    <WidgetContainer>
      <div>
        <h3>O tempo agora!</h3>
        <AllowLocAndViewWeather />
      </div>
    </WidgetContainer>
  );
}
