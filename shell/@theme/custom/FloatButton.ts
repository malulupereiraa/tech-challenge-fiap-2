import { Fab } from "@mui/material";
import { Row } from "react-bootstrap";
import styled from "styled-components";

export const FloatButtonRow = styled(Row)`
  position: sticky;
  right: 16px;
  bottom: 0px;
  justify-content: end;
`;
export const FloatButton = styled(Fab)`
  button {
    background-color: ${(props) => props.theme.themeColor.primary};
    color: ${(props) => props.theme.themeColor.white};
  }
`;
