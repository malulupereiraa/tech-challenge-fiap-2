import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "react-bootstrap";
import AppRouterCacheProvider from "@mui/material-nextjs/v13-appRouter/appRouterV13";
import StyledComponentsRegistry from "@/@core/lib/registry";
import { StyledRoot } from "@/@theme/styledRoot";
import { Suspense } from "react";
import Loading from "./loading";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <Container fluid>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <StyledRoot>
              <Suspense fallback={<Loading />}>
                <SessionProvider session={session}>
                  <Component {...pageProps} />
                </SessionProvider>
              </Suspense>
            </StyledRoot>
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </Container>
    </Provider>
  );
}
