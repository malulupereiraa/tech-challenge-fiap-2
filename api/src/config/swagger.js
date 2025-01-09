const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bytebank API',
      version: '1.0.0',
      description: 'API for Tech Challenge - FIAP | Fase 2',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['src/routes/*.js'], // Path to your route files
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
