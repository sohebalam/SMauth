import User from "../../schemas/User.js"

const getUserByEmail = async (req, res) => {
  try {
    let userEmail = req.params.user_email
    let user = await User.findOne({ email: userEmail }).select("-password")
    res.json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json("Server Error...")
  }
}

export default getUserByEmail
