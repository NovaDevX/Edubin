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
          icon: "ti ti-filter",
          subMenues: ["Grade","class","slider","notice"],
        },
        {
          text: "Students",
          link: "./ui-buttons.html",
          icon: "ti ti-user",
        },
        {
          text: "Add Student Index",
          link: "./ui-buttons.html",
          icon: "ti ti-plus",
        },
        {
          text: "Student Cards",
          link: "./ui-buttons.html",
          icon: "ti ti-credit-card",
          subMenues: ["Online - Group 1","Kurunegala","Negambo - Group 1","Negambo - Group 2"],
        },
        {
          text: "Academy",
          link: "./ui-buttons.html",
          icon: "ti ti-book",
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
          icon: "ti ti-files",
          subMenues: ["Online Class","Physical Class","Free Class","Attendance Reports"],
        },
        {
          text: "SMS",
          link: "./ui-buttons.html",
          subMenues: ["Not Paid Students","Paid Students","Pending Payment Students"],
          icon: "ti ti-folder",
        },
        {
          text: "Reviews",
          link: "./ui-buttons.html",
          icon: "ti ti-id-badge",
        },
        {
          text: "Gallary",
          link: "./ui-buttons.html",
          icon: "ti ti-files",
        },
        {
          text: "Mail",
          link: "./ui-buttons.html",
          icon: "ti ti-bookmark",
        },
        {
          text: "Admin",
          link: "./ui-buttons.html",
          icon: "ti ti-shield",
        },
      ];
    
      res.render("dashboard/index", { menus: menus });
});

module.exports = {
  dashboard,
};
