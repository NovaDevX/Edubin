const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//  UserType : Status
//  Admin       0
//  Students    1
//  Teachers    2

//@desc register user
//@route : POST /api/users/register
//@access : public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password , role } = req.body;
  //validate inputs
  if (!username || !email || !password || !role) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role
  });

  ((role == 1) ? console.log(`Student Registered ${user}`) : console.log(`Teacher Registered ${user}`))

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc user login
//@route : POST /api/users/login
//@access : public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  const user = await User.findOne({ email });

  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role:user.role
        },
      },
      process.env.JWT_ACCESS_TOKEN_SECERT,
      { expiresIn: "15m" }
    );

    const role = user.role;
    res.status(200).json({ accessToken , role });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

//@desc Current user info
//@route : POST /api/users/current
//@access : private
const getLoggedUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  registerUser,
  userLogin,
  getLoggedUser,
};
