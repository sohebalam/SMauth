import express from "express"
const app = express()
import connectToDatabase from "./config/connectToDatabase.js"
import cors from "cors"

import userRouter from "./routes/users.js"
//Function that connects express app to database
connectToDatabase()

//We prevent from cors policy warning
app.use(cors())

//Allows us to use body json thing to create posts
app.use(express.json({ extended: false }))

//Routes

app.use("/api/users", userRouter)

//We specified variable on which port our app will run (depends if heroku will give us port or we specify on 5000)
let PORT = process.env.PORT || 5001

//Method to specify on which port we want our app to be with callback function to see if method works
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`))
