const asyncHandler = require("express-async-handler");
const path = require("path");
const rootDirectory = require("path").resolve("./");

//@desc home page
//@route : GET /
//@access : public
const home = asyncHandler(async (req, res) => {
  res.render('index')
});
const aboutUs = asyncHandler(async (req, res) => {
  res.render('about')
});
const caurses = asyncHandler(async (req, res) => {
  res.render('caurses')
});
const events = asyncHandler(async (req, res) => {
  res.render('events')
});
const teachers = asyncHandler(async (req, res) => {
  res.render('teachers')
});
const blog = asyncHandler(async (req, res) => {
  res.render('blog')
});
const shop = asyncHandler(async (req, res) => {
  res.render('shop')
});
const contact = asyncHandler(async (req, res) => {
  res.render('contact')
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
