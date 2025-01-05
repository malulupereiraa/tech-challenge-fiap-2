const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const jwtAuth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Autorização Requerida' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token Inválido' });
  }
};

module.exports = jwtAuth;
