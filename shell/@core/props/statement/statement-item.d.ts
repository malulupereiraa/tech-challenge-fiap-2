/* eslint-disable @typescript-eslint/no-explicit-any */

import { TransactionType } from "../../types/transaction";

export default interface StatementItemPropsProps {
  /** The transaction's ID */
  id?: string | number,
  /** The type of the transaction */
  transactionType: TransactionType,
  /** The amount of the transaction */
  amount: number,
  /** The date when the transaction happened */
  date: string | Date
};
