const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("This Email is already registered!");
  user = new User();
  user.Firstname = req.body.Firstname;
  user.Lastname = req.body.Lastname;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.generateHashedPassword();
  await user.save();
  let token = jwt.sign(
    { _id: user._id, Firstname: user.Firstname, Lastname: user.Lastname, role: user.role },
    config.get("jwtPrivateKey")
  );
  let datatoRetuen = {
    Firstname: user.Firstname,
    Lastname: user.Lastname,
    email: user.email,
    token: user.token,
  };
  return res.send(datatoRetuen);
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Is Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, Firstname: user.Firstname, Lastname: user.Lastname, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
module.exports = router;
