import { validationResult } from "express-validator"
import User from "../../schemas/User.js"

import gravatar from "gravatar"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "config"

const registerUser = async (req, res) => {
  try {
    let { name, lastName, userName, email, password } = req.body
    let user = await User.findOne({ email }).select("-password")
    let fetchedUserNameFromDatabase = await User.findOne({ userName }).select(
      "-password"
    )
    let errors = validationResult(req)

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })

    if (user) return res.status(401).send("User has already been created")

    if (fetchedUserNameFromDatabase === userName)
      return res.status(401).json("User name like is already been taken")

    const avatar = gravatar.url(email, {
      r: "pg",
      d: "mm",
      s: "200",
    })

    let newUser = new User({
      name,
      lastName,
      userName,
      email,
      password,
      avatar,
    })

    const salt = await bcryptjs.genSalt(10)

    let hashedPassword = await bcryptjs.hash(password, salt)

    newUser.password = hashedPassword

    await newUser.save()

    const payload = {
      user: {
        id: newUser._id,
      },
    }

    jwt.sign(
      payload,
      config.get("jsonWebTokenSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (error) {
    console.error(error.message)
    return res.status(500).send("Server error.")
  }
}

export default registerUser
