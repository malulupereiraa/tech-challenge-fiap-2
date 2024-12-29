import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const GraficoCotacao = () => {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState<{ name: string; data: { x: string; y: number }[] }[]>([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                // Chamando a API
                const response = await fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/120");
                const data = await response.json();

                // Processando e agrupando os dados por mês
                const groupedData: { [month: string]: number[] } = {};

                data.forEach((item: { timestamp: number; bid: string }) => {
                    const date = new Date(item.timestamp * 1000);
                    const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`; // Formato: YYYY-MM

                    if (!groupedData[month]) {
                        groupedData[month] = [];
                    }
                    groupedData[month].push(parseFloat(item.bid));
                });

                // Calculando a média de cada mês
                let graficoData = Object.entries(groupedData).map(([month, values]) => {
                    const avg = values.reduce((acc, val) => acc + val, 0) / values.length;
                    return {
                        x: month, // Agrupado por mês
                        y: avg,
                    };
                });

                // Ordenando os meses do menor para o maior
                graficoData = graficoData.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());

                // Configurações do gráfico
                setOptions({
                    chart: {
                        id: "grafico-cotacao",
                        type: "line",
                        zoom: {
                            enabled: false,
                        },
                    },
                    xaxis: {
                        type: "category",
                        title: {
                            text: "Mês",
                        },
                    },
                    yaxis: {
                        
                        title: {
                            text: "Cotação USD/BRL",
                        },
                        labels: {
                            formatter: (value: number) => value.toFixed(2),
                        },
                    },
                    colors: ["#47A138"], 
                    title: {
                        text: "Cotação do Dólar (Agrupado por Mês)",
                        align: "left",
                    },
                });

                // Atualizando a série de dados
                setSeries([
                    {
                        name: "Dólar",
                        data: graficoData,
                    },
                ]);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchDados();
    }, []);

    return (
        <div style={{ background: "#fff", padding: "20px", borderRadius: "5px"}}>
            <ApexCharts options={options} series={series} type="line" width={980} height={300} />
        </div>
    );
};

export default GraficoCotacao;
