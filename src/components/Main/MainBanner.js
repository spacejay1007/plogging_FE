import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Button, Text } from '../../elements/index';
import { history } from '../../redux/configureStore';
import BannerImg from '../../assets/Icon/BannerImg.jpg';

const MainBanner = (props) => {
  return (
    <React.Fragment>
      <Container width="100%">
        <SlideImage src={BannerImg} />

        <Grid top="100px" isPosition="absolute">
          <Grid zIndex="-1" margin="42px 135px">
            <Grid>
              <Text color="#d8d8d8" bold size="28px">
                누구님,
              </Text>
              <Text color="#d8d8d8" bold size="40px">
                Would You Like 줍깅?
              </Text>
            </Grid>
            <Grid marigin="14px 0px">
              <Text margin="3px 0px" color="#d8d8d8" size="14px">
                조깅 또는 러닝을 하면서 길가의 쓰레기를 수거하는 착한달리기,
                줍깅!
              </Text>
              <Text margin="3px 0px" color="#d8d8d8" size="14px">
                지구를 구하는 한걸음, 줍깅이 궁금하다면?
              </Text>
              <Text margin="3px 0px" color="#d8d8d8" size="14px">
                지금 바로 함께 참여해주세요!
              </Text>
            </Grid>

            <Button
              margin="41px 0px"
              bgColor="transparent"
              color="#d8d8d8"
              bold
              size="18px"
              width="278px"
              height="54px"
              border="2px solid #d8d8d8"
              borderRadius="10px"
              _onClick={() => {
                history.push('/posting');
              }}
            >
              같이 줍깅하러 가기
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const SlideImage = styled.img`
  width: 100%;
  height: 392px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export default MainBanner;
