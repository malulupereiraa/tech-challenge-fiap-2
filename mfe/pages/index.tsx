import React from "react";
import DonutChart from "./dash/DonutGraph";
import BarChart from "./dash/BarGraph";
import GraficoCotacao from "./dash/CardCotacoes";
import ExchangeChart from "./dash/ExchangeChart";
import AreaChart from "./dash/AreaChart";
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
        <div>
          {/* <GraficoCotacao /> */}
          {/* <ExchangeChart /> */}
          <AreaChart />
        </div>
        <div>
        
        </div>
      </div>

    </>
  );
}
