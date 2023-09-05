let UsersModel = require("../models/userModel");
const express = require("express");
const router = express.Router();

const {
  registerUser,
  userLogin,
  getLoggedUser,
} = require("../controllers/userController");

const validateToken = require("../middlewares/validateTokenHandler");
router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/current", validateToken, getLoggedUser);

module.exports = router;
