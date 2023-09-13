const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.SERVER_PORT || 8000;
const setupMongooseConnection = require("./config/mongooseConnection");
const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
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

app.use("/admin", adminRouter);

// app.get("/admin/dashboard", (req, res) => {
//   var menus = [
//     {
//       text: "Dashboard",
//       link: "./index.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Filters",
//       link: "./index.html",
//       icon: "ti ti-layout-dashboard",
//       subMenues: ["Grade","class","slider","notice"],
//     },
//     {
//       text: "Students",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Add Student Index",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Student Cards",
//       link: "./ui-buttons.html",
//       icon: "ti ti-article",
//       subMenues: ["Online - Group 1","Kurunegala","Negambo - Group 1","Negambo - Group 2"],
//     },
//     {
//       text: "Academy",
//       link: "./ui-buttons.html",
//       icon: "ti ti-article",
//       subMenues: ["Teachers","Class Schedule","Class Tute","Video Lessons"],
//     },
//     {
//       text: "Payments",
//       link: "./ui-buttons.html",
//       icon: "ti ti-article",
//       subMenues: ["Free Card","Pay Manual","Bank","Card","Not Paid Students"],
//     },
//     {
//       text: "Student Attendance",
//       link: "./ui-buttons.html",
//       icon: "ti ti-article",
//       subMenues: ["Online Class","Physical Class","Free Class","Attendance Reports"],
//     },
//     {
//       text: "SMS",
//       link: "./ui-buttons.html",
//       subMenues: ["Not Paid Students","Paid Students","Pending Payment Students"],
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Reviews",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Gallary",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Mail",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//     {
//       text: "Admin",
//       link: "./ui-buttons.html",
//       icon: "ti ti-layout-dashboard",
//     },
//   ];

//   res.render("dashboard/index", { menus: menus });
// });

setupMongooseConnection();
app.listen(PORT, () => {
  console.log(`LMS Backend Server Started : http://localhost:${PORT}`);
});
