import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../services/UserService";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "../sbg.jpg";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    //backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    border: "white",
  },
  input: {
    color: "white",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        style={{ backgroundColor: "#2e2e2d" }}
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div style={{ color: "#474745" }} className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography className="textfiled__label" component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className="textField"
              InputLabelProps={{ className: "textfiled__label" }}
              InputProps={{
                className: classes.input,
              }}
              variant="filled"
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              variant="filled"
              margin="normal"
              InputLabelProps={{ className: "textfiled__label" }}
              InputProps={{
                className: classes.input,
              }}
              required
              fullWidth
              //backgroundColor="#fcfaf7"
              color="secondary"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              className="textfiled__label"
              control={
                <Checkbox
                  className="textfiled__label"
                  value="remember"
                  color="default"
                />
              }
              label="Remember me"
            />
            <br />
            <Button
              fullWidth
              variant="contained"
              color="default"
              onClick={(e) => {
                userService
                  .login(email, password)

                  .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                  })
                  .catch((err) => {
                    return alert("Password or Email incorrect");
                  });
              }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  className="textfiled__label"
                  href="/register"
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
