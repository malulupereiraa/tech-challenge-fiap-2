import React from "react";
import DonutChart from "./dash/DonutGraph";
import BarChart from "./dash/BarGraph";
import GraficoCotacao from "./dash/CardCotacoes";
export default function Home() {
  return (
    <>
      {/* <div className="d-flex flex-row align-items-center">
        <div style={{ width: "400px" }}>
          <DonutChart></DonutChart>
        </div>
        <div style={{ width: "400px" }}>
          <BarChart></BarChart>
        </div>
      </div> */}

      <div className="d-flex flex-row align-items-center">
        <div style={{ width: "1050px" }}>
          <GraficoCotacao />
        </div>
      </div>

    </>
  );
}
