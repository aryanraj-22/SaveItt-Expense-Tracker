const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "save");
    req.user = decoded.id; // Attach user ID to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token expired or invalid, please log in again" });
  }
};

module.exports = isAuthenticated;
