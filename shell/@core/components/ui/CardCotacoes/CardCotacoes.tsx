import { CardCotacoesContainer, CardInfos, ContentInfo, MoedaContainer, TitleMoeda, TitleValue, VariacaoContainer, VariacaoTitle } from "@/@theme/custom/CardCotacoes";
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
        <CardCotacoesContainer>
            <CardInfos>
                <MoedaContainer>{moeda}</MoedaContainer>
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

            </CardInfos>
            <div>
                <Image
                    src="grafico.svg"
                    alt="Gráfico"
                    width={250}
                    height={50}
                    className="rounded"
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
            </div>
        </CardCotacoesContainer>
    );
};

export default CardCotacoes;
