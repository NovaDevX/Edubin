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
app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(
  express.static(__dirname + "/public", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d",
  })
);
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", frontendRouter);

app.use("/auth", userRouter);

app.get("/admin/dashboard", (req, res) => {
  var menus = [
    {
      text: "Dashboard",
      link: "./index.html",
      icon: 'ti ti-layout-dashboard',
      catergory : "Main"
    },
    {
      text: "Students",
      link: "./ui-buttons.html",
      icon: "ti ti-article",
      catergory : "Main"
    },
  ];

  res.render("dashboard/index", { menus: menus });
});

setupMongooseConnection();
app.listen(PORT, () => {
  console.log(`LMS Backend Server Started : http://localhost:${PORT}`);
});
