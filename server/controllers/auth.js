const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const secret = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== passwordConfirmation) {
      return res
        .json({
          error: "Error: password confirmation does not match",
          data: req.body,
        })
        .status(400);
    }
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: email,
      password: password,
      username: username,
    });

    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      secret,
      { expiresIn: "2h" }
    );

    res.status(200).json({ result: newUser, token: token });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const signin = async (req, res) => {
  const { emailUsername, password } = req.body;
  try {
    const user = await User.findOne({ email: emailUsername });
    // if the user doesn't exist, return 404
    if (!user) {
      return res
        .status(400)
        .json({ message: "Error: invalid credentials", user });
    }
    // compare the found user's password with the input password
    const { password: hashedPassword } = user;
    const IsCorrectPassword = await bcrypt
      .compare(password, hashedPassword)
      .catch(console.error);

    if (!IsCorrectPassword) {
      return res.status(400).json({
        message: "Error: incorrect password",
      });
    }

    // Sign the token using the mail of the user and id

    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "2h",
    });

    // reurnt the user and the toekn to the client

    res.status(200).json({ result: { user, token } });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const router = Router();
router.post("/login", signin);
router.post("/signup", signup);
router.get("/", (req, res) => res.json("welcome"));
router.post("/", (req, res) => res.json("POST"));

module.exports = router;
