import styled from "styled-components";

export const FooterStyler = styled.div` 
  .footer_title {
    font-family: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
    font-size: ${({ theme }) => theme.themeFonts.headerSemibold.fontSize};
    font-weight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight}; 
    color: ${({ theme }) => theme.themeColor.white};
   }

   .footer_ul {
    color: ${({ theme }) => theme.themeColor.white};
    fontSize: ${({ theme }) => theme.font_size.fontsizemedium};
   }

   .footer_img_logo {
       width: 29px;
      height: 29px;
   }

   .footer_img {
            width:145.69px;
      height: 32;
   }
`
