import React, { useState } from "react";
// import {Paper, TextField, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts'


import styles from './UploadLink.module.css';
import { Paper, Grid, TextField, Button } from '@mui/material';


export default function UploadLink({ currentId,setCurrentId })  {
  const [postData, setPostData] = useState({ link: '', selectedFile: ''});
  const dispatch = useDispatch();


  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createPost(postData));
  }

  return (
    <Paper className={styles.root}>
      <form autoComplete = "off" noValidate className={styles.form} onSubmit={handleSubmit}>
        <TextField className={styles.fileInput}  name= "link" label="Link" fullwidth = "true" value={postData.link} onChange={(e) => setPostData({ ...postData, link: e.target.value})} />
      <div className={styles.picSubmit}  ><FileBase className={styles.file} type= 'file' multiple = {false} onDone= {({ base64 }) => setPostData({...postData, selectedFile: base64})} /></div>
      <Button className={styles.linkSubmit} variant= 'contained' type="submit">UploadPic </Button>
      </form>
    </Paper>
  )
}
