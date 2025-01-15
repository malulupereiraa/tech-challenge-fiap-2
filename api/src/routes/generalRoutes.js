const express = require('express');
const router = express.Router();
const multer = require('multer');
const jwtAuth = require('../middleware/jwtAuth');
const upload = multer({ dest: 'tmp/csv/' });


const {
  registerUser,
  loginUser,
  getUsers,
  getUserByID,
  updateUser,
  getUserByEmail,
  deleteUser,
} = require('../controllers/userController');

const {
  createTransaction,
  getBankStatement,
  getTransactions,
  getTransactionById,
  deleteTransaction,
  updateTransaction,
  importTransactions
} = require('../controllers/transactionController');

// USERS ROUTES

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Autenticação de usuário
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticação realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Busca Usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de Usuários Cadastrados
 */
router.get('/', jwtAuth, getUsers)

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtém Usuário pelo ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário Encontrado
 *       401:
 *         description: Token invalido
 */
router.get('/:id', jwtAuth, getUserByID)

/**
 * @swagger
 * /api/users/email/{email}:
 *   get:
 *     summary: Obtém Usuário pelo Email
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email do Usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário Encontrado
 *       401:
 *         description: Token invalido
 */
router.get('/email/:email', jwtAuth, getUserByEmail )

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário Criado com Sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', registerUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualizar os Dados do Usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário Atualizado com Sucesso
 */
router.put('/:id', jwtAuth, updateUser)

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deletar os Dados do Usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Usuário
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Usuário Removido com Sucesso
 */
router.delete('/:id', jwtAuth, deleteUser)


// TRANSACTIONS ROUTES

/**
 * @swagger
 *  /api/users/{userId}/transactions:
 *   get:
 *     summary: Busca Transações
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do Usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de Transações Cadastradas
 */
router.get('/:userId/transactions', jwtAuth, getTransactions)

/**
 * @swagger
 *  /api/users/transactions/{id}:
 *   get:
 *     summary: Obtém Transação pelo ID
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da Transação
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transação Encontrada
 *       401:
 *         description: Token invalido
 */
router.get('/transactions/:id', jwtAuth, getTransactionById)

/**
 * @swagger
 *  /api/users/transactions:
 *   post:
 *     summary: Cria uma Nova Transação
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              userId:
 *                  type: string
 *              amount:
 *                 type: number
 *              transactionType:
 *                  type: string
 *              description:
 *                  type: string
 *              date:
 *                  type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Transação Criada com Sucesso
 */
router.post('/transactions', jwtAuth, createTransaction);  // Create transaction

/**
 * @swagger
 *  /api/users/transactions/{id}:
 *   put:
 *     summary: Atualizar os Dados da Transação
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da Transação
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              userId:
 *                  type: string
 *              amount:
 *                 type: number
 *              transactionType:
 *                  type: string
 *              description:
 *                  type: string
 *              date:
 *                  type: string
 *     responses:
 *       201:
 *         description: Transação Atualizado com Sucesso
 */
router.put('/transactions/:id', jwtAuth, updateTransaction)

/**
 * @swagger
 *  /api/users/transactions/{id}:
 *   delete:
 *     summary: Deletar Transação
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da Transação
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Transação Removida com Sucesso
 */
router.delete('/transactions/:id', jwtAuth, deleteTransaction)

/**
 * @swagger
 *  /api/users/transactions/import:
 *   post:
 *     summary: Importa transações de um arquivo
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                  type: string
 *               file:
 *                  type: file
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Transações Importadas com Sucesso
 */
router.post('/transactions/import', upload.single('file'), jwtAuth, importTransactions);

module.exports = router;
