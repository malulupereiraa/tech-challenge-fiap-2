/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col } from "react-bootstrap";
import { Suspense, useEffect, useState } from "react";
import HomeStatement from "../home/page.home-statement";

import { Container } from "react-bootstrap";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Loading from "../home/loading";
import HomeTeste from "./pageteste";
import StyledComponentsRegistry from "../../@core/lib/registry";
import { StyledRoot } from "../../@theme/styledRoot";

export default function LayoutTeste () {

  return (
    <Container fluid>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <StyledRoot>
            <Suspense fallback={<Loading />}>
              <HomeTeste />
            </Suspense>
          </StyledRoot>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </Container>
  );
}
