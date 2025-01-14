
import React from "react";
import DonutChart from "./donut";
import BarChart from "./bar";

export default function TransacoesGraficos({ token, clientId }: { token: string; clientId: string }): JSX.Element {
    return (
        <>  
        
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                <DonutChart token={token} clientId={clientId} ></DonutChart>
                <BarChart token={token} clientId={clientId}></BarChart>
            </div>

        </>
    );
}


