import React from 'react';

import { Container, Grid, Image, Text, Icon } from '../elements/index';
import DetailPostInfo from '../components/Community/DetailPostInfo';
import DetailReviewInfo from '../components/Community/DetailReviewInfo';

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
  const content = detail?.content;
  const reviewTitle = detail?.title;

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid centerFlex margin="135px 0px ">
          <Grid
            minWidth="770px"
            height="770px"
            border="1px solid #DCDCDC"
            borderRadius="25px"
            overFlow
            margin="0px 74px 0px 0px"
          >
            <Image src={reviewImg}></Image>
          </Grid>

          <Grid>
            <Grid borderRadius="10px" isShadow>
              <DetailPostInfo post={post} />
            </Grid>
            <Grid height="256px">
              <DetailReviewInfo detail={detail} />
            </Grid>

            <Grid width="370px" height="280px" padding="40px 0px 0px 0px ">
              <Text bold size="40px">
                {reviewTitle}
              </Text>
              <Text margin="30px 0px 0px 0px">{content}</Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ReviewDetail;
