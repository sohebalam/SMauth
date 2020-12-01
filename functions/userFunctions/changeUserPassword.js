import { validationResult } from "express-validator"
import bcryptjs from "bcryptjs"
import User from "../../schemas/User.js"

const changeUserPassword = async (req, res) => {
  try {
    const { newPassword } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() })
    let user = await User.findById(req.user.id)

    const salt = await bcryptjs.genSalt(10)

    const hashedPassword = await bcryptjs.hash(newPassword, salt)

    user.password = hashedPassword

    await user.save()

    res.json("Success")
  } catch (error) {
    console.error(error)
    return res.status(500).json("Server Error...")
  }
}

export default changeUserPassword
