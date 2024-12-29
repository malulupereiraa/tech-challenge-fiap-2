import styled from "styled-components";

export const CardCotacoesContainer = styled.div`
  width: 100%;
  max-width: 240px;
  height: auto;
  gap: 0px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #8b8b8b;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 160px;
  }
`;


export const CardInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  align-items: center;
  width: 100%;
  overflow: hidden; 

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const MoedaContainer = styled.div` 
    min-width: 40px;
    min-height: 40px;
    border-radius: 8px;
    background: #47A13880;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;

`;


export const TitleMoeda = styled.span`
  font-family: Inter
  font-size: 8px;
  color: ${(props) => props.theme.themeColor.dark};
  font-weight: 500;
  line-height: 15px;
`

export const TitleValue = styled.span` 
    font-family: Inter;
    font-size: 22px;
    font-weight: 600;
    line-height: 14.52px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: ${(props) => props.theme.themeColor.dark};
    margin-top: 4px;

`
export const VariacaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;


export const VariacaoTitle = styled.div`
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 8.47px;
    text-align: center;
    color: #004D61;
`
