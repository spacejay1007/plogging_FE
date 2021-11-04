import React from 'react';
import { Container, Grid, Text, Button } from '../elements/index';

import CommunityReviewCard from '../components/Community/CommunityReviewCard';

const Community = () => {
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
            <CommunityReviewCard />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Community;
