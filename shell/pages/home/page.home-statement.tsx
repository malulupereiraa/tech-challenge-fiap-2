/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useReducer } from "react";
import Statement from "../../@core/components/Statement";
import { listTransactions } from "../../@core/services/transaction_service";

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
  reload: boolean,
  onTransactionsLoaded: (_: []) => void
}

export default function HomeStatement({ reload, onTransactionsLoaded }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadTransactions = () => dispatch({ type: "load" });

  const reloadTransacations = () => {
    if(reload) loadTransactions();
  }

  const requestTransactions = () => {
    if (state.loading === false) return;

    listTransactions().then(handleLoadedTransactions);
  };

  const handleLoadedTransactions = (requestResult: any) => {
    onTransactionsLoaded(requestResult);

    dispatch({ type: "ready", newList: requestResult });
  };

  useEffect(requestTransactions, [state.loading]);
  useEffect(reloadTransacations, [reload]);
  useEffect(loadTransactions, []);

  return <Statement loading={state.loading || !state.list} transactions={state.list} />;
}
