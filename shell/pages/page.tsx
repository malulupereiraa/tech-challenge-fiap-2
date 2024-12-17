"use client";
import Footer from "@/@core/components/Home/Footer";
import Header from "@/@core/components/Home/Header";
import Main from "@/@core/components/Home/Main";
import { Row } from "react-bootstrap";

//Redux
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function HomePage() {
  return (
    <Row style={{ overflowX: "hidden" }}>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </Row>
  );
}
