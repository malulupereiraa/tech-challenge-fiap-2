"use client";

import { ContainerLoadingSystem } from "@/@theme/custom/LoadingSystemStyle";
import { Col, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <ContainerLoadingSystem>
      <Col className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    </ContainerLoadingSystem>
  );
}
