import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';

import Rating from '@mui/material/Rating';
import img1 from '../../assets/img1.jpg';

const CommunityReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          width="370px"
          height="370px"
          border="1px solid"
          borderRadius="10px"
          overFlow
        >
          <Grid isFlex>
            <Grid flexLeft>
              <Image
                shape="circle"
                src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
              />
              <Text size="14px">닉네임의 모임</Text>
            </Grid>
            <Rating name="read-only" size="midieum" value={4} readOnly />
          </Grid>
          <Image src={img1}></Image>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityReviewCard;
