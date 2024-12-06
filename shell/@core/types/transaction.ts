export type TransactionType = "deposito" | "debito" | "pix" | "ted" | "tef";

export type Transaction = {
  id: string,
  transactionType: TransactionType,
  date: string,
  amount: number
};
