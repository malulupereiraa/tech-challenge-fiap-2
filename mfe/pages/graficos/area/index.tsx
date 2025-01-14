import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
  const [chartData, setChartData] = useState<any>({
    series: [],
    options: {
      chart: {
        type: "area" as const, zoom: { enabled: false }, toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      xaxis: {
        type: "datetime",
        labels: { datetimeFormatter: { year: "yyyy", month: "MMM yyyy", day: "dd MMM" } },
      },
      yaxis: { title: { text: "Cotação (BRL)" } },
      stroke: { curve: "smooth", width: 1 as const },
      markers: { size: 4 },
      tooltip: { x: { format: "dd/MM/yyyy HH:mm" } },
      colors: ["#47A138", "#FF5733", "#004D61"],
      title: {
        text: "Cotações de Moedas (Dólar, Euro, Libra)",
        align: "left" as const,
        margin: 20,
        offsetY: 10,
        style: { fontSize: "20px", fontWeight: "bold" },
      },
      dataLabels: {
        enabled: false,
      },
    },

  });

  const endpoints = {
    USD: "https://economia.awesomeapi.com.br/json/daily/USD-BRL/30",
    EUR: "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/30",
    GBP: "https://economia.awesomeapi.com.br/json/daily/GBP-BRL/30",
  };

  const fetchAllExchangeRates = async () => {
    try {
      const promises = Object.entries(endpoints).map(async ([currency, url]) => {
        const { data } = await axios.get(url);
        const formattedData = data.map((item: { timestamp: number; bid: string; }) => ({
          x: item.timestamp * 1000,
          y: parseFloat(item.bid),
        }));
        return { name: currency, data: formattedData };
      });

      const allSeries = await Promise.all(promises);
      setChartData((prev: any) => ({ ...prev, series: allSeries }));
    } catch (error) {
      console.error("Erro ao buscar cotações:", error);
    }
  };

  useEffect(() => {
    fetchAllExchangeRates();
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "100%", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <Chart
        options={{
          ...chartData.options,
          responsive: [
            {
              breakpoint: 768,
              options: {
                chart: { width: "100%" },
                xaxis: { labels: { show: true } },
                yaxis: { labels: { show: true } },
                title: { style: { fontSize: "16px" } },
              },
            },
            {
              breakpoint: 480,
              options: {
                chart: { width: "100%" },
                xaxis: { labels: { show: true, rotate: -45 } },
                yaxis: { labels: { show: true } },
                markers: { size: 2 },
              },
            },
          ],
        }}
        series={chartData.series}
        type="area"
        width="100%"
        height={350}
      />
    </div>
  );

};

export default AreaChart;