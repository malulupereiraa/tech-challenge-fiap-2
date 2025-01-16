const csv = require('csv-parser');
const fs = require('fs');
const Transaction = require("../models/transaction");
const User = require("../models/User");

// Create a transaction
const createTransaction = async (req, res) => {
  const { amount, transactionType, description, userId, date } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user)
      return res.status(404).json({ message: "Usuário não Encontrado..." });

    const transaction = new Transaction({
      user: userId,
      amount,
      transactionType,
      description,
      date,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Erro ao Criar Transação..." });
  }
};

// Get all transactions
const getTransactions = async (req, res) => {
  const { userId } = req.params;
  try {
    const transactions = await Transaction.find();

    const transactionsFiltered = transactions.filter(
      (transaction) => transaction.user == userId
    );
    res.status(200).json({
      total: transactionsFiltered.length,
      result: transactionsFiltered,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a transaction by ID
const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById({ _id: id });
    if (!transaction) {
      return res.status(404).json({ message: "Transação não Encontrada..." });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a transaction
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, type, description, accountId, date } = req.body;

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { amount, type, description, accountId, date },
      { new: true }
    );
    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transação não Encontrada..." });
    }
    res.status(200).json(updatedTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transação não Encontrada..." });
    }
    res.status(200).json({ message: "Transação Apagada com Sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get bank statement (all transactions for the user)
const getBankStatement = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.userId });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao Buscar Transações..." });
  }
};

// Create a transaction
const importTransactions = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user)
      return res.status(404).json({ message: "Usuário não Encontrado..." });

    const results = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        try {
          results.forEach((transactionData) => {
            const dateParts = transactionData['Data Transacao'].split('/');
            const date = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

            const transaction = new Transaction({
              user: userId,
              amount: transactionData['Valor']?.replace(".", "")?.replace(",", "."),
              transactionType: transactionData['Tipo Transacao']?.toLowerCase(),
              date
            });

            transaction.save();
          });
        } catch (error) {
          console.log(error);
        }
      });

    res.status(201).json({
      message: "Transações importadas com sucesso...",
      userId: user.id
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao Importar Transações...",
      error: error.message
    });
  }
};

module.exports = {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getBankStatement,
  importTransactions
};
