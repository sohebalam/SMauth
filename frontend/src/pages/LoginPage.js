import React, { useState } from "react"
import { loginUser } from "../actions/auth.actions/loginUser"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"

import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import LinkTo from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const LoginPage = ({ loginUser, error }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = userData
  const classes = useStyles()
  // const onChange = (e) =>
  //   setUserData({ ...userData, [e.target.name]: e.target.value })

  return (
    // <main className="register-page-wrapper">
    //   <form className="register-section">
    //     <div className="inputs-wrapper">
    //       <header className="register-header-wrapper">
    //         <p className="font__p p__size register-header">
    //           <i className="fas fa-users users-icon app_color_font"></i>
    //           Log in
    //         </p>
    //       </header>

    //       <div className="label-wrapper">
    //         <label className="label__register p__size">E-mail</label>
    //       </div>
    //       <input
    //         name="email"
    //         value={email}
    //         type="email"
    //         onChange={(e) => onChange(e)}
    //       />

    //       <div className="label-wrapper">
    //         <label className="label__register p__size">Password</label>
    //       </div>
    //       <input
    //         name="password"
    //         type="password"
    //         value={password}
    //         onChange={(e) => onChange(e)}
    //       />

    //       <div className="label-wrapper">
    //         <Link to="/register">
    //           <p className="p__size font__p password__info">Sign up</p>
    //         </Link>
    //       </div>
    //       {error && (error !== null || error !== "" || error !== {}) && (
    //         <ErrorMessage errorMessage="Wrong e-mail or password" />
    //       )}

    //       <div
    //         className="button-wrapper app_color_background"
    //         onClick={(e) => loginUser(userData)}
    //       >
    //         <p className="button-letter">Log in</p>
    //       </div>
    //     </div>
    //   </form>
    // </main>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <LinkTo href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </LinkTo>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  error: state.auth.errors,
})

export default connect(mapStateToProps, { loginUser })(LoginPage)
