import React from 'react';
import { Container, Grid, Text, Button, Buttons } from '../elements/index';

import CommunityReviewCard from '../components/Community/CommunityReviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';

const Reviews = (props) => {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.review.list);

  const [recentSort, setRecentSort] = React.useState(true);
  const [starSort, setStarSort] = React.useState(false);
  // const reviewId = Number(props.match.params.reviewId);
  // console.log(reviewId);
  const clickRecentSort = () => {
    setRecentSort(true);
    setStarSort(false);
  };
  const clickStarSort = () => {
    setStarSort(true);
    setRecentSort(false);
  };

  const review_list = reviewList?.slice(0).reverse();
  const star_list = reviewList
    .filter((x) => {
      return x.star >= 1;
    })
    .sort(function (a, b) {
      return b.star - a.star;
    });

  console.log(star_list);
  React.useEffect(() => {
    dispatch(reviewAction.getReviewDB());
  }, []);

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid margin="140px 0px">
          <Grid center>
            <Text bold size="30px" margin="20px 0px">
              커뮤니티
            </Text>
            <Text>줍깅 서비스를 이용해본 분들이 남긴 후기를 볼 수 있어요.</Text>
            <Text>줍깅러들의 생생한 이야기를 지금 만나보세요!</Text>
          </Grid>
          <Grid width="1440px" flexRight margin="30px 0px 90px 0px">
            <Buttons smallbottom _onClick={clickRecentSort}>
              최근날짜순
            </Buttons>
            <Buttons smallbottom _onClick={clickStarSort}>
              별점순
            </Buttons>
            <Buttons smallbottom>조회많은순</Buttons>
          </Grid>
          <Grid grid>
            {recentSort && !starSort ? (
              <>
                {' '}
                {review_list?.map((r, idx) => {
                  return <CommunityReviewCard {...r} key={idx} />;
                })}
              </>
            ) : (
              ''
            )}
            {!recentSort && starSort ? (
              <>
                {' '}
                {star_list?.map((r, idx) => {
                  return <CommunityReviewCard {...r} key={idx} />;
                })}
              </>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Reviews;
