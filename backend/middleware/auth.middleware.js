import jwt from "jsonwebtoken"
import User from "../models/User.js"

const protect = async (req, res, next) => {
  let token

  try {
    // check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // attach user to request (without password)
      req.user = await User.findById(decoded.id).select("-password")

      next()
    } else {
      return res.status(401).json({
        message: "Not authorized, no token"
      })
    }
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized, token failed"
    })
  }
}

export default protect