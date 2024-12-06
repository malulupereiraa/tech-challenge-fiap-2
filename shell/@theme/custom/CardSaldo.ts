import styled from "styled-components";

export const CardSaldo = styled.div`
  display: grid;
  width: 100%;
  height: 402px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.themeColor.primary};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 24px;
  grid-template-columns: 60% 35%;
  grid-template-rows: 45px auto;
  gap: 12px 100px;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    gap: 12px;
    padding: 16px;
  }

  @media (max-width: 576px) {
    height: auto;
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 12px;
  }
`;

export const TitleCard = styled.h2`
  font-size: ${(props) => props.theme.font_size.fontsizemdlarge};
  font-weight: 600;
  color: ${(props) => props.theme.themeColor.white};
  font-family: ${({ theme }) => theme.themeFonts.fontFamily};

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.theme.font_size.fontsizlarge}; /* Reduz a fonte em telas menores */
  }

  @media (max-width: 576px) {
    font-size: ${(props) =>
      props.theme.font_size
        .fontsizesmall}; /* Ajuste adicional em telas pequenas */
  }
`;

export const DateInfoCard = styled.p`
  font-size: ${(props) => props.theme.font_size.fontsizesmall};
  font-family: ${({ theme }) => theme.themeFonts.fontFamily};
  color: ${(props) => props.theme.themeColor.white};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.font_size.fontsizesmall};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: 1;
  grid-row: 1;
`;

export const ContentBalanceContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: start;
  grid-column: 2;
  grid-row: 2;
`;

export const BalanceRow = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  svg {
    color: ${(props) => props.theme.themeColor.secondary};
    cursor: pointer;
  }
`;

export const DividerBalance = styled.hr`
  width: 100%;
  height: 5px;
  border: none;
  border-top: 1px solid ${(props) => props.theme.themeColor.secondary};
  margin: 6px 0;
  opacity: 0.5;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;

export const TitleBalance = styled.p`
  color: ${(props) => props.theme.themeColor.white};
  font-weight: 600;
  margin: 0 !important;
  font-family: ${({ theme }) => theme.themeFonts.fontFamily};
  font-size: ${(props) => props.theme.font_size.fontsizelarge};
`;

export const SubTitleBalance = styled.p`
  font-family: ${({ theme }) => theme.themeFonts.fontFamily};
  font-size: ${(props) => props.theme.font_size.fontsizemedium};
  color: ${(props) => props.theme.themeColor.white};
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.font_size.fontsizesmall};
  }
`;

export const ValueBalance = styled.p`
  font-family: ${({ theme }) => theme.themeFonts.fontFamily};
  font-size: ${(props) => props.theme.font_size.fontsizemdlarge};
  color: ${(props) => props.theme.themeColor.white};
`;

export const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
