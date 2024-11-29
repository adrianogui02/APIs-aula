const productService = require("./services");

async function listAll(req, res, next) {
  try {
    const { id } = req.params;
    const products = await productService.listAllProducts(Number(id));
    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const product = await productService.updateProduct(Number(id), req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const { id } = req.params;
    await productService.deleteProduct(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, update, remove, listAll };
