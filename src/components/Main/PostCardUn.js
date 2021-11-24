import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Image,
  Text,
  Icon,
  Bottons,
} from '../../elements/index';

import { history } from '../../redux/configureStore';
import MainNull from '../../assets/Icon/MainNull.svg';
import Rating from '@mui/material/Rating';

const MainReviewCard = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid width="1200px" height="400px">
          <Grid centerColumnFlex width="100%" isPosition="relative">
            <Image shape="rec" width="120px" height="105px" src={MainNull} />
          </Grid>
          <Text align="center" bold color="#666666">
            조건에 맞는 모임이 아직 없습니다.
          </Text>
          <Text align="center" bold color="#666666">
            나만의 줍깅 모임을 직접 만들어 보세요!
          </Text>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainReviewCard;
