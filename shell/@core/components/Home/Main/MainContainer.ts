import styled from "styled-components";


export const BackgroundHome = styled.div`
  background: linear-gradient(180deg, #004D61 0%, #FFFFFF 100%);
  h1 {
    font-size: ${({ theme }) => theme.themeFonts.textHomeMain.fontSize};
    fontFamily: ${({ theme }) => theme.themeFonts.textHomeMain.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.textHomeMain.lineHeight}; 
    text-align: ${({ theme }) => theme.themeFonts.textHomeMain.textAlign};
  }


  .main_image {
    width: 100%;
    height: 100%;
  }

  .advantage_image {
      width: 60px;
      height: 50px;
  }

  .section_title {
      fontFamily: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
      fontWeight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
      lineHeight: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight};
      color: ${({ theme }) => theme.themeColor.dark};
      fontSize: ${({ theme }) => theme.font_size.fontsizexlarge};
  }

  .advantage_title {
    color: ${({ theme }) => theme.themeColor.success};
  }
  
  .advantage_text {
      color: ${({ theme }) => theme.themeColor.grey};
  }

   `;
