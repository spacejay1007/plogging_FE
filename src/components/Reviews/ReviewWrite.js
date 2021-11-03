import React from 'react';

import { Container, Grid, Text, Input, Button } from '../../elements/index';
import ReviewPhoto from './ReviewPhoto';
import Rating from '@mui/material/Rating';
import { history } from '../../redux/configureStore';

const ReviewWrite = (props) => {
  const [reviewTitle, setReviewTitle] = React.useState('');
  const [reviews, setReviews] = React.useState('');
  const reviewTitleChange = (e) => {
    setReviewTitle(e.target.value);
  };
  const reviewChange = (e) => {
    setReviews(e.target.value);
  };
  const reviewsClick = () => {
    console.log('리뷰완성');
    setReviewTitle('');
    setReviews('');
    history.push('/');
  };

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid center>
          <Grid width="100%">
            <Text>이번 플로깅은 어땠나요? 별점을 남겨주세요!</Text>
            <Rating name="simple-controlled" size="large" />
          </Grid>
          <Grid isFlex width="100%">
            <Grid flexLeft>
              <Text>만족도</Text>
              <Rating name="simple-controlled" size="small" />
            </Grid>
            <Grid flexLeft>
              <Text>난이도</Text>
              <Rating name="simple-controlled" size="small" />
            </Grid>
            <Grid flexLeft>
              <Text>플로깅 양</Text>
              <Rating name="simple-controlled" size="small" />
            </Grid>
          </Grid>
          <Text>당신의 플로깅 이야기를 들려주세요</Text>
          {/* <Input></Input>
          <Input></Input> */}
        </Grid>

        <Grid>
          <Input
            placeholder="제목을 입력해주세요(14자 이내)"
            value={reviewTitle}
            _onChange={reviewTitleChange}
          ></Input>
        </Grid>
        <Input
          multiLine
          border="1px solid "
          borderRadius="10px"
          placeholder="어떤 일이 있었나요? 혹은 어떤 점이 좋았나요?"
          value={reviews}
          _onChange={reviewChange}
        ></Input>

        <ReviewPhoto />

        <Grid>
          <Button _onClick={reviewsClick}>후기올리기</Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ReviewWrite;
