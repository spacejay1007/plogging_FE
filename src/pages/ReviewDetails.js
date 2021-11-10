import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Image, Text, Icon } from '../elements/index';

import Rating from '@mui/material/Rating';
import Location from '../assets/Icon/Location.svg';

// import CommunityDetail from '../components/Community/CommunityDetail';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.review.detail?.review);
  const reviewId = Number(props.match.params.reviewId);

  React.useEffect(() => {
    dispatch(reviewAction.detailReviewDB(reviewId));
  }, []);

  const reviewImg = detail?.reviewImg;
  const userImg = detail?.userImg;
  const nickName = detail?.nickname;
  const star = Number(detail?.star);
  const level = Number(detail?.levelRate);
  const sati = Number(detail?.satiRate);
  const trash = Number(detail?.trashRate);
  const content = detail?.content;
  const postTitle = detail?.postTitle;
  const location = detail?.location;
  const runningDate = detail?.runningDate;
  const limitPeople = detail?.limitPeople;

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid centerFlex>
          <Grid
            minWidth="770px"
            height="770px"
            border="1px solid #DCDCDC"
            borderRadius="10px"
            overFlow
          >
            <Image src={reviewImg}></Image>
          </Grid>

          <Grid>
            <Grid
              width="370px"
              height="240px"
              border="1px solid"
              borderRadius="10px"
              overFlow
            >
              <Text>{postTitle}</Text>
              <Grid flexLeft>
                <Icon width="25px" src={Location} />
                <Text size="14px">서울시 {location}</Text>
              </Grid>
              <Grid bg="#C4C4C4">
                <Text>모임날짜 {runningDate}</Text>
                <Text>모임인원 {limitPeople}명</Text>
              </Grid>
            </Grid>
            <Grid flexLeft>
              <Image shape="circle" src={userImg} />
              <Text size="14px"> {nickName}</Text>
            </Grid>
            <StarSize>
              <Grid flexLeft>
                <Text align="center">총평 </Text>
                <Rating name="read-only" size="large" value={star} readOnly />
              </Grid>
            </StarSize>
            <Section>
              <Text>
                코스 난이도{' '}
                <Rating name="read-only" size="midium" value={level} readOnly />
              </Text>
            </Section>
            <Section>
              <Text>
                쓰레기 양{' '}
                <Rating name="read-only" size="midium" value={trash} readOnly />
              </Text>
            </Section>
            <Section>
              <Text>
                만족도{' '}
                <Rating name="read-only" size="midium" value={sati} readOnly />
              </Text>
            </Section>

            <Text>너무 좋아요! 타이틀</Text>
            <Text>{content}</Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const StarSize = styled.span`
  .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
    font-size: 50px;
  }
`;

const Section = styled.section``;

export default ReviewDetail;
