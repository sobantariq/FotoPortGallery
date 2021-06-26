import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../services/UserService";
import { toast } from "react-toastify";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Image from "../sbg.jpg";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    width: "100vw",
    height: "100vh",
    spacing: 0,
    justify: "space-around",
    flex: 1,
  },

  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(12),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: "white",
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Firstname, setFirstname] = React.useState("");
  const [Lastname, setLastname] = React.useState("");
  return (
    <Container
      style={{ color: "#474745" }}
      style={{ backgroundColor: "#333333" }}
      className={classes.paperContainer}
      width="100%"
      height="100%"
      elevation={3}
    >
      <Container component="main" maxWidth="xs" elevation={3}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            className="textfiled__label"
            InputLabelProps={{ className: "textfiled__label" }}
            component="h1"
            variant="h4"
          >
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputLabelProps={{ className: "textfiled__label" }}
                  InputProps={{
                    className: classes.input,
                  }}
                  Firstname="Firstname"
                  variant="filled"
                  color="secondary"
                  required
                  fullWidth
                  id="Fistname"
                  label="First Name"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />{" "}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  InputLabelProps={{ className: "textfiled__label" }}
                  InputProps={{
                    className: classes.input,
                  }}
                  Lastname="Lastname"
                  variant="filled"
                  color="secondary"
                  required
                  fullWidth
                  id="Lastname"
                  label="Last Name"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />{" "}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{ className: "textfiled__label" }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
              </Grid>
              <br />
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{ className: "textfiled__label" }}
                  InputProps={{
                    className: classes.input,
                  }}
                  variant="filled"
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />{" "}
              </Grid>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary  "
                onClick={(e) => {
                  userService
                    .register(Firstname, Lastname, email, password)
                    .then((data) => {
                      console.log(data);
                      props.history.push("/login");
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error(err.response.data, {
                        position: toast.POSITION.TOP_LEFT,
                      });
                      return alert("Please provide required data");
                    });
                }}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    className="textfiled__label"
                    href="/login"
                    variant="body2"
                    color="black"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Container>
  );
};

export default Register;
