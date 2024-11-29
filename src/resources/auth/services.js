const prisma = require("../../utils/prismaClient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "secret";

async function register(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({ data: { email, password: hashedPassword } });
}

async function login(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, SECRET, {
    expiresIn: "1h",
  });
  return { token, user };
}

module.exports = { register, login };
