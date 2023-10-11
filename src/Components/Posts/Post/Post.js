import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import moment from 'moment';
// import useStyles from './style';


// import {  CardMedia, Card, CardActions, Button, Typography } from '@material-ui/core/';

import { CardMedia, Card, CardActions, Button, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from './Post.module.css';

const Post = ({ post, setCurrentId }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <Card className={styles.card}>
      <CardMedia className={styles.media} image={ post.link || post.selectedFile} title={post.title} />
      <div className={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <CardActions className={styles.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><Chip label="Delete"  /> Delete</Button>
      </CardActions>
    </Card>

  )
}

export default Post
