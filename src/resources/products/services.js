const prisma = require("../../utils/prismaClient");

async function listAllProducts(id) {
  return prisma.product.findMany({ where: { userId: id } });
}

async function getAllProducts() {
  return prisma.product.findMany();
}

async function createProduct(data) {
  return prisma.product.create({ data });
}

async function updateProduct(id, data) {
  return prisma.product.update({ where: { id }, data });
}

async function deleteProduct(id) {
  return prisma.product.delete({ where: { id } });
}

module.exports = {
  listAllProducts,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
