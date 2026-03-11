import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"


dotenv.config()

const app = express()

// connect database
connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/job",jobRoutes);
app.get("/", (req, res) => {
  res.send("AI Job Tracker API running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})