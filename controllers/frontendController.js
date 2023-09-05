const asyncHandler = require("express-async-handler");
const path = require("path");
const rootDirectory = require("path").resolve("./");

//@desc home page
//@route : GET /
//@access : public
const home = asyncHandler(async (req, res) => {
  res.render('home/index')
});
const aboutUs = asyncHandler(async (req, res) => {
  res.render('home/about')
});
const caurses = asyncHandler(async (req, res) => {
  res.render('home/caurses')
});
const events = asyncHandler(async (req, res) => {
  res.render('home/events')
});
const teachers = asyncHandler(async (req, res) => {
  res.render('home/teachers')
});
const blog = asyncHandler(async (req, res) => {
  res.render('home/blog')
});
const shop = asyncHandler(async (req, res) => {
  res.render('home/shop')
});
const contact = asyncHandler(async (req, res) => {
  res.render('home/contact')
});

module.exports = {
  home,
  aboutUs,
  caurses,
  events,
  teachers,
  blog,
  shop,
  contact,
};
