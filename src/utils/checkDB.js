const prismaClient = require("./prismaClient");

const prisma = prismaClient;

async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Conexão com o banco de dados bem-sucedida!");
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:", error.message);
    process.exit(1);
  }
}

module.exports = checkDatabaseConnection;
