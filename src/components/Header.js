import React from 'react';
import { Container, Grid, Button, Image, Text } from '../elements';
import { history } from '../redux/configureStore';

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          mainFlex
          width='1440px'
          height='100px'
          margin='auto'
          padding='0 75px 0 72px'
        >
          <Text
            align='center'
            width='80px'
            height='33px'
            margin='0 50px 0 0'
            padding='auto 50px'
            bold
            cursor
            _onClick={() => {
              history.push('/');
            }}
          >
            줍깅로고
          </Text>
          <Grid padding='0 400px 0 0'>
            <Button width='72px' height='44px' color='#333333' bgColor='#fff'>
              홈
            </Button>
            <Button width='116px' height='44px' color='#333333' bgColor='#fff'>
              참여하기
            </Button>
            <Button width='116px' height='44px' color='#333333' bgColor='#fff'>
              커뮤니티
            </Button>
            <Button width='103px' height='44px' color='#333333' bgColor='#fff'>
              캠페인
            </Button>
          </Grid>
          <Grid isFlex width='348px' height='60px'>
            <Text bold cursor _onClick={() => history.push('/posting')}>
              모임만들기
            </Text>
            <Text>로그인</Text>
            <Button
              size='18px'
              width='130px'
              height='50px'
              color='#fff'
              bgColor='#333333'
              borderRadius='10px'
              _onClick={() => history.push('/signup')}
            >
              회원가입
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Header;
