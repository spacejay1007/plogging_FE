// ReviewTab card
import React from 'react';
import { Container, Grid, Image, Text } from '../../elements';
import { history } from '../../redux/configureStore';
import Rating from '@mui/material/Rating';

const ReviewTab = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          width='1161px'
          height='313px'
          border='1px solid'
          borderRadius='10px'
          overFlow
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid isFlex>
            <Grid flexLeft>
              <Image shape='circle' src={props.userImg} />
              <Text size='14px'>{props.nickname}의 모임</Text>
            </Grid>
            <Rating
              name='read-only'
              size='midieum'
              value={props.star}
              readOnly
            />
          </Grid>
          <Image src={props.reviewImg}></Image>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ReviewTab;