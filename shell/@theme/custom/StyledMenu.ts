import styled from "styled-components";

const StyledMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.themeColor.white};
 
    a {
            color: ${(props) => props.theme.themeColor.primary};
            text-decoration: none; 
      
            &:hover {
                font-weight: 700;
                color: ${(props) => props.theme.themeColor.primary};
                border-bottom: 1px solid ${(props) =>
                  props.theme.themeColor.primary};
            }
            @media (max-width: 360px), (min-width: 721px) {
                &.itensMenuBorder {
                    border-bottom: 1px solid ${(props) =>
                      props.theme.themeColor.primary};
                }
                
                &.itensMenuBorder:last-child {
                    border-bottom: 0;
                }
            }
   }

    .menuContainer {
        display: flex;
        justify-content: center;
        width: 180px;
        height: 100vh;
        text-align: center;
        padding: 5px;
        margin: 0;
        
        border-radius: 8px;

    }

    .itensMenu {       
        display: flex;
        padding: 0 20px 0 20px;
        font-size: 16px;
        flex-direction: column;
        font-weight: 400;
    }


    .itensMenu a {
        text-decoration: none;
        padding: 10px 0;
        margin: 0 2%;
      
    }
   
 
    .openButton{
            background-color: ${(props) => props.theme.themeColor.primary};
            color: ${(props) => props.theme.themeColor.secondary};
        }

 @media (min-width: 361px) and (max-width: 720px) {
    width: 100%;

        .menuContainer {
            align-items: center;
            padding: 5px 20px 0 20px;
            width: 100%;
            min-height: 60px;
            max-height: 120px;
            text-align: center;
            background-color: ${(props) =>
              props.theme.themeColor.backgroundBase};
            border-radius: 0px;
        }

        .itensMenu {
            flex-direction: row;
            font-size: 16px;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            background-color: transparent!important;    
        }

    }



 @media(max-width: 360px) {
    background-color: transparent;
    justify-content: flex-start;
        .row {
            position: absolute;
        }

        .menuContainer {
            height: 285px;
            justify-content: center;
            padding-top: 0;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${(props) => props.theme.themeColor.white};
            border-radius: 0px;
            margin-top: -47px;
            margin-left: -23px;
            z-index: 10;
        }
        

        .iconMenuButton {
            cursor: pointer;
            border: 0;
            padding-left: 15px;
            width: 40px;
            height: 40px;
        }
    }
        .iconCloseButton {
            padding: 0;
            width: 25px;
            height: 25px;
            position: absolute;
            top: 10px;
            right: 10px;
            color: ${(props) => props.theme.themeColor.secondary};
            background-color: transparent;
        }

        .itensMenu {
            background-color: ${(props) => props.theme.themeColor.white};
        }
    }
    `;

export default StyledMenu;
