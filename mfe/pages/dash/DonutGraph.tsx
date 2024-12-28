import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const [chartData, setChartData] = useState<{ labels: string[]; series: number[] }>({
    labels: [],
    series: [],
  });

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/transactions/teste"); 
        const data = response.data;

        // Processar os dados para agrupar por tipo de transação
        const groupedData = data.reduce((acc: any, item: any) => {
          const type = item.transactionType || "Outros";
          acc[type] = (acc[type] || 0) + item.amount;
          return acc;
        }, {});

        // Extrair rótulos e séries
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
    labels: chartData.labels,
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: (value: number) => `R$ ${value.toFixed(2)}`,
      },
    },
    
  };

  return (
    <div>
      <Chart options={options} series={chartData.series} type="pie" width="380" />
    </div>
  );
};

export default PieChart;
