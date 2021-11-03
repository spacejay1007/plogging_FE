import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../elements/index';

import Rating from '@mui/material/Rating';

const CommunityReviewCard = () => {
  return (
    <React.Fragment>
      <Container width="370px" height="370px">
        <Grid>
          <Text></Text>
          <Rating name="read-only" size="large" value={4} readOnly />
          <Image></Image>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityReviewCard;
