/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Col, Spinner } from "react-bootstrap";

import { Box, Typography } from "@mui/material";
import { CreditCardProps } from "../../props/credit-card";
import {
  Back,
  Card,
  CardHolder,
  CardLimitBar,
  CardNumber,
  Chip,
  End,
  Flip,
  Front,
  Investor,
  LabelLimit,
  LabelLimitValue,
  Limit,
  Logo,
  Master,
  Wave,
} from "./CreditCardStyle";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "#ffffff" }}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const CreditCardTCF: React.FC<CreditCardProps> = ({ user, transactions }) => {
  const [usedValue, setUsedValue] = useState<number | undefined>(0);
  const [limitAvailable, setLimitAvailable] = useState<number | undefined>(
    1000
  );
  console.log(user);
  console.log(transactions);
  const handleUsedValue = () => {
    if (transactions && transactions.length > 0) {
      const usedValue = transactions.reduce((acc: number, transaction: any) => {
        if (transaction.transactionType === "credito") {
          return acc + transaction.amount;
        }
        return acc;
      }, 0);
      setUsedValue(usedValue);
      setLimitAvailable((usedValue * 100) / 1000);
    } else {
      setLimitAvailable(100);
    }
  };
  useEffect(() => {
    handleUsedValue();
  }, [handleUsedValue, transactions]);
  return (
    <>
      <div className="center">
        <Card className="c-card">
          <Flip className="flip">
            <Front className="front">
              <Logo
                className="logo"
                width="30"
                height="30"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6312 20.0301H0.155914V26.8007H13.6312V20.0301Z"
                  fill="white"
                />
                <path
                  d="M20.3226 6.53687H6.84735V20.0748H20.3226V6.53687Z"
                  fill="white"
                />
                <path d="M6.80286 0H0.248352V6.49216H6.80286V0Z" fill="white" />
                <path d="M26.7368 0H20.2747V6.49216H26.7368V0Z" fill="white" />
              </Logo>

              <Investor className="investor">Bytebank</Investor>
              <Chip className="chip">
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-main"></div>
              </Chip>
              <Wave
                className="wave"
                viewBox="0 3.71 26.959 38.787"
                width="26.959"
                height="38.787"
                fill="white"
              >
                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
              </Wave>
              <Limit>
                <LabelLimit>Limite:</LabelLimit>
                <LabelLimitValue>
                  R${usedValue ? usedValue : "0,00"}/ R$ 1.000,00
                </LabelLimitValue>
                <CardLimitBar>
                  <LinearProgressWithLabel
                    value={
                      typeof limitAvailable === "number" ? limitAvailable : 0
                    }
                  />
                </CardLimitBar>
              </Limit>
              <CardNumber className="card-number">
                <div className="section">5453</div>
                <div className="section">2000</div>
                <div className="section">0000</div>
                <div className="section">0000</div>
              </CardNumber>
              <End className="end">
                <span className="end-text">exp. end:</span>
                <span className="end-date">11/32</span>
              </End>
              <CardHolder className="card-holder">
                {user ? user.username : "HERMELINDA SILVA"}
              </CardHolder>
              <Master className="master">
                <div className="circle master-red"></div>
                <div className="circle master-yellow"></div>
              </Master>
            </Front>
            <Back className="back">
              <div className="strip-black"></div>
              <div className="ccv">
                <label>ccv</label>
                <div>123</div>
              </div>
              <div className="terms">
                <p>
                  This card is property of Monzo Bank, Wonderland. Misuse is
                  criminal offence. If found, please return to Monzo Bank or to
                  the nearest bank with MasterCard logo.
                </p>
                <p>Use of this card is subject to the credit card agreement.</p>
              </div>
            </Back>
          </Flip>
        </Card>
      </div>
    </>
  );
};
export default CreditCardTCF;
