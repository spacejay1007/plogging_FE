import React, { useState, useEffect } from 'react';
import { history } from '../redux/configureStore';
import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons, Icon } from '../elements/index';

const CampaignDetail = (props) => {
  return (
    <React.Fragment>
      <Grid centerColumnFlex>
        <Text bold color="#888888" size="50px">
          캠페인 페이지
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default CampaignDetail;
