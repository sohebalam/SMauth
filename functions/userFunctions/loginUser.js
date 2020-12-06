import { validationResult } from "express-validator"
import User from "../../schemas/User.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "config"

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body
    let user = await User.findOne({ email })
    let errors = validationResult(req)

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })

    if (!user)
      return res
        .status(404)
        .send("User with this e-mail hasn't been created yet")

    let doPasswordsMatch = await bcryptjs.compare(password, user.password)

    if (!doPasswordsMatch)
      return res.status(401).json({ msg: "Passwords do not match" })

    const payload = {
      user: {
        id: user._id,
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

export default loginUser
