import styled from "styled-components";

export const BtnTableView = styled.span`
  :hover {
    color: ${(props) => props.theme.themeColor.primary};
    cursor: pointer;
  }
`;

export const BtnTableEdit = styled.span`
  :hover {
    color: ${(props) => props.theme.themeColor.yellow};
    cursor: pointer;
  }
`;

export const BtnTableDelete = styled.span`
  :hover {
    color: ${(props) => props.theme.themeColor.error};
    cursor: pointer;
  }
`;
