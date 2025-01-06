/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col, Spinner } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import HomeStatement from "./page.home-statement";
import { createTransaction } from "../../@core/services/transaction_service";
import { Transaction } from "../../@core/types/transaction";
import ToastTCF from "../../@core/components/Toast";
import CardSaldoComponent from "../../@core/components/ui/CardSaldo/CardSaldo";
import CardTCF from "../../@core/components/ui/Card";
import TransacaoForm from "../../@core/components/forms/Transacao";
import CardCotacoes from "@/@core/components/ui/CardCotacoes/CardCotacoes";
import { AttachMoney, Euro, CurrencyPound, CurrencyFranc } from "@mui/icons-material";
import dynamic from "next/dynamic";

import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";
import useAxiosAuth from "@/@core/hooks/useAxiosAuth";
import transactionsService from "@/@core/services/api-node/transactions.service";

export default function Home() {
  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  const [reloadStatement, setReloadStatement] = useState<boolean>(false);
  const [loadWidgets, setLoadWidgets] = useState<boolean>(false);
  const [balance, setBalance] = useState(0);
  const [cotas, setCotas] = useState<{ nome: string; moeda: string; cotacao: any; variacao: any }[]>([]);
  const [loading, setLoading] = useState(true);

  const Graficos = dynamic(() => import('remoteNextApp/app'), {
    ssr: false,
  });

  useEffect(() => {
    const fetchCotacoes = async () => {
      try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL");
        const data = await response.json();
        const formatCurrency = (value: string) => {
          return parseFloat(value)
            .toFixed(2)
            .replace('.', ',')
            .toLocaleString();
        };
        setCotas([
          { nome: "Dólar", moeda: "USD", cotacao: formatCurrency(data.USDBRL.ask), variacao: formatCurrency(data.USDBRL.varBid) },
          { nome: "Euro", moeda: "EUR", cotacao: formatCurrency(data.EURBRL.ask), variacao: formatCurrency(data.EURBRL.varBid) },
          { nome: "Libra", moeda: "GBP", cotacao: formatCurrency(data.GBPBRL.ask), variacao: formatCurrency(data.GBPBRL.varBid) },
          { nome: "Franco Suiço", moeda: "CHF", cotacao: formatCurrency(data.CHFBRL.ask), variacao: formatCurrency(data.CHFBRL.varBid) },
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar cotações:", error);
        setLoading(false);
      }
    };

    fetchCotacoes();
  }, []);


  const getCurrencyIcon = (moeda: any) => {
    switch (moeda) {
      case "USD":
        return <AttachMoney />;
      case "EUR":
        return <Euro />;
      case "GBP":
        return <CurrencyPound />;
      case "CHF":
        return <CurrencyFranc />;
      default:
        return null;
    }
  };


  const { data: session } = useSession(); // os dados de sessão podem ser colocados no gerenciador de estados
  const axiosHookHandler: any = useAxiosAuth();

  const handleTransacaoForm = useCallback(
    async (e: any, formData: any) => {
      if (session === undefined) return;
      const token: string = session?.user.result.token;
      const user: any = jwtDecode(token);
      const formattedFormData: any = {
        ...formData,
        userId: user.userId,
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
    [session]
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
      <WidgetsComponent loading={loadingComponent} userSession={userSession} /> // userSession pode ser passado como gerenciador de estados
    );
  };

  useEffect(() => {
    if (session === undefined) return;
    setLoadWidgets(true);
    setTimeout(() => {
      setLoadWidgets(false);
    }, 2000);
  }, [session]);

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
              name={session && session.user.result.username}
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


        <Row className="rowBalance mt-4">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {loading ? (
                <div>Carregando...</div>
              ) : (
                cotas.map((cotacao, index) => (
                  <CardCotacoes
                    key={index}
                    moeda={<span>{getCurrencyIcon(cotacao.moeda)}</span>}
                    nome={cotacao.nome}
                    cotacao={cotacao.cotacao}
                    variacao={cotacao.variacao}
                  />
                ))
              )}
            </div>
          </Col>
        </Row>

        <Graficos />
{/*   
        <Row className="rowCardTCF">
          <Col xs={12} sm={12} md={12} lg={12}>
            <Graficos />
          </Col>
        </Row> */}

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
              userSession={session}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}
