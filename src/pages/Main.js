import React from 'react';

import { Text, Container, Grid, Button } from '../elements/index';
import Slider from '../components/Slider';
import CardSlide from '../components/CardSlide';
import ReviewSlide from '../components/ReviewSlide';

import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.post_list);
  // const is_login = useSelector((state) => state.user.is_login);

  const [checkValue, setCheckValue] = React.useState('hot');
  const checkvalue = () => {
    setCheckValue(data);
  };
  let data = null;

  const handleData = (e) => {
    data = e.target.value;
    dispatch(postActions.getPost());
  };

  return (
    <React.Fragment>
      <Container width="1440px">
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
              bgColor={checkValue === 'hot' ? '#212121' : '#eee'}
              color={checkValue === 'hot' ? '#eee' : '#212121'}
              value="hot"
              size="16px"
              bold
              _onClick={(e) => {
                handleData(e);
                console.log('Hot');
              }}
            >
              #핫플레이스
            </Button>

            {/* {is_login ? (
              <>
                <Button
                  width="140px"
                  height="40px"
                  border="1px solod black"
                  borderRadius="10px"
                  bgColor={checkValue === 'type' ? '#212121' : '#eee'}
                  color={checkValue === 'type' ? 'white' : '#212121'}
                  value="type"
                  size="16px"
                  bold
                  _onClick={(e) => {
                    handleData(e);
                    console.log('Type');
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
                  value="distance"
                  size="16px"
                  bold
                  _onClick={(e) => {
                    handleData(e);
                    console.log('Distance');
                  }}
                >
                  #3Km이내
                </Button>
              </>
            ) : (
              <Button
                width="140px"
                height="40px"
                border="1px solod black"
                borderRadius="10px"
                bgColor={checkValue === 'recent' ? '#212121' : '#eee'}
                color={checkValue === 'recent' ? 'white' : '#212121'}
                value="distance"
                size="16px"
                bold
                _onClick={(e) => {
                  handleData(e);
                  console.log('Recent');
                }}
              >
                최신줍깅모임
              </Button>
            )} */}
          </Grid>
          <CardSlide />
          <Grid margin="16px 0px">
            <Text bold>커뮤니티 후기</Text>
            <ReviewSlide />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Main;
