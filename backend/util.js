import jwt from "jsonwebtoken";
const dotenv = require("dotenv");
dotenv.config();

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.jwtSecret,
    {
      expiresIn: "48h",
    }
  );
};

export { getToken };
