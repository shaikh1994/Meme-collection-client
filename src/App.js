import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

import { useDispatch } from 'react-redux';
import UploadLink from "./Components/UploadLink"
import Posts from "./Components/Posts/Posts"

// import { Container,  Grid } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { getPosts } from './actions/posts';

 const App = () => {
  const dispatch = useDispatch();
  const [ currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth = "lg">
      <Navbar />
        <Grid style={{marginTop: 20, marginBottom:20 }}>
          <UploadLink currentId={setCurrentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid>
            <Posts setCurrentId={setCurrentId}/>
        </Grid>
      </Container>
  );
};

export default App;
