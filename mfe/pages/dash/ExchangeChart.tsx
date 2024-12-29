import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ExchangeChart = () => {
  const [activeCurrency, setActiveCurrency] = useState("USD"); 
  const [chartData, setChartData] = useState({
    series: [{ name: "Cotação", data: [] }],
    options: {
      chart: {
        type: "line",
        zoom: { enabled: false },
      },
      xaxis: {
        type: "datetime", 
        title: { text: "Data" },
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
      colors: ["#47A138"],
      title: {
        text: "Cotação de Moeda",
        align: "left",
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

  // Função para buscar dados da API
  const fetchExchangeRates = async () => {
    try {
      const { data } = await axios.get(endpoints[activeCurrency]);
      const formattedData = data
        .map((item: any) => ({
          x: item.timestamp * 1000, 
          y: parseFloat(item.bid),
        }))
        .sort((a: any, b: any) => a.x - b.x); 

      setChartData((prev) => ({
        ...prev,
        series: [
          {
            name: `Cotação (${activeCurrency}/BRL)`,
            data: formattedData,
          },
        ],
        options: {
          ...prev.options,
          title: { ...prev.options.title, text: `Cotação de ${activeCurrency}/BRL` },
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar cotações:", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [activeCurrency]);

  return (
    <div>
      <h2>Gráfico de Cotações</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveCurrency("USD")} disabled={activeCurrency === "USD"}>
          Dólar (USD)
        </button>
        <button onClick={() => setActiveCurrency("EUR")} disabled={activeCurrency === "EUR"}>
          Euro (EUR)
        </button>
        <button onClick={() => setActiveCurrency("GBP")} disabled={activeCurrency === "GBP"}>
          Libra (GBP)
        </button>
      </div>
      <Chart
        style={{ background: "#fff", padding: "20px", borderRadius: "5px"}}
        options={chartData.options}
        series={chartData.series}
        type="line"
        width={1000}
        height={350}
      />
    </div>
  );
};

export default ExchangeChart;
