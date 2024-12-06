import { dbCreateTransaction, dbListTransactions } from "@/@core/services/db_service";


export const GET = async () => {
  const transactions = await dbListTransactions();

  return Response.json(transactions);
}

export const POST = async (request: Request) => {
  const data = await request.json();
  const id = await dbCreateTransaction(data as object);

  return new Response(JSON.stringify({ id }), {
    headers: { 'Content-Type': 'application/json' },
    status: 201
  });
}
