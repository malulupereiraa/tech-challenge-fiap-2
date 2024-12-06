import type { Metadata } from "next";

import { Row } from "react-bootstrap";
import { Suspense } from "react";
import StyledHome from "../home/styledHome";
import Loading from "./loading";
import TransactionsHeader from "@/@core/components/ui/header-transactions/TransactionsHeader";
import Menu from "@/@core/components/ui/menu/Menu";

export const metadata: Metadata = {
  title: "Bytebank - Início",
  description: "Tech Challenge FIAP",
  icons: {
    icon: "icon.svg",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <>
        <TransactionsHeader name="Hermelinda" />
        <Row>
          <div className="col-xs-12 col-sm-12 col-md-3 col-xl-2">
            <div className="d-flex flex-column align-items-center align-items-sm-start h-100">
              <Menu />
            </div>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="col-xs-12 col-sm-12 col-md-9 col-xl-10 py-3">
              <StyledHome>{children}</StyledHome>
            </div>
          </Suspense>
        </Row>
      </>
    );
}
