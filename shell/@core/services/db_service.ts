import type { Transaction } from "../types/transaction";
import type { Transactions } from "../types/transactions";
import { JSONFilePreset } from "lowdb/node";
import { customAlphabet } from "nanoid";

export const dbListTransactions = async () => {
  const db = await openDB();
  const { transactions } = db.data;

  return transactions;
};

export const dbCreateTransaction = async (data: object) => {
  const db = await openDB();
  const nanoid = customAlphabet("1234567890abcdef", 9);
  const id = nanoid();

  const transaction: Transaction = { ...data, id } as Transaction;

  db.data.transactions.push(transaction);

  await db.write();

  return id;
};

export const dbShowTransaction = async (
  id: string
): Promise<Transaction | undefined> => {
  const db = await openDB();

  return db.data.transactions.find((user: Transaction) => user.id === id);
};

export const dbDeleteTransaction = async (id: string) => {
  const db = await openDB();
  const transaction: Transaction | undefined = db.data.transactions.find(
    (u: Transaction) => u.id === id
  );

  if (!transaction) return;

  db.update((data: Transactions) => {
    data.transactions = data.transactions.filter(
      (u: Transaction) => u.id !== id
    );
  });

  return transaction;
};

export const dbUpdateTransaction = async (
  id: string,
  transactionData: Transaction
): Promise<Transaction | undefined> => {
  const db = await openDB();
  const { transactions } = db.data;
  const index: number = db.data.transactions.findIndex(
    (user: Transaction) => user.id === id
  );

  if (index < 0) return;

  const transaction: Transaction = transactions[index];

  const newtransactionData: Transaction = {
    ...transactionData,
    id: transaction.id,
  };

  transactions[index] = newtransactionData;

  db.update((data: Transactions) => (data.transactions = transactions));

  return newtransactionData;
};

const openDB = async () => {
  const defaultData: Transactions = { transactions: [] };

  return JSONFilePreset<Transactions>("db.json", defaultData);
};
