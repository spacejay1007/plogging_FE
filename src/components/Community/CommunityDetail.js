import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';

import Rating from '@mui/material/Rating';
import Location from '../../assets/Icon/Location.svg';

import img1 from '../../assets/img1.jpg';

const CommunityDetail = () => {
  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid isFlex>
          <Grid
            width="770px"
            height="770px"
            border="1px solid"
            borderRadius="10px"
            overFlow
          >
            <Image src={img1}></Image>
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
            <Text>이번 플로깅 정말 재미있었고 좋은 분 들과 함께</Text>
            <Grid border="1px solid" borderRadius="10px" overFlow>
              <Text>플로깅 장소 명칭쓸거예요 PostingTile</Text>
              <Grid flexLeft>
                <Icon width="25px" src={Location} />
                <Text size="14px">서울시 포스팅주소</Text>
              </Grid>
              <Grid bg="#C4C4C4">
                <Text>모임날짜 2021.10.26</Text>
                <Text>모임인원 8명</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityDetail;
