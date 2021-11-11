import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Image, Text } from '../../elements/index';

import { history } from '../../redux/configureStore';
import BookMark from '../../assets/Icon/BookMark.svg';
import Rating from '@mui/material/Rating';

const MainReviewCard = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Container>
        <Grid
          hovers
          overFlow
          maxWidth="380px"
          height="285px"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          bg="#f8f8f8"
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid>
            <Grid height="170px" flexLeft>
              <Grid minWidth="170px">
                <Image src={props.reviewImg} />
                {/* <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F05jk8%2FbtqFNhPwZ8D%2FKSyAaHOZKrXHsq56K731e1%2Fimg.png" /> */}
              </Grid>
              <Grid margin="20px 20px" width="170px">
                <Rating
                  name="read-only"
                  size="large"
                  value={props.star}
                  readOnly
                />
                <Text
                  width="160px"
                  size="20px"
                  bold
                  margin="12px 0px"
                  textOverflow="ellipsis"
                  overFlow="hidden"
                  display="block"
                  webkitLine="2"
                  webkitBox="vertical"
                >
                  {/* <TextAbb> */}
                  {props.title}
                  {/* </TextAbb> */}
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid height="" padding="15px 30px 0px 30px ">
            <Grid>
              <Text
                width="320px"
                height="25px"
                size="14px"
                textOverflow="ellipsis"
                overFlow="hidden"
                display="block"
                webkitLine="2"
                webkitBox="vertical"
              >
                {props.content}
              </Text>
            </Grid>
            <Grid width="100%" margin="27px 0px" flexLeft>
              <Image
                shape="circle"
                src={
                  'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                }
              />
              <Text bold size="16px" margin="0px 8px">
                {props.nickname}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

// const TextAbb = styled.text`
//   width: 160px;
//   height: 70px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;

//   display: block;
//   display: -webkit-box;
//   word-break: break-all;
//   overflow: hidden;
//   line-height: 1.2em;
//   max-height: 2.4em; /* max: 4 lines */
//   position: relative;
//   margin-right: -1em;
//   padding-right: 1em;
//   width: 160px;
// `;

export default MainReviewCard;
