import React, { useState } from "react";
import {Paper, TextField, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts'
import useStyles from './Styles/UploadLink';

export default function UploadLink({ currentId,setCurrentId })  {
  const [postData, setPostData] = useState({ link: '', selectedFile: ''});
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createPost(postData));
  }

  return (
    <Paper className={classes.root}>
      <form autoComplete = "off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <TextField className={classes.fileInput}  name= "link" label="Link" fullwidth = "true" value={postData.link} onChange={(e) => setPostData({ ...postData, link: e.target.value})} />
      <div className={classes.picSubmit}  ><FileBase className={classes.file} type= 'file' multiple = {false} onDone= {({ base64 }) => setPostData({...postData, selectedFile: base64})} /></div>
      <Button className={classes.linkSubmit} variant= 'contained' type="submit">UploadPic </Button>
      </form>
    </Paper>
  )
}
