import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';
// import BookMarks from '../assets/Icon/BookMarks.svg';

import Share from '../assets/Icon/Share.svg';
import { useDispatch } from 'react-redux';

import Rating from '@mui/material/Rating';

const MainReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          flexLeft
          overFlow
          maxWidth="570px"
          height="362px"
          border="1px solid #DCDCDC"
          borderRadius="5px"
        >
          <Grid width="100%" isFlex>
            <Grid width="50%" padding="16px" isPosition="relative">
              <Image src="https://www.tournews21.com/news/photo/202108/48334_85546_5231.jpg" />
            </Grid>
            <Grid width="50%">
              <Grid width="100%" padding="16px" flexLeft>
                <Image
                  shape="circle"
                  src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                />
                <Text size="12px">userNickName</Text>
              </Grid>
              <Grid>
                <Rating name="read-only" value={5} readOnly />
                <Text size="15px" bold>
                  너무 좋아요
                </Text>
                <Text size="15px">
                  플로깅 처음 했는데 너무 좋고.... 어떻고, 플로깅(쓰레기줍기)는
                  얼마나 했고, 다음에 또 하고 싶은데 다음에는...
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainReviewCard;
