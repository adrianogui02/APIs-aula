const app = require("./src/app");
const checkDatabaseConnection = require("./src/utils/checkDB");
const PORT = process.env.PORT || 3000;

(async () => {
  // Verifica a conexão com o banco
  await checkDatabaseConnection();

  // Inicializa o servidor
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
})();
