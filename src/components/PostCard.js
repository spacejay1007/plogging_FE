import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';
import Share from '../assets/Icon/Share.svg';

const PostCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid flexBasis>
          <Grid
            maxWidth="300px"
            width="100%"
            border="1px solid #DCDCDC"
            borderRadius="7px"
            margin="16px"
            overFlow
          >
            <Image src="https://www.fashionn.com/files/board/2014/image/p18kdfg8duhp31ga61ear1biulqb1.jpg" />
            <Grid padding="16px 10px">
              <Grid isFlex>
                <Text margin="12px 0px" size="12px">
                  # 도심속플로깅 # 점심플로깅
                </Text>
                <Grid isFlex>
                  <Icon width="25px" src={BookMark} />
                  <Icon width="25px" src={Share} />
                </Grid>
              </Grid>
              <Text bold size="23px" marg>
                플로깅 장소 명칭쓸거예요
              </Text>

              <Text margin="3px 10px" size="12px">
                서울시 강남구 삼성동
              </Text>

              <Grid flexLeft margin="12px 0px">
                <Text size="17px" bold>
                  모임날짜
                </Text>
                <Text margin="0px 0px 0px 10px" size="17px">
                  2021.10.26 (화) PM 2:00
                </Text>
              </Grid>
              <Grid flexLeft margin="12px 0px">
                <Text size="17px" bold>
                  모집인원
                </Text>
                <Text margin="0px 0px 0px 10px" size="17px">
                  20 명 / 30 명
                </Text>
              </Grid>
            </Grid>
            <Button width="100%" height="50px" bold size="14px" border="1px">
              지금 바로 참여하기
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container></Container>
    </React.Fragment>
  );
};

export default PostCard;
