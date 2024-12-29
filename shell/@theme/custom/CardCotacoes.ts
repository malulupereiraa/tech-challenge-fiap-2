import styled from "styled-components";

export const CardCotacoesContainer = styled.div` 
  width: 240px;
  height: 120px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
  background: #FFFFFF;
  border: 1px solid #8B8B8B;
  display: flex;
  flex-direction: column;
  max-width: 240px;
  max-height: 120px;

    @media (max-width: 768px) {
    width: 200px;
    height: 100px;
    max-width: 200px;
    max-height: 100px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 80px;
    max-width: 160px;
    max-height: 80px;
  }
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 8px;
  align-items: center;
`
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
`

export const VariacaoTitle = styled.div`
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 8.47px;
    text-align: center;
    color: #004D61;
`


// export const CardCotacoesStyle = styled.div`
//   display: grid;
//   width: 100%;
//   height: 102px;
  
//   border: 1px solid #8B8B8B;
//   border-radius: 8px;
//   background-color: ${(props) => props.theme.themeColor.white};
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   margin: 0 auto;
//   padding: 15px;
//   grid-template-rows: auto auto; /* Define duas linhas no grid */
//   gap: 12px; /* Espaçamento entre as linhas */
//   @media (max-width: 768px) {
//     height: auto;
//     grid-template-columns: 1fr;
//     grid-template-rows: max-content max-content;
//     gap: 12px;
//     padding: 16px;
//   }

//   @media (max-width: 576px) {
//     height: auto;
//     grid-template-columns: 1fr;
//     gap: 8px;
//     padding: 12px;
//   }
// `;

// export const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   grid-column: 1;
//   grid-row: 1;
//   align-content: space-between ;
//   gap: 16px;
// `;

// export const MoedaContainer = styled.div` 
//     min-width: 40px;
//     min-height: 40px;
//     border-radius: 8px;
//     background: #47A13880;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     align-self: flex-start;
// `;
// export const TitleCifrao = styled.p`
//   color: #004D61;
//   margin: 0 !important;
//   font-family: ${({ theme }) => theme.themeFonts.fontFamily};
//   font-size: ${(props) => props.theme.font_size.fontsizelarge};
//   font-family: Inter;
//   font-size: 17px;
//   font-weight: 400;
//   line-height: 20.57px;
// `;

// export const ContentInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   grid-column: 2;
//   grid-row: 1;
// `;

// export const TitleMoeda = styled.span`
//   font-family: Inter
//   font-size: 11px;
//   color: ${(props) => props.theme.themeColor.dark};
//   font-weight: 600;
//   line-height: 13.33px;

//   @media (max-width: 768px) {
//     font-size: ${(props) => props.theme.font_size.fontsizesmall};
//   }
// `

// export const TitleValue = styled.span` 
//     font-family: Inter;
//     font-size: 22px;
//     font-weight: 800;
//     line-height: 14.52px;
//     text-align: left;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;
//     color: ${(props) => props.theme.themeColor.dark};
//     margin-top: 4px;

// `

// export const VariacaoContainer = styled.div` 
//     display: flex;
//     flex-direction: row;
// `

// export const VariacaoTitle = styled.div`
//     font-family: Inter;
//     font-size: 15px;
//     font-weight: 400;
//     line-height: 8.47px;
//     text-align: center;
//     text-underline-position: from-font;
//     text-decoration-skip-ink: none;
//     color: #004D61;
// `
// export const GraficoContainer = styled.div`
//     grid-row: 2; 
//     display: flex;
//     width: 100%;
//     justify-content: center; 
//     align-items: center;
//     margin-top: -38px
// `;
