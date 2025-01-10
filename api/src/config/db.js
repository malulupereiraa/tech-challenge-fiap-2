const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const dotenv = require('dotenv');

dotenv.config();

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')
console.log(process.env.NODE_ENV)
console.log(process.env.MONGO_URI)
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX')

const connectDB = async () => {
  try {
    // Iniciar MongoDB em memória para desenvolvimento
    const mongod = await MongoMemoryServer.create();
    const mongoUri = mongod.getUri();
    await mongoose.connect(mongoUri);
    console.log('Conectado ao MongoDB em memória');
  } catch (error) {
    console.error('Erro de Conexão do MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
