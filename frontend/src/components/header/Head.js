import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import theme from "../../theme"
import "./head.css"
import { connect } from "react-redux"
import { logOut } from "../../actions/auth.actions/logOut"
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}))

const Navbar = ({ logOut, auth: { isLoggedIn } }) => {
  let [isSidebar, setSidebar] = useState(false)
  return (
    <>
      {/* <NavbarLinks logOut={logOut} isLoggedIn={isLoggedIn} /> */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography edge="start">
            <h3>OpenFreeUni</h3>
          </Typography>
          <IconButton aria-label="menu">
            {" "}
            {<img src="../images/v3.png" height="40px" alt="logo" />}
          </IconButton>

          <Typography variant="h6" style={{ flex: 1 }}></Typography>
          <Button style={{ color: "white" }} edge="start" aria-label="menu">
            {" "}
            Users
          </Button>
          <Button style={{ color: "white" }} edge="start" aria-label="menu">
            {" "}
            Profile
          </Button>

          <Button
            href="/login"
            onClick={() => {
              logOut()
              setSidebar(false)
            }}
            // style={{ display: isSidebar && isLoggedIn ? "block" : "none" }}
          >
            Log Out
          </Button>

          <Button
            style={
              ({ display: isSidebar && !isLoggedIn ? "block" : "none" },
              { color: "white" })
            }
            edge="start"
            aria-label="menu"
            href="/login"
            onClick={() => setSidebar(false)}
          >
            Login
          </Button>
          <Button
            style={
              ({ display: isSidebar && !isLoggedIn ? "block" : "none" },
              { color: "white" })
            }
            edge="start"
            aria-label="menu"
            href="/register"
            onClick={() => setSidebar(false)}
          >
            {" "}
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <hr />
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logOut })(Navbar)
