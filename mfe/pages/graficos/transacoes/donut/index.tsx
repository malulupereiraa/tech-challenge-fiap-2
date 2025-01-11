import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

// Importação dinâmica para evitar problemas com SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutChart = ({ token, clientId }: { token: string; clientId: string }): JSX.Element => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    series: number[];
  }>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXTAUTH_URL}/api/users/${clientId}/transactions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.result;

        // Agrupar dados por tipo de transação
        const groupedData = data.reduce(
          (acc: Record<string, number>, item: any) => {
            const type = item.transactionType || "Outros";
            acc[type] = (acc[type] || 0) + item.amount;
            return acc;
          },
          {}
        );

        // Extrair labels e valores (series)
        const labels = Object.keys(groupedData);
        const series = Object.values(groupedData);

        setChartData({ labels, series });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "donut",
    },
    labels: chartData.labels,
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toFixed(2)}`,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // Ajuste o tamanho interno do donut
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: "#BDDCE3", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <Chart options={options} series={chartData.series} type="donut" width="400" />
    </div>
  );
};

export default DonutChart;
