import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import Location from '../../assets/Icon/Location.svg';
import Rating from '@mui/material/Rating';

const DetailPostInfo = (props) => {
  const detail = props.detail;

  const reviewImg = detail?.reviewImg;
  const reviewUserImg = detail?.userImg;
  const reviewNickName = detail?.nickname;
  const star = Number(detail?.star);
  const level = Number(detail?.levelRate);
  const sati = Number(detail?.satiRate);
  const trash = Number(detail?.trashRate);
  const content = detail?.content;
  const reviewTitle = detail?.title;
  return (
    <React.Fragment>
      <Grid flexLeft>
        <Image shape="circle" src={reviewUserImg} />
        <Text size="14px"> {reviewNickName}</Text>
      </Grid>
      <StarSize>
        <Grid flexLeft>
          <Text align="center" color="#333">
            {' '}
            총평{' '}
          </Text>
          <Rating name="read-only" size="large" value={star} readOnly />
        </Grid>
      </StarSize>

      <Grid width="250px">
        <section>
          <Grid isFlex>
            <Text color="#333">코스 난이도 </Text>
            <Rating name="read-only" size="midium" value={level} readOnly />
          </Grid>
        </section>
        <section>
          <Grid isFlex>
            <Text color="#333">쓰레기 양 </Text>
            <Rating name="read-only" size="midium" value={trash} readOnly />
          </Grid>
        </section>
        <section>
          <Grid isFlex>
            <Text color="#333">만족도</Text>
            <Rating name="read-only" size="midium" value={sati} readOnly />
          </Grid>
        </section>
      </Grid>
    </React.Fragment>
  );
};
const StarSize = styled.span`
  .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
    font-size: 50px;
  }
`;
export default DetailPostInfo;
