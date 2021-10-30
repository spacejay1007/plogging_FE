import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';
// import BookMarks from '../assets/Icon/BookMarks.svg';

import Share from '../assets/Icon/Share.svg';
import { useDispatch } from 'react-redux';

import Rating from '@mui/material/Rating';

const MainBanner = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Image></Image>
        </Grid>
        <Button></Button>
      </Container>
    </React.Fragment>
  );
};

export default MainBanner;
