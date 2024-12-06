import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StyledComponentsRegistry from "../@core/lib/registry";
import { StyledRoot } from "../@theme/styledRoot";

const AppComponent = dynamic(() => import("remoteNextApp/app"), {  
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <Container fluid>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <StyledRoot>
            <Suspense fallback={'123loading'}>
              {children}
              <React.Suspense fallback="Loading Remote Component...">
                <div>
                  Abaixo Renderizar o APP Remote
                </div>
                <div>
                  <AppComponent />
                </div>
              </React.Suspense>
            </Suspense>
          </StyledRoot>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </Container>
  );
}
