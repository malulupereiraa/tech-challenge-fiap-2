/* eslint-disable @typescript-eslint/no-explicit-any */
/* Este arquivo contém todos os endpoints utilizados na aplicação. **
 *  Com o objetivo de manter a troca de endpoints no backend com facilidade
 */

export const endpoints: any = {
  transaction: {
    get: "api/users/:userId/transactions",
    getById: "api/users/transactions/:id",
    post: "api/users/transactions",
    put: "api/users/transactions/:id",
    delete: "api/users/transactions/:id",
  },
  users: {
    get: "api/users",
    getById: "api/users/:id",
    getByEmail: "api/users/email/:email",
    post: "api/users",
    put: "api/users/:id",
    delete: "api/users/t:id",
  },
};
