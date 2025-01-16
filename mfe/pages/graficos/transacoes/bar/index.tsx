import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

// Importação dinâmica para evitar problemas com SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ token, clientId }: { token: string; clientId: string }): JSX.Element => {
  const [chartData, setChartData] = useState<{
    categories: string[];
    series: { name: string; data: number[] }[];
  }>({
    categories: [],
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/users/${clientId}/transactions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.result;

        // Agrupar dados por tipo de transação e mês
        const groupedData: Record<string, Record<string, number>> = {};

        data.forEach((item: any) => {
          const date = new Date(item.date);
          const month = `${date.getFullYear()}-${String(
            date.getMonth() + 1
          ).padStart(2, "0")}`; // Formato: YYYY-MM
          const transactionType = item.transactionType;

          if (!groupedData[transactionType]) {
            groupedData[transactionType] = {};
          }

          groupedData[transactionType][month] =
            (groupedData[transactionType][month] || 0) + item.amount;
        });

        // Extrair e ordenar os meses únicos
        const allMonths = Array.from(
          new Set(
            data.map((item: any) =>
              `${new Date(item.date).getFullYear()}-${String(
                new Date(item.date).getMonth() + 1
              ).padStart(2, "0")}`
            )
          )
        ).sort();

        // Construir séries para o gráfico
        const series = Object.keys(groupedData).map((transactionType) => ({
          name: transactionType,
          data: allMonths.map((month) => groupedData[transactionType][month] || 0),
        }));

        setChartData({
          categories: allMonths,
          series,
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
      },
    },
    xaxis: {
      categories: chartData.categories,
      title: {
        text: "Mês",
      },
      labels: {
        rotate: -45,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Valores Totais (R$)",
      },
      labels: {
        formatter: (value: number) => `R$ ${value.toFixed(2)}`,
      },
    },
    legend: {
      position: "top" as "top",
      fontSize: "12px",
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toFixed(2)}`,
      },
    },
  };

  return (
    <div style={{ backgroundColor: "#BDDCE3", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <Chart options={options} series={chartData.series} type="bar" height="400" width="500" />
    </div>
  );
};

export default BarChart;