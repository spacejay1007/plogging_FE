import React from 'react';

import { Text, Container, Grid, Button } from '../elements/index';
import Slider from '../components/Slider';
import CardSlide from '../components/CardSlide';

import { useDispatch } from 'react-redux';

const Main = (props) => {
  const dispatch = useDispatch();

  const [checkValue, setCheckValue] = React.useState('type');

  let type = null;

  const checkvalue = () => {
    setCheckValue(type);
  };

  return (
    <React.Fragment>
      <Container>
        <Slider />
        <Grid margin="40px 50px">
          <Text bold size="30px">
            지금! 뜨고 있는 플로깅 장소
          </Text>
          <Grid flexLeft width="50%" margin="30px 0px 30px 0px">
            <Button
              width="140px"
              height="40px"
              border="1px solod black"
              borderRadius="10px"
              bgColor={checkValue === 'type' ? '#212121' : '#eee'}
              color={checkValue === 'type' ? '#eee' : '#212121'}
              size="16px"
              bold
              _onClick={(e) => {
                checkvalue();
              }}
            >
              #핫플레이스
            </Button>
            <Button
              width="140px"
              height="40px"
              border="1px solod black"
              borderRadius="10px"
              bgColor={checkValue === 'loation' ? '#212121' : '#eee'}
              color={checkValue === 'location' ? 'white' : '#212121'}
              size="16px"
              bold
              _onClick={(e) => {
                checkvalue();
              }}
            >
              #서울도심
            </Button>
            <Button
              width="140px"
              height="40px"
              border="1px solod black"
              borderRadius="10px"
              bgColor={checkValue === 'distance' ? '#212121' : '#eee'}
              color={checkValue === 'distance' ? 'white' : '#212121'}
              size="16px"
              bold
              _onClick={(e) => {
                checkvalue();
                console.log('타입');
              }}
            >
              #3Km이내
            </Button>
          </Grid>
          <CardSlide />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Main;
