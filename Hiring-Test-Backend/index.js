import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors"
import CallRoutes from "./routes/Calls.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"


const app = express()
dotenv.config()

app.use(bodyParser.json({ Limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ Limit: "30mb", extended: true }))
app.use(cors());


app.use("/calls", CallRoutes)
app.use("user", userRoutes)

const CONNECTION_URL = "mongodb+srv://admin:MubeenSikandar123@cluster0.iyqlo.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => (app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))))
.catch((error)=>console.log(error.message) )

