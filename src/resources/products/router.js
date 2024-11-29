const express = require("express");
const {
  getAll,
  create,
  update,
  remove,
  listAll,
} = require("./../products/controller");

const router = express.Router();

router.get("/:id", listAll);
router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
