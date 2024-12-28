import { CardCotacoesStyle, ContentContainer, ContentInfo, GraficoContainer, MoedaContainer, TitleCifrao, TitleMoeda, TitleValue, VariacaoContainer, VariacaoTitle } from "@/@theme/custom/CardCotacoes";
import Image from "next/image";
import { ReactNode } from "react";

// Função para exibir cada card com as cotações
interface CardCotacoesProps {
    moeda: ReactNode;
    nome: string;
    cotacao: number;
    variacao: number;
}

const CardCotacoes = ({ moeda, nome, cotacao, variacao }: CardCotacoesProps) => {
    return (
        <CardCotacoesStyle>
            <ContentContainer >
                <MoedaContainer>
                    <TitleCifrao>{moeda}</TitleCifrao>
                </MoedaContainer>

                <ContentInfo>
                    <TitleMoeda>{nome}</TitleMoeda>
                    <TitleValue>{`${cotacao}`}</TitleValue>
                </ContentInfo>


                <VariacaoContainer>
                    <Image
                        src="cotacaoGrafico.svg"
                        alt="Seta para cima"
                        width={50}
                        height={50}
                    />
                    <VariacaoTitle>{variacao}%</VariacaoTitle>
                </VariacaoContainer>
       
            </ContentContainer>

            <GraficoContainer>
                <Image
                    src="grafico.svg"
                    alt="Gráfico"
                    width={150}
                    height={70}
                    className="rounded"
                />
                </GraficoContainer>

        </CardCotacoesStyle>
        // <div className="border border-secondary p-2 rounded" style={{backgroundColor: 'white'}}>
        //     <div className="d-flex flex-row align-items-center">
        //         <div
        //             style={{
        //                 width: "34px",
        //                 height: "34px",
        //                 borderRadius: "8px",
        //                 backgroundColor: "#47A13880",
        //             }}
        //             className="d-flex justify-content-center align-items-center mr-2"
        //         >
        //             <span className="text-white font-weight-bold">{moeda}</span>
        //         </div>
        //         <div className="d-flex flex-column">
        //             <span className="d-block font-weight-bold">{nome}</span>
        //             <span className="d-block text-dark font-weight-bold">{`R$ ${cotacao}`}</span>
        //         </div>
        //         <div>
        //             <Image
        //                 src="cotacaoGrafico.svg"
        //                 alt="Seta para cima"
        //                 width={40}
        //                 height={40}
        //             />
        //             <span>{variacao}%</span>
        //         </div>
        //     </div>
        //     <Image
        //         src="grafico.svg"
        //         alt="Gráfico"
        //         width={146.5}
        //         height={38.21}
        //         className="rounded"
        //     />
        // </div>
    );
};

export default CardCotacoes;
