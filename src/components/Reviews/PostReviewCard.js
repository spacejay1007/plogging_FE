import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';

import img1 from '../../assets/img1.jpg';
import Location from '../../assets/Icon/Location.svg';

const PostReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid
          isFlex
          overFlow
          width="100%"
          height="264px"
          border="1px solid #ACACAC"
          borderRadius="10px"
        >
          <Grid width="30%">
            <Image src={img1}></Image>
          </Grid>
          <Grid width="70%">
            {/* <Grid flexLeft>
              <Image
                shape="circle"
                src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
              />
              <Text size="14px">닉네임의 모임</Text>
            </Grid> */}
            <Text>플로깅 장소 명칭 쓸거예요</Text>
            <Grid flexLeft>
              <Icon width="25px" src={Location} />
              <Text size="14px">서울시 포스팅주소</Text>
            </Grid>
            <Grid flexLeft>
              <Text bold>모임날짜</Text>
              <Text>2021.10.26(화) pm 14:00</Text>
            </Grid>
            <Grid flexLeft>
              <Text bold>모임인원</Text>
              <Text> 8명 </Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostReviewCard;
