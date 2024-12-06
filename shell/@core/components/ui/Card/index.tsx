/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Row } from "react-bootstrap";
import {
  CardContentCustom,
  CardContentBodyCustom,
  CardTitleCustom,
} from "../../../../@theme/custom/CardTCF";
import { CardProps } from "../../../props/card";

const CardTCF: React.FC<CardProps> = ({ title, body, footer }) => {
  return (
    <>
      <CardContentCustom>
        <img
          src="/pixelstopright.svg"
          className="top-right"
          alt="Border Top Right"
        />
        <img
          src="/pixelsbottomleft.svg"
          className="bottom-left"
          alt="Border Bottom Left"
        />
        <CardContentBodyCustom>
          <CardTitleCustom className="mb-4">{title}</CardTitleCustom>
          {body !== undefined && body}
          {footer !== undefined && (
            <Row className="text-end">
              <Col xs={12} sm={12} md={12} lg={12}>
                {footer}
              </Col>
            </Row>
          )}
        </CardContentBodyCustom>
      </CardContentCustom>
    </>
  );
};
export default CardTCF;
