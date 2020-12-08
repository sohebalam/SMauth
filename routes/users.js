import express from "express"
// import Router from 'express-router'
import authentication from "../middleware/authentication.js"
import getUserByMiddleware from "../functions/userFunctions/getUserByMiddleware.js"
import getUserByEmail from "../functions/userFunctions/getUserByEmail.js"
import getUsers from "../functions/userFunctions/getUsers.js"
import getUserById from "../functions/userFunctions/getUserById.js"
import registerUser from "../functions/userFunctions/registerUser.js"
import loginUser from "../functions/userFunctions/loginUser.js"

import {
  registerUserValidator,
  loginUserValidator,
  searchUserByUsernameValidator,
  changeUserDataValidator,
  checkActualPasswordValidator,
  changeUserPasswordValidator,
} from "../middleware/express-validator/expressValidator.js"

import changeUserData from "../functions/userFunctions/changeUserData.js"
import checkActualPassword from "../functions/userFunctions/checkActualPassword.js"
import changeUserPassword from "../functions/userFunctions/changeUserPassword.js"

const router = express.Router()

router.get("/", authentication, getUserByMiddleware)

router.get("/get_user_by_email/:user_email", getUserByEmail)

router.get("/users", getUsers)

router.get("/get_user_by_id/:user_id", getUserById)

router.post("/register", registerUserValidator, registerUser)

router.post("/login", loginUserValidator, loginUser)

router.put(
  "/change_user_data/:user_data_to_change",
  authentication,
  changeUserDataValidator,
  changeUserData
)

router.put(
  "/check_acutal_password",
  authentication,
  checkActualPasswordValidator,
  checkActualPassword
)

router.put(
  "/change_user_password",
  authentication,
  changeUserPasswordValidator,
  changeUserPassword
)
export default router
