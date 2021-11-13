import React from 'react';
import { Container, Grid, Text, Button, Buttons } from '../elements/index';

import CommunityReviewCard from '../components/Community/CommunityReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const Reviews = (props) => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.review.list);
  // const reviewId = Number(props.match.params.reviewId);
  // console.log(reviewId);
  const review_list = reviewList?.slice(0).reverse();

  React.useEffect(() => {
    dispatch(reviewAction.getReviewDB());
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid center margin="40px 0px">
            <Text bold margin="20px 0px">
              커뮤니티
            </Text>
            <Text>줍깅 서비스를 이용해본 분들이 남긴 후기를 볼 수 있어요.</Text>
            <Text>줍깅러들의 생생한 이야기를 지금 만나보세요!</Text>
          </Grid>
          <Grid flexRight margin="30px 20px 90px 0px">
            <Buttons smallbottom>조회많은순</Buttons>
            <Buttons smallbottom>별점순</Buttons>
            <Buttons smallbottom>최근날짜순</Buttons>
          </Grid>
          <Grid grid>
            {review_list?.map((r, idx) => {
              return <CommunityReviewCard {...r} key={idx} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Reviews;
