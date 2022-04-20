const express = require("express");
const employeeController = require("../controllers/employee");
const productRouter = express.Router();

productRouter.route("/")
  .get(employeeController.getDetails)

module.exports = productRouter;
