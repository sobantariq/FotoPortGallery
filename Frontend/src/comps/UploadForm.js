import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },

  add: {
    alignItem: "center",
    margin: "0 auto",
  },
}));

const UploadForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const hiddenFileInput = React.useRef(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select valid image format (png or jpeg)");
    }
  };

  return (
    <form>
      <CssBaseline />

      <AppBar
        position="fixed"
        style={{ background: "#474745" }}
        className={classes.appBar}
      >
        <Toolbar>
          <label className="label2">
            <input type="file" onChange={changeHandler} />
            <span className="plus">+</span>
            <AddIcon className={classes.add} style={{ color: "#474745" }} />
          </label>
        </Toolbar>
      </AppBar>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
