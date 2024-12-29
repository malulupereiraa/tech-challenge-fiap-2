import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "area",
        zoom: { enabled: false },
      },
      xaxis: {
        type: "datetime", // Eixo baseado em datas
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM yyyy",
            day: "dd MMM",
          },
        },
      },
      yaxis: {
        title: { text: "Cotação (BRL)" },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      markers: {
        size: 4,
      },
      tooltip: {
        x: { format: "dd/MM/yyyy HH:mm" },
      },
      
      colors: ["#47A138", "#FF5733", "#1E90FF"],
      title: {
        text: "Cotações de Moedas (USD, EUR, GBP)",
        align: "center",
        margin: 20,
        offsetY: 10,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      
    },
  });

  const endpoints = {
    USD: "https://economia.awesomeapi.com.br/json/daily/USD-BRL/120",
    EUR: "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/120",
    GBP: "https://economia.awesomeapi.com.br/json/daily/GBP-BRL/120",
  };

  // Função para buscar dados de todas as moedas
  const fetchAllExchangeRates = async () => {
    try {
      const promises = Object.entries(endpoints).map(async ([currency, url]) => {
        const { data } = await axios.get(url);
        const formattedData = data
          .map((item: any) => ({
            x: item.timestamp * 1000, // Timestamp em milissegundos
            y: parseFloat(item.bid), // Valor da cotação
          }))
          .sort((a: any, b: any) => a.x - b.x); // Ordena por data
        return { name: currency, data: formattedData };
      });

      const allSeries = await Promise.all(promises);

      setChartData((prev) => ({
        ...prev,
        series: allSeries,
      }));
    } catch (error) {
      console.error("Erro ao buscar cotações:", error);
    }
  };

  // Buscar os dados ao montar o componente
  useEffect(() => {
    fetchAllExchangeRates();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Gráfico de Cotações</h2>
      <Chart
        style={{ background: "#fff", padding: "20px", borderRadius: "5px" }}
        options={chartData.options}
        series={chartData.series}
        type="line"
        width={1000}
        height={350}
      />
    </div>
  );
};

export default AreaChart;
