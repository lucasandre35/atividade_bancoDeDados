const express = require("express");
const router = express.Router();
const constroller = require("../controller/tarefasController");

router.get("/", controller.getAll);











module.exports = router;