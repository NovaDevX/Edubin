const asyncHandler = require("express-async-handler");

var menus = [
  {
    text: "Dashboard",
    link: "./index.html",
    icon: "ti ti-layout-dashboard",
  },
  {
    text: "Filters",
    icon: "ti ti-filter",
    subMenues: [
      { text: "Grade", link: "/grade" },
      { text: "Class", link: "/class" },
      { text: "Slider", link: "/slider" },
      { text: "Notice", link: "/notice" },
    ],
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
    icon: "ti ti-credit-card",
    subMenues: [
      { text: "Online - Group 1", link: "/online-g1" },
      { text: "Kurunegala", link: "/kurunegala" },
      { text: "Negambo - Group 1", link: "/negambo-g1" },
      { text: "Negambo - Group 2", link: "/negambo-g2" },
    ],
  },
  {
    text: "Academy",
    icon: "ti ti-book",
    subMenues: [
      { text: "Teachers", link: "/admin/teachers" },
      { text: "Class Schedule", link: "/admin/class-shedule" },
      { text: "Class Tute", link: "/admin/class-tute" },
      { text: "Video Lessons", link: "/admin/video-lessons" },
    ],
  },
  {
    text: "Payments",
    icon: "ti ti-article",
    subMenues: [
      { text: "Free Card", link: "/free-card" },
      { text: "Pay Manual", link: "/pay-manual" },
      { text: "Card", link: "/card" },
      { text: "Not Paid Students", link: "/not-paid-students" },
    ],
  },
  {
    text: "Student Attendance",
    icon: "ti ti-files",
    subMenues: [
      { text: "Online Class", link: "/online-class" },
      { text: "Physical Class", link: "/physical-class" },
      { text: "Free Class", link: "/free-class" },
      { text: "Attendance Reports", link: "/attendance-report" },
    ],
  },
  {
    text: "SMS",
    subMenues: [
      { text: "Not Paid Students", link: "/not-paid-students" },
      { text: "Paid Students", link: "/paid-students" },
      { text: "Pending Payment Students", link: "/pending-payment-students" },
    ],
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

//@desc Admin dashboard
//@route : GET /admin/
//@access : public
const dashboard = asyncHandler(async (req, res) => {
  res.render("dashboard/admin/dashboard", { menus: menus });
});

//@desc Admin teachers
//@route : GET /admin/teachers
//@access : public
const teachers = asyncHandler(async (req, res) => {

  res.render("dashboard/admin/teachers", { menus: menus });
});

module.exports = {
  dashboard,
  teachers
};
