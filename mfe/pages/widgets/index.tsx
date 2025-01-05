/* eslint-disable @typescript-eslint/no-explicit-any */
import WidgetCardTCF from "@/@core/components/Widgets";
import React from "react";
interface WidgetsProps {
  loading?: boolean;
  userSession?: any;
}

export default function Widgets({ loading, userSession }: WidgetsProps) {
  return <WidgetCardTCF loading={loading} userSession={userSession} />;
}
