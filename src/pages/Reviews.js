import React from 'react';
import { Container, Grid, Text, Button } from '../elements/index';

import CommunityReviewCard from '../components/Community/CommunityReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const Reviews = (props) => {
  const dispatch = useDispatch();
  const review_list = useSelector((state) => state.review.list);
  console.log(review_list.reviewId);

  React.useEffect(() => {
    dispatch(reviewAction.getReviewDB());
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid center>
            <Text bold>커뮤니티</Text>
            <Text>커뮤니티를 확인해보세요!</Text>
          </Grid>
          <Grid flexRight>
            <Button>조회많은순</Button>
            <Button>별점순</Button>
            <Button>최근날짜순</Button>
          </Grid>
          <Grid>
            {review_list.map((r, idx) => {
              return <CommunityReviewCard {...r} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Reviews;
