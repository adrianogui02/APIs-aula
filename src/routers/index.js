const express = require("express");
const authRouter = require("../resources/auth/router");
const productRouter = require("../resources/products/router");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/products", authMiddleware, productRouter);

module.exports = router;
