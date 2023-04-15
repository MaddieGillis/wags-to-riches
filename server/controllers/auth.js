const e = require("express");
const User = require("/models/user");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_secret;

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
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
    res.status(500).send(error);
  }
};

const signin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    // if the user doesn't exist, return 404
    if (!existingUser) {
      return res.status(404).json({ message: "something went wrong" });
    }
    // compare the found user's password with the input password
    const IsCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!IsCorrectPassword) {
      return res.status(400).json({ message: "incorrect password" });
    }

    // Sign the token using the mail of the user and id

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "2h" });

      // reurnt the user and the toekn to the client

      res.status(200).json({ result: existingUser, token: token });


  } catch (error) {}
};

