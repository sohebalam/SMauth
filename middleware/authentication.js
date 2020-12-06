import config from "config"
import jwt from "jsonwebtoken"

const authentication = (req, res, next) => {
  const token = req.header("authentication-token")
  const decoded = jwt.verify(token, config.get("jsonWebTokenSecret"))
  req.user = decoded.user
  next()
}

export default authentication
