import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';

import BannerImg from '../assets/Icon/BannerImg.jpg';

// import BookMarks from '../assets/Icon/BookMarks.svg';

import Share from '../assets/Icon/Share.svg';
import { useDispatch } from 'react-redux';

import Rating from '@mui/material/Rating';

const MainBanner = (props) => {
  return (
    <React.Fragment>
      <Container width="100%">
        <Grid>
          <Grid height="392px">
            <Image src={BannerImg}></Image>
            <Grid width="300px" isPosition="absolute" height="392px" left="1px">
              <Text bold size="30px">
                닉네임님
              </Text>
              <Text bold size="30px">
                같이 줍깅 하실래요?
              </Text>
              <Button bold size="20px" width="269px" height="82px">
                같이 바로참여하기
              </Button>
            </Grid>
          </Grid>

          <Grid width="100%"></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainBanner;
