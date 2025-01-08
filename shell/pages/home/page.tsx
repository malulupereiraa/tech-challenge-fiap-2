/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col, Spinner } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import HomeStatement from "./page.home-statement";
import { Transaction } from "../../@core/types/transaction";
import ToastTCF from "../../@core/components/Toast";
import CardSaldoComponent from "../../@core/components/ui/CardSaldo/CardSaldo";
import CardTCF from "../../@core/components/ui/Card";
import TransacaoForm from "../../@core/components/forms/Transacao";
import { jwtDecode } from "jwt-decode";
import useAxiosAuth from "@/@core/hooks/useAxiosAuth";
import transactionsService from "@/@core/services/api-node/transactions.service";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

export default function Home() {
  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  const [reloadStatement, setReloadStatement] = useState<boolean>(false);
  const [loadWidgets, setLoadWidgets] = useState<boolean>(false);
  const [balance, setBalance] = useState(0);
  const axiosHookHandler: any = useAxiosAuth();
  const { user } = useSelector((state: any) => state.user);

  const handleTransacaoForm = useCallback(
    async (e: any, formData: any) => {
      if (user.token === "") return;
      const token: string = user.token;
      const decodedUser: any = jwtDecode(token);
      const formattedFormData: any = {
        ...formData,
        userId: decodedUser.userId,
        description: "Transação Realizada na Home",
      };
      await transactionsService
        .createTransaction(axiosHookHandler, formattedFormData)
        .then(() => {
          setShowToast(true);
          setMessage("Transação Realizada com Sucesso");
          setIcon("success");
          setToastTitle("Sucesso!");
          setReloadStatement(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        })
        .catch((error: any) => {
          setShowToast(true);
          setMessage(error.response.data.message);
          setIcon("error");
          setToastTitle("Erro!");
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          console.error(error.response.data.message);
        });

      // CÓDIGO DA FASE 1 - Para efeito comparativo
      // await createTransaction(formData)
      //   .then(() => {
      //     setShowToast(true);
      //     setMessage("Transação Realizada com Sucesso");
      //     setIcon("success");
      //     setToastTitle("Sucesso!");
      //     setReloadStatement(true);
      //     setTimeout(() => {
      //       setShowToast(false);
      //     }, 3000);
      //   })
      //   .catch((error: any) => {
      //     setShowToast(true);
      //     setMessage(error);
      //     setIcon("error");
      //     setToastTitle("Erro!");
      //     setTimeout(() => {
      //       setShowToast(false);
      //     }, 3000);
      //     console.error(error);
      //   });
    },
    [user]
  );

  useEffect(() => {
    if (reloadStatement === true) setReloadStatement(false);
  }, [reloadStatement]);

  const calculateBalance = (transactions: []) => {
    if (transactions === undefined) return;
    setBalance((_) => {
      return transactions.reduce((sum, transaction: Transaction) => {
        const amountMultiplier =
          transaction.transactionType == "deposito" ? 1 : -1;

        return sum + transaction.amount * amountMultiplier;
      }, 0);
    });
  };

  // @ts-ignore
  const WidgetsComponent = dynamic(() => import("remoteNextApp/widgets"), {
    ssr: false,
    loading: () => (
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className=" d-flex justify-content-center"
        >
          <Spinner
            animation="border"
            role="status"
            variant="secondary"
            size="sm"
          />
        </Col>
      </Row>
    ),
  });

  const WidgetComponentCaller = ({
    loadingComponent,
    userSession,
  }: {
    loadingComponent: boolean;
    userSession: any;
  }) => {
    return (
      // @ts-ignore
      <WidgetsComponent loading={loadingComponent} userSession={userSession} />
    );
  };

  useEffect(() => {
    if (user.username === "") return;
    setLoadWidgets(true);
    setTimeout(() => {
      setLoadWidgets(false);
    }, 2000);
  }, [user]);

  return (
    <>
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
        <Row className="rowBalance">
          <Col xs={12} sm={12} md={12} lg={12}>
            <CardSaldoComponent
              name={user && user.username}
              balance={balance}
              showBalance={false}
            />
          </Col>
        </Row>
        <Row className="rowCardTCF">
          <Col xs={12} sm={12} md={12} lg={12}>
            <CardTCF
              title="Nova Transação"
              body={
                <TransacaoForm
                  onSubmitAction={handleTransacaoForm}
                  showDatePicker={false}
                />
              }
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <HomeStatement
              onTransactionsLoaded={calculateBalance}
              reload={reloadStatement}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="mt-3">
            <WidgetComponentCaller
              loadingComponent={loadWidgets}
              userSession={user}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}
