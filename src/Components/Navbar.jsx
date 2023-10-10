import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core';
import './Styles/app.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#ADEFD1FF',
    backgroundColor: 'transparent'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <h1>
          MEME Gallery
        </h1>
        <h3>
          Save your meme to cherish forever
        </h3>
      </Paper>
    </Grid>
  </div>
);
}
