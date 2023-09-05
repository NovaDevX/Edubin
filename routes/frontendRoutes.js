const express = require("express");
const router = express.Router();

const {
  home,
  aboutUs,
  caurses,
  events,
  teachers,
  blog,
  shop,
  contact
} = require("../controllers/frontendController");

router.get("/", home);
router.get("/about_us", aboutUs);
router.get("/courses", caurses);
router.get("/events", events);
router.get("/teachers", teachers);
router.get("/blog", blog);
router.get("/shop", shop);
router.get("/contact", contact);

module.exports = router;
