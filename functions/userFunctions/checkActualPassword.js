import { validationResult } from "express-validator"
import User from "../../schemas/User.js"

import bcryptjs from "bcryptjs"

const checkActualPassword = async (req, res) => {
  try {
    const { passwordToCheck } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    let user = await User.findById(req.user.id)

    let doPasswordsMatch = await bcryptjs.compare(
      passwordToCheck,
      user.password
    )

    if (!doPasswordsMatch) return res.status(401).json("Passwords do not match")

    res.json("success")
  } catch (error) {
    console.error(error)
    return res.status(500).json("Server Error...")
  }
}

export default checkActualPassword
