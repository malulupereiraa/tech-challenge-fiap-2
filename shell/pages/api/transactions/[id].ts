/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbDeleteTransaction, dbShowTransaction, dbUpdateTransaction } from "@/@core/services/db_service";
import { Transaction } from "@/@core/types/transaction";

export default function transaction(req: any, res: any) {
    if (req.method === "GET") {
        GET(req, res)
    } else if (req.method === "PUT") {
        PUT(req, res)
    } else if (req.method === "DELETE") {
        DELETE(req, res)
    } else {
        res.status(405).send()
    }
}
  
export const GET = async (req: any, res: any) => {
    const transaction = await dbShowTransaction(req.query.id);  
    return handleTransactionResponse(transaction, res);
};

export const PUT = async (req: any, res: any) => {
    const transactionData = (await JSON.parse(req.body));
    const transaction = await dbUpdateTransaction(req.query.id, transactionData);
  
    return handleTransactionResponse(transaction, res);
  };
  
  export const DELETE = async (req: any, res: any) => {
    const transaction = await dbDeleteTransaction(req.query.id);
  
    return handleTransactionResponse(transaction, res);
  };
  
const handleTransactionResponse = async (
    transaction: Transaction | undefined,
    res: any
  ) => {
    if (transaction) {
      res.status(200).json(transaction)
    }
  
    return res.status(405).send();
  };
