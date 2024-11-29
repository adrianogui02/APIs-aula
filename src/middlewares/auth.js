const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "secret";

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token não fornecido" });

  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
}

module.exports = authMiddleware;
