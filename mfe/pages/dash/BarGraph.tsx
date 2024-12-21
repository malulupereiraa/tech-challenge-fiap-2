import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

// Importação dinâmica para evitar problemas com SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TransactionBarChart = () => {
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
        const response = await axios.get("/api/transactions/teste"); // Substitua pela rota real do seu endpoint
        const data = response.data;

        // Processar os dados para agrupar por tipo de transação e mês
        const groupedData: Record<string, Record<string, number>> = {};

        data.forEach((item: any) => {
          const date = new Date(item.date);
          const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; // YYYY-MM
          const transactionType = item.transactionType;

          // Inicializar o grupo, se necessário
          if (!groupedData[transactionType]) {
            groupedData[transactionType] = {};
          }

          // Somar os valores por mês e tipo
          groupedData[transactionType][month] =
            (groupedData[transactionType][month] || 0) + item.amount;
        });

        // Extrair os meses únicos
        const allMonths = Array.from(
          new Set(
            data.map((item: any) =>
              `${new Date(item.date).getFullYear()}-${String(
                new Date(item.date).getMonth() + 1
              ).padStart(2, "0")}`
            )
          )
        ).sort();

        // Construir as séries do gráfico
        const series = Object.keys(groupedData).map((transactionType) => ({
          name: transactionType,
          data: allMonths.map((month) => groupedData[transactionType][month] || 0),
        }));

        setChartData({
          categories: allMonths, // Eixo X: meses
          series, // Séries: valores por tipo de transação
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
      stacked: false, // Barras empilhadas 
    },
    xaxis: {
      categories: chartData.categories,
      title: {
        text: "Mês",
      },
    },
    yaxis: {
      title: {
        text: "Valores Totais",
      },
    },
    legend: {
      position: "top" as "top",
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toFixed(2)}`,
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de Barra - Valores por Mês e Tipo de Transação</h2>
      <Chart options={options} series={chartData.series} type="bar" height="300" />
    </div>
  );
};

export default TransactionBarChart;
