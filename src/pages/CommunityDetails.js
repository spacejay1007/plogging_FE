import React from 'react';
import { Container, Grid, Text, Button } from '../elements/index';

import CommunityDetail from '../components/Community/CommunityDetail';

const CommunityDetails = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <CommunityDetail />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CommunityDetails;
