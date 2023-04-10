const jwt = require("jsonwebtoken");

const {
  env: { JWT_SECRET },
} = process;

module.exports = async function validateToken(req, res, next) {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) {
    return res.status(400).send({ message: "Missing authorization" });
  }

  const token =
    authorization.split(" ").length > 1
      ? authorization.split(" ")[1].trim()
      : undefined;

  if (!token) {
    res.status(401).send({ message: "unauthorized" });
    return;
  }

  console.log("token", token);

  jwt.verify(token, JWT_SECRET, (err, jwt_data) => {
    try {
      if (err) {
        console.log(err);
        switch (err.name) {
          case "TokenExpiredError":
            return res.status(401).send({ message: "jwt expire" });
          case "JsonWebTokenError":
            return res
              .status(401)
              .send({ message: "the header or payload could not be parsed" });
          default:
            return res.status(401).send({ message: "jwt not active" });
        }
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
    }
  });
};
