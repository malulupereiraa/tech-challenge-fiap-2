const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        if (process.env.NODE_ENV === 'development' || !process.env.MONGO_URI) {
            // Iniciar MongoDB em memória para desenvolvimento
            const mongod = await MongoMemoryServer.create();
            const mongoUri = mongod.getUri();
            await mongoose.connect(mongoUri);
            console.log('Conectado ao MongoDB em memória');
          } else {
            // Conectar ao MongoDB real em produção
            await mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });
            console.log('Conectado ao MongoDB');
          }
  } catch (error) {
    console.error('Erro de Conexão do MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
