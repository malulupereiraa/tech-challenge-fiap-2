import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StyledComponentsRegistry from "@/@core/lib/registry";
import { StyledRoot } from "@/@theme/styledRoot";
import Loading from "@/pages/loading";

const AppComponent = dynamic(() => import("remoteNextApp/app"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home()  {
  return (
    <Container fluid>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <StyledRoot>
            <Suspense fallback={<Loading />}>
              {/* <HomePage /> */}
                <div>
                  Abaixo Renderizar o APP Remote
                </div>
                <div>
                  <AppComponent />
                </div>
            </Suspense>
          </StyledRoot>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </Container>
  );
}
