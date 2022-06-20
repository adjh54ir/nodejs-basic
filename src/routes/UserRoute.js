const express = require("express");
const User = require("../models/UserModel");
const routers = express.Router();

routers.get("/user", (req, res, next) => {
  User.find((err, result) => {
    console.log(result);
    res.json(result);
  });
});

routers.post("/user", (req, res, next) => {
  const { userSq, userId, userName } = req.body;
  const UserValues = new User({
    userSq: userSq,
    userId: userId,
    userName: userName,
  });
  UserValues.save()
    .then((result) => {
      console.log("[+] INSERT SUCCESS");
      res.json(result);
    })
    .catch((err) => console.error("[-] INSERT ERROR"));
});

module.exports = routers;
