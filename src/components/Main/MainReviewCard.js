import React from 'react';
import { Container, Grid, Image, Text } from '../../elements/index';
import BookMark from '../../assets/Icon/BookMark.svg';
import Rating from '@mui/material/Rating';

const MainReviewCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Container>
        <Grid
          overFlow
          maxWidth="380px"
          height="281px"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          bg="#f8f8f8"
        >
          <Grid height="100%">
            <Grid height="50%" isFlex>
              <Grid width="50%">
                <Image src={props.reviewImg} />
                {/* <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F05jk8%2FbtqFNhPwZ8D%2FKSyAaHOZKrXHsq56K731e1%2Fimg.png" /> */}
              </Grid>
              <Grid width="50%" padding="20px 20px 8px 24px">
                <Rating
                  name="read-only"
                  size="large"
                  value={props.star}
                  readOnly
                />
                <Text size="20px" bold margin="12px 0px">
                  타이틀 들어갈거예여
                </Text>
              </Grid>
            </Grid>
            <Grid height="40%" padding="16px 30px 0px 30px ">
              <Grid height="50%" width="100%">
                <Text size="14px">{props.content}</Text>
              </Grid>
              <Grid width="100%" margin="27px 0px" flexLeft>
                <Image shape="circle" src={props.userImg} />
                <Text bold size="16px">
                  {props.nickname}
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
