import React from "react";
import './Styles/app.css'
import styles from './Navbar.module.css';

import { Paper, Grid } from '@mui/material';



export default function Navbar() {
  // const classes = useStyles();
  return (
    <div className={styles.root}>
    <Grid item xs={12}>
      <Paper className={styles.paper}>
        <h1>
          Image Storage System
        </h1>
        <h3>
          Save your meme to cherish forever
        </h3>
      </Paper>
    </Grid>
  </div>
);
}
