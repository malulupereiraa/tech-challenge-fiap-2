import React from "react";
import DonutChart from "./dash/DonutGraph";
import BarChart from "./dash/BarGraph";
export default function Home() {
  return (
    <>
      Olá! Eu sou o app NEXTJS remoto.
      <DonutChart></DonutChart>
      <BarChart></BarChart>
    </>
  );
}
