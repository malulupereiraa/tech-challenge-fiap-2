/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useReducer } from "react";
import Statement from "../../@core/components/Statement";
import { listTransactions } from "../../@core/services/transaction_service";
import useAxiosAuth from "@/@core/hooks/useAxiosAuth";
import { useSession } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import transactionsService from "@/@core/services/api-node/transactions.service";

interface HomeState {
  loading: boolean;
  list: [] | undefined;
}

interface HomeAction {
  type: string;
  newList?: [];
}

const initialState = {
  loading: false,
  list: undefined,
};

const reducer = (state: HomeState, action: HomeAction) => {
  switch (action.type) {
    case "load":
      return { ...state, loading: true };
    case "ready":
      return { ...state, loading: false, list: action.newList };
    default:
      return state;
  }
};

interface Props {
  reload: boolean;
  onTransactionsLoaded: (_: []) => void;
}

export default function HomeStatement({ reload, onTransactionsLoaded }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosHookHandler: any = useAxiosAuth();

  const loadTransactions = () => dispatch({ type: "load" });

  const reloadTransacations = () => {
    if (reload) loadTransactions();
  };

  const { data: session } = useSession(); // os dados de sessão podem ser colocados no gerenciador de estados
  const fetchTransactions = async () => {
    if (session === undefined) return;
    const token: string = session?.user.result.token;
    const user: any = jwtDecode(token);
    const res = await transactionsService.getTransactions(axiosHookHandler, {
      userId: user.userId,
    });
    return res.data.result;
  };

  const requestTransactions = () => {
    if (state.loading === false) return;

    fetchTransactions().then(handleLoadedTransactions);
    // listTransactions().then(handleLoadedTransactions); // versao da fase 1
  };

  const handleLoadedTransactions = (requestResult: any) => {
    onTransactionsLoaded(requestResult);

    dispatch({ type: "ready", newList: requestResult });
  };

  useEffect(requestTransactions, [state.loading]);
  useEffect(reloadTransacations, [reload]);
  useEffect(loadTransactions, []);

  return (
    <Statement
      loading={state.loading || !state.list}
      transactions={state.list}
    />
  );
}
