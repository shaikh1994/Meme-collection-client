import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
// import useStyles from './style';

// import { Grid, CircularProgress } from '@material-ui/core';

import { Grid, CircularProgress } from '@mui/material';
import styles from './Posts.module.css';

 const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // const classes = useStyles();
  return (
    !posts.length ? <CircularProgress /> : (
        <Grid className={styles.container} container alignItems="stretch" spacing={6}>
            {
            posts.map((post) => (
              
              <Grid key = {post._id} item xs={12} sm={6} md={6}>
                <Post post= {post} setCurrentId={setCurrentId}/>
              </Grid>
            ))}
        </Grid>
    )
)
}
export default Posts
