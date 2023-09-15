let UsersModel = require("../models/userModel");
const express = require("express");
const router = express.Router();

const {
  dashboard,
  teachers
} = require("../controllers/adminController");

const validateToken = require("../middlewares/validateTokenHandler");
router.get("/" , dashboard);
router.get("/teachers" , teachers);

module.exports = router;
