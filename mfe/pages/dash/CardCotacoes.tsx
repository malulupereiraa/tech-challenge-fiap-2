import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const GraficoCotacao = () => {
    const [dados, setDados] = useState([]);
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState<{ name: string; data: { x: Date; y: number }[] }[]>([]);

    useEffect(() => {
        // Função para formatar os dados e preparar o gráfico
        const fetchDados = async () => {
            try {
                // Simulando a chamada da API
                const response = await fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/60");
                const data = await response.json();

                // Extraindo os dados e preparando para o gráfico
                const graficoData = data.map((item: { timestamp: number; bid: string; }) => {
                    return {
                        x: new Date(item.timestamp * 1000),
                        y: parseFloat(item.bid),
                    };
                });

                setDados(graficoData);

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
                        type: "datetime", // Usando datetime no eixo X
                    },
                    yaxis: {
                        title: {
                            text: "Cotação USD/BRL",
                        },
                    },
                    title: {
                        text: "Cotação do Dólar em Relação ao Real",
                        align: "left",
                    },
                });

                // Definindo os dados a serem exibidos no gráfico
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
        <div>
            <ApexCharts options={options} series={series} type="line" width={1200} height={400} />
        </div>
    );
};

export default GraficoCotacao;
