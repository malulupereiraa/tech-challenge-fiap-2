const express = require('express');
const connectDB = require('./config/db');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const generalRoutes = require('./routes/generalRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to database
connectDB();

const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3001', 'http://localhost:3002', 'http://fase-2-shell.challengecoders.com'],
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
// app.use('/api/users', userRoutes);
app.use('/api/users', generalRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor Rodando na Porta: ${PORT}`));
