let UsersModel = require("../models/userModel");
const express = require("express");
const router = express.Router();

const {
  dashboard,
} = require("../controllers/adminController");

const validateToken = require("../middlewares/validateTokenHandler");
router.get("/" , dashboard);

module.exports = router;
