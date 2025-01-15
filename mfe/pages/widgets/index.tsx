/* eslint-disable @typescript-eslint/no-explicit-any */
import WidgetCardTCF from "@/@core/components/Widgets";
import React from "react";
interface WidgetsProps {
  loading?: boolean;
  userSession?: any;
  transactions?: any;
  setWidgets: (value: any) => void;
}

export default function Widgets({
  loading,
  userSession,
  transactions,
  setWidgets,
}: WidgetsProps) {
  return (
    <WidgetCardTCF
      loading={loading}
      userSession={userSession}
      transactions={transactions}
      setWidgets={setWidgets}
    />
  );
}
