import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {  CardMedia, Card, CardActions, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import moment from 'moment';
import useStyles from './style';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={ post.link || post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>

  )
}

export default Post
