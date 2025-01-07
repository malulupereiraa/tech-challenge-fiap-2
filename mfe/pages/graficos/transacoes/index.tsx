
import React from "react";
import DonutChart from "./donut";
import BarChart from "./bar";

export default function TransacoesGraficos() {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                <div style={{ flex: "1 1 100%", maxWidth: "100%" }}>

                    <DonutChart></DonutChart>

                    <BarChart></BarChart>

                </div>
            </div>

        </>
    );
}



