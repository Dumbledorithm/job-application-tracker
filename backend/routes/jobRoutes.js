import express from "express"
import protect from "../middleware/auth.middleware.js"

const router = express.Router()

router.get("/", protect, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  })
})

export default router