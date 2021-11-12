import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import { history } from '../../redux/configureStore';
import Rating from '@mui/material/Rating';
import img1 from '../../assets/img1.jpg';

const CommunityReviewCard = (props) => {
  // console.log(props);

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid
          hovers
          width="100%"
          border="1px solid #DCDCDC"
          borderRadius="10px"
          overFlow
          _onClick={() => {
            history.push(`/review/${props.reviewId}`);
          }}
        >
          <Grid width="360px">
            <Grid width="100%">
              <Image src={props.reviewImg}></Image>
            </Grid>
            {/* <Image src={props.reviewImg}></Image> */}
          </Grid>
          <Grid width="360px">
            <Grid margin="5px 10px 0px 10px ">
              <Grid flexRight>
                <Text size="10px" color="#666666">
                  {Math.abs(props.writeDateBefore)}일전
                </Text>
              </Grid>
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
