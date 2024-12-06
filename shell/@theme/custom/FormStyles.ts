// Form.Label
import Link from "next/link";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormLabelStrong = styled(Form.Label)`
  font-weight: bold;
`;

export const FormCheckCustom = styled(Form.Check)`
  label {
    font-size: 13px;
  }
  .form-check-input {
    border-color: ${(props) => props.theme.themeColor.success};
  }
  .form-check-input:checked {
    background-color: ${(props) => props.theme.themeColor.success};
    border-color: ${(props) => props.theme.themeColor.success};
  }
`;

export const PStrong = styled.p`
  font-weight: bold;
`;

export const LinkCustom = styled(Link)`
  color: ${(props) => props.theme.themeColor.success};
`;

export const H1Bold = styled.h1`
  color: ${(props) => props.theme.themeColor.dark};
  line-height: 33.89px;
`;

export const H1BoldError = styled.h1`
  color: ${(props) => props.theme.themeColor.dark};
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
`;

export const H3Bold = styled.h3`
  color: ${(props) => props.theme.themeColor.dark};
  line-height: 33.89px;
`;

export const H3BoldError = styled.h3`
  color: ${(props) => props.theme.themeColor.dark};
  line-height: 19.2px;
  font-size: 16px;
  font-weight: 400;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.themeColor.error};
  font-size: 12px;
`;
