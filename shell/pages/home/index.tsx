/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";

import { Suspense, useEffect } from "react";
import StyledHome from "../home/styledHome";
import Loading from "./loading";
import TransactionsHeader from "../../@core/components/ui/header-transactions/TransactionsHeader";
import Menu from "../../@core/components/ui/menu/Menu";
import Home from "./page";
import { signOut, useSession } from "next-auth/react";
import { Fab, Tooltip } from "@mui/material";
import { FloatButtonRow } from "@/@theme/custom/FloatButton";
import { IoIosLogOut } from "react-icons/io";
import router from "next/router";
import { Row } from "react-bootstrap";
import { returnUserData } from "../../store/user/action";
import { useSelector, useDispatch } from "react-redux";

export const metadata: Metadata = {
  title: "Bytebank - Início",
  description: "Tech Challenge FIAP",
  icons: {
    icon: "icon.svg",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const logout = () => {
    router.push("/");
    signOut({
      redirect: false,
    });
  };
  useEffect(() => {
    if (session) {
      dispatch(returnUserData(session.user.result));
    }
  }, [session]);

  return (
    <>
      <TransactionsHeader name={user && user.username} />
      <Row>
        <div className="col-xs-12 col-sm-12 col-md-3 col-xl-2">
          <div className="d-flex flex-column align-items-center align-items-sm-start h-100">
            <Menu />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <div className="col-xs-12 col-sm-12 col-md-9 col-xl-10 py-3">
            <StyledHome>
              <Home />
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
        </Suspense>
      </Row>
    </>
  );
}
