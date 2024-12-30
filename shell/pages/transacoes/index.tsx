import type { Metadata } from "next";

import { Col, Container, Row } from "react-bootstrap";
import { Suspense } from "react";
import Loading from "./loading";
import StyledHome from "../home/styledHome";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StyledComponentsRegistry from "../../@core/lib/registry";
import { StyledRoot } from "../../@theme/styledRoot";
import Transacoes from "./page";
import TransactionsHeader from "../../@core/components/ui/header-transactions/TransactionsHeader";
import Menu from "../../@core/components/ui/menu/Menu";
import { signOut, useSession } from "next-auth/react";
import { FloatButtonRow } from "@/@theme/custom/FloatButton";
import { Fab, Tooltip } from "@mui/material";
import { IoIosLogOut } from "react-icons/io";
import router from "next/router";

export const metadata: Metadata = {
  title: "Bytebank - Transações",
  description: "Tech Challenge FIAP",
  icons: {
    icon: "icon.svg",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout() {
  const { data: session } = useSession();
  console.log(session); // é possível usar gerenciador de status aqui, para guardar o token e o nome do usuário logado
  const logout = () => {
    router.push("/");
    signOut({
      redirect: false,
    });
  };

  return (
    <Container fluid>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <StyledRoot>
            <Suspense fallback={<Loading />}>
              <TransactionsHeader
                name={session && session.user.result.username}
              />
              <Row>
                <div className="col-xs-12 col-sm-12 col-md-3 col-xl-2">
                  <div className="d-flex flex-column align-items-center align-items-sm-start h-100">
                    <Menu />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-xl-10 py-3">
                  <StyledHome>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Transacoes />
                    </Col>
                  </StyledHome>
                  <FloatButtonRow justify="end">
                    <Tooltip title="Sair do Sistema">
                      <Fab
                        size="small"
                        color="primary"
                        aria-label="sign-out"
                        onClick={logout}
                      >
                        <IoIosLogOut />
                      </Fab>
                    </Tooltip>
                  </FloatButtonRow>
                </div>
              </Row>
            </Suspense>
          </StyledRoot>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </Container>
  );
}
