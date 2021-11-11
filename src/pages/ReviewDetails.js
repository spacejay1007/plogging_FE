import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Image, Text, Icon } from '../elements/index';
import DetailPostInfo from '../components/Community/DetailPostInfo';
import DetailReviewInfo from '../components/Community/DetailReviewInfo';

import Rating from '@mui/material/Rating';
import Location from '../assets/Icon/Location.svg';

// import CommunityDetail from '../components/Community/CommunityDetail';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.review.detail?.review);
  const post = useSelector((state) => state.review.detail?.post);
  const reviewId = Number(props.match.params.reviewId);
  console.log(post);
  React.useEffect(() => {
    dispatch(reviewAction.detailReviewDB(reviewId));
  }, []);

  const reviewImg = detail?.reviewImg;
  const reviewUserImg = detail?.userImg;
  const reviewNickName = detail?.nickname;
  const star = Number(detail?.star);
  const level = Number(detail?.levelRate);
  const sati = Number(detail?.satiRate);
  const trash = Number(detail?.trashRate);
  const content = detail?.content;
  const reviewTitle = detail?.title;
  const postTitle = post?.title;
  const postUserImg = post?.userImg;
  const postNickName = post?.nickname;
  const runningDate = post?.runningDate;
  const limitPeople = post?.limitPeople;
  const type = post?.type;
  const location = post?.location;
  const distance = post?.distance;

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid centerFlex margin="135px 0px ">
          <Grid
            minWidth="770px"
            height="770px"
            border="1px solid #DCDCDC"
            borderRadius="10px"
            overFlow
            margin="0px 74px 0px 0px"
          >
            <Image src={reviewImg}></Image>
          </Grid>

          <Grid>
            <DetailPostInfo post={post} />

            <Grid height="256px">
              <DetailReviewInfo detail={detail} />
            </Grid>

            <Grid height="256px">
              <Text>{reviewTitle}</Text>
              <Text>{content}</Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

// const StarSize = styled.span`
//   .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
//     font-size: 50px;
//   }
// `;

// const Section = styled.section``;

export default ReviewDetail;
