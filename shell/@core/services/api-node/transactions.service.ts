/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from "@/@core/config/endpoint";
import { bindUrlService } from "@/@core/utils/bind-url-paths";

class TransactionsService {
  getTransactions(hookHandler: any, path: any) {
    const fullEndPoint = bindUrlService.BindUrlPaths(
      endpoints.transaction.get,
      path
    );
    return hookHandler.get(fullEndPoint);
  }

  getTransactionById(hookHandler: any, path: any) {
    const fullEndPoint = bindUrlService.BindUrlPaths(
      endpoints.transaction.getById,
      path
    );
    return hookHandler.get(fullEndPoint);
  }

  createTransaction(hookHandler: any, criteria: any) {
    return hookHandler.post(endpoints.transaction.post, criteria);
  }

  updateTransaction(hookHandler: any, criteria: any, path: any) {
    const fullEndPoint = bindUrlService.BindUrlPaths(
      endpoints.transaction.put,
      path
    );
    return hookHandler.put(fullEndPoint, criteria);
  }

  deleteTransaction(hookHandler: any, path: any) {
    const fullEndPoint = bindUrlService.BindUrlPaths(
      endpoints.transaction.delete,
      path
    );
    return hookHandler.delete(fullEndPoint);
  }
}

export default new TransactionsService();
