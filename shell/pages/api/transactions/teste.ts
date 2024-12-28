/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbCreateTransaction, dbListTransactions } from "@/@core/services/db_service";

export default function teste(req: any, res: any) {
    if (req.method === "POST") {
        POST(res, req)
    } else if (req.method === "GET") {
        GET(res)
    } else {
        res.status(405).send()
    }

}
export const GET = async (res: any) => {
    const transactions = await dbListTransactions();
    res.status(200).json(transactions)
}
  
export const POST = async (res: any, req: any) => {
    const data = (await JSON.parse(req.body));
    const id = await dbCreateTransaction(data);
    res.status(200).send(id)
  }
