import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather App API",
      version: "1.0.0",
      description: "API documentation for Weather App backend",
      contact: { name: 'Shiphan Pathan', url: 'https://github.com/shiphan-pathan' }
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ['src/routes/**/*.ts', 'dist/routes/**/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;