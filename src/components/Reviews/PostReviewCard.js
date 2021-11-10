import React from 'react';
import {
  Container,
  Grid,
  Image,
  Text,
  Icon,
  Buttons,
} from '../../elements/index';

import img1 from '../../assets/img1.jpg';
import Location from '../../assets/Icon/Location.svg';

const PostReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          isFlex
          overFlow
          maxWidth="1160px"
          minWidth="500px"
          height="257px"
          border="1px solid #ACACAC"
          borderRadius="10px"
        >
          <Grid minWidth="255px">
            <Image src={img1}></Image>
          </Grid>
          <Grid>
            <Grid width="400px" flexLeft>
              <Icon width="25px" src={Location} />
              <Text size="14px">서울시 포스팅주소</Text>
            </Grid>
            <Grid>
              <Text> 포스트 타이틀</Text>
              <Text> 포스트 콘텐츠</Text>
            </Grid>
            <section>
              <Grid flexLeft>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.distance}
                  </Text>
                </Grid>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.distance}
                  </Text>
                </Grid>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.distance}
                  </Text>
                </Grid>
              </Grid>
              <Grid flexLeft>
                <Image
                  shape="circle"
                  src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                />
                <Text size="14px">닉네임의 모임</Text>
              </Grid>
            </section>
          </Grid>

          <Grid width="70%">
            <Grid flexLeft>
              <Text size="14px" bold>
                모임날짜
              </Text>
              <Text size="14px">2021.10.26(화) pm 14:00</Text>
            </Grid>
            <Grid flexLeft>
              <Text size="14px" bold>
                모임인원
              </Text>
              <Text size="14px"> 8명 </Text>
            </Grid>
            <Grid flexLeft>
              <Text size="14px" bold>
                모집기간
              </Text>
              <Text size="14px">2021.10.26(화) pm 14:00</Text>
            </Grid>
            <Buttons enter> 모임 상세보기</Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostReviewCard;
