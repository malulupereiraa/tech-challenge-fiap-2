"use client";
import Footer from "@/@core/components/Home/Footer";
import Header from "@/@core/components/Home/Header";
import Main from "@/@core/components/Home/Main";
import { Row } from "react-bootstrap";


export default function HomePage() {
  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />
    </Row>
  );
}
