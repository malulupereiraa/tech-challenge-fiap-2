export const listTransactions = async () => {
  return fetch(`/api/transactions/teste`).then(async (response) => {
    return response.json().then(data => data);
  });
};

export const showTransaction = async (id: string) => {
  return fetch(`/api/transactions/${id}`).then(async (response) => {
    return response.json().then(data => data);
  });
};

export const deleteTransaction = async (id: string) => {
  const request = fetch(`/api/transactions/${id}`, { method: "DELETE" });
  return request.then(async (response) => {
    return response.json().then(data => data);
  });
};

export const createTransaction = async (transaction_data: object) => {
  fetch(`/api/transactions/teste`, {
    method: "POST",
    body: JSON.stringify(transaction_data)
  });
}

export const updateTransaction = async (id: string, transaction_data: object) => {
  const request = fetch(`/api/transactions/${id}`, {
    method: "PUT",
    body: JSON.stringify(transaction_data)
  });

  return request.then(async (response) => {
    return response.json().then(data => data);
  });
}
