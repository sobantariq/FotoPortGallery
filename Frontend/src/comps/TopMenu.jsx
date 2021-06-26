import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    paddingRight: "1rem",
  },
  fotoport: {
    color: "#f0a46e",
    fontSize: "22px",
    flexGrow: 1,
  },
  logintext: {
    color: "black",
    fontSize: "16px",
    flexGrow: 1,
  },

  logout: {
    top: -3,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  login: {
    top: -3,
    left: -3,
    right: 0,
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#474745" }} position="static">
        <Toolbar>
          <Typography className={classes.fotoport} variant="h6">
            FotoPort
          </Typography>
          {!userService.isLoggedIn() ? (
            <>
              <Button
                className={classes.login}
                variant="contained"
                style={{ background: "#f0a46e" }}
                onClick={(e) => {
                  window.location.href = "/login";
                }}
              >
                <Typography className={classes.logintext} variant="h6">
                  Login
                </Typography>
              </Button>
              <Button
                className={classes.logout}
                variant="contained"
                style={{ background: "#f0a46e" }}
                onClick={(e) => {
                  window.location.href = "/register";
                }}
              >
                <Typography className={classes.logintext} variant="h6">
                  Register
                </Typography>
              </Button>
            </>
          ) : (
            <Button
              className={classes.logout}
              variant="contained"
              style={{ background: "#f0a46e" }}
              onClick={(e) => {
                userService.logout();
                window.location.href = "/login";
              }}
            >
              LogOut {userService.getLoggedInUser().Firstname}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
