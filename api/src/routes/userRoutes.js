// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, getUsers, getUserByID, updateUser, getUserByEmail, deleteUser } = require('../controllers/userController');

// /**
//  * @swagger
//  * /api/users/login:
//  *   post:
//  *     summary: Autenticação de usuário
//  *     tags: [Login]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Autenticação realizada com sucesso
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 token:
//  *                   type: string
//  *       401:
//  *         description: Credenciais inválidas
//  */
// router.post('/login', loginUser);

// /**
//  * @swagger
//  * /api/users:
//  *   get:
//  *     summary: Busca Usuários
//  *     tags: [Users]
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       200:
//  *         description: Lista de Usuários Cadastrados
//  */
// router.get('/', getUsers)

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   get:
//  *     summary: Obtém Usuário pelo ID
//  *     tags: [Users]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID do Usuário
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Usuário Encontrado
//  *       401:
//  *         description: Token invalido
//  */
// router.get('/:id', getUserByID)

// /**
//  * @swagger
//  * /api/users/email/{email}:
//  *   get:
//  *     summary: Obtém Usuário pelo Email
//  *     tags: [Users]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: email
//  *         required: true
//  *         description: Email do Usuário
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Usuário Encontrado
//  *       401:
//  *         description: Token invalido
//  */
// router.get('/email/:email', getUserByEmail )

// /**
//  * @swagger
//  * /api/users:
//  *   post:
//  *     summary: Cria um novo usuário
//  *     tags: [Users]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Usuário Criado com Sucesso
//  *       400:
//  *         description: Dados inválidos
//  */
// router.post('/', registerUser);

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   put:
//  *     summary: Atualizar os Dados do Usuário
//  *     tags: [Users]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID do Usuário
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Usuário Atualizado com Sucesso
//  */
// router.put('/:id', updateUser)

// /**
//  * @swagger
//  * /api/users/{id}:
//  *   delete:
//  *     summary: Deletar os Dados do Usuário
//  *     tags: [Users]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID do Usuário
//  *         schema:
//  *           type: string
//  *     responses:
//  *       201:
//  *         description: Usuário Removido com Sucesso
//  */
// router.delete('/:id', deleteUser)



// module.exports = router;
