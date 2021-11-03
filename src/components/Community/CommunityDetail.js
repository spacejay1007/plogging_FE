import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../elements/index';

import Rating from '@mui/material/Rating';

const CommunityDetail = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid>
            <Image></Image>
          </Grid>
          <Grid>
            <Grid flexLeft>
              <Image
                shape="circle"
                src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
              />
              <Text size="14px"> 닉네임의 모임</Text>
            </Grid>
            <Rating name="read-only" size="large" value={4} readOnly />
            <Text>너무 좋아요! 타이틀</Text>
            <Text>이번 플로깅 정말 제이있었고 좋은 분 들과 함께</Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityDetail;
