import styled from "styled-components";


export const HeaderStyler = styled.div` 

 .header_bg{
      background: ${({ theme }) => theme.themeColor.dark};
  }

  .header_title {
    font-family: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
    font-size: ${({ theme }) => theme.themeFonts.headerSemibold.fontSize};
    font-weight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight}; 
    color: ${({ theme }) => theme.themeColor.success};
   }

   .header_img {
      width: 145.69px;
      height: 32px;
   }
`
