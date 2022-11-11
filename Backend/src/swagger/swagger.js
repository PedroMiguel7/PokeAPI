const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Pokemon User",
      version: "2.0.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  apis: ['../*.js'],
};

export default swaggerOptions;
