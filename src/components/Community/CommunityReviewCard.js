import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import { history } from '../../redux/configureStore';
import Rating from '@mui/material/Rating';
import img1 from '../../assets/img1.jpg';

const CommunityReviewCard = (props) => {
  console.log(props);

  return (
    <React.Fragment>
      <Container>
        <Grid
          width="370px"
          height="370px"
          border="1px solid"
          borderRadius="10px"
          overFlow
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid width="100%">
            <Grid height="200px">
              <Image src={img1}></Image>
              {/* <Image src={props.reviewImg}></Image> */}
            </Grid>
            <Grid>
              <Grid isFlex>
                <Grid flexLeft>
                  <Image shape="circle" src={props.userImg} />
                  <Text size="14px">{props.nickname}의 모임</Text>
                </Grid>
                <Rating
                  name="read-only"
                  size="midieum"
                  value={props.star}
                  readOnly
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityReviewCard;
