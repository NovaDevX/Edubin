const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.SERVER_PORT || 8000;
const setupMongooseConnection = require("./config/mongooseConnection");
const userRouter = require("./routes/userRoutes");
const frontendRouter = require("./routes/frontendRoutes");

require("dotenv").config();
setupMongooseConnection();
app.set('view engine' , 'ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

//routes
app.use("/", frontendRouter);

app.use("/auth", userRouter);

app.get("/admin/dashboard", (req, res) => {
  res.json({ status: "Welcome LMS Backend Server" });
});

app.listen(PORT, () => {
  console.log(`LMS Backend Server Started : http://localhost:${PORT}`);
});
