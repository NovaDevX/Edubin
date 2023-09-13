const asyncHandler = require("express-async-handler");

//@desc Admin dashboard
//@route : GET /admin/
//@access : public
const dashboard = asyncHandler(async (req, res) => {
    var menus = [
        {
          text: "Dashboard",
          link: "./index.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Filters",
          link: "./index.html",
          icon: "ti ti-layout-dashboard",
          subMenues: ["Grade","class","slider","notice"],
        },
        {
          text: "Students",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Add Student Index",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Student Cards",
          link: "./ui-buttons.html",
          icon: "ti ti-article",
          subMenues: ["Online - Group 1","Kurunegala","Negambo - Group 1","Negambo - Group 2"],
        },
        {
          text: "Academy",
          link: "./ui-buttons.html",
          icon: "ti ti-article",
          subMenues: ["Teachers","Class Schedule","Class Tute","Video Lessons"],
        },
        {
          text: "Payments",
          link: "./ui-buttons.html",
          icon: "ti ti-article",
          subMenues: ["Free Card","Pay Manual","Bank","Card","Not Paid Students"],
        },
        {
          text: "Student Attendance",
          link: "./ui-buttons.html",
          icon: "ti ti-article",
          subMenues: ["Online Class","Physical Class","Free Class","Attendance Reports"],
        },
        {
          text: "SMS",
          link: "./ui-buttons.html",
          subMenues: ["Not Paid Students","Paid Students","Pending Payment Students"],
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Reviews",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Gallary",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Mail",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
        {
          text: "Admin",
          link: "./ui-buttons.html",
          icon: "ti ti-layout-dashboard",
        },
      ];
    
      res.render("dashboard/index", { menus: menus });
});

module.exports = {
  dashboard,
};