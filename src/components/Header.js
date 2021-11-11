import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Button, Image, Text, Buttons } from '../elements';
import { history } from '../redux/configureStore';
import { userCreators } from '../redux/modules/user';

import { useSelector } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = document.cookie;
  console.log(is_login);
  // const logout = () => {
  //   dispatch(userCreators.logOutMiddleware());
  // };
  // React.useEffect((user) => {
  //   dispatch(userCreators.getUser(user));
  //   console.log(user);
  // }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid
          isFlex
          width="1440px"
          height="100px"
          margin="auto"
          padding="0 75px 0 72px"
        >
          <Image
            shape="rec"
            width="110px"
            height="41px"
            src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/jupgging_logo_header.png"
            _onClick={() => {
              history.push('/');
            }}
          />
          {/* <Text
            align='center'
            width='80px'
            height='33px'
            margin='0 0 0 50px'
            padding='auto 50px'
            bold
            cursor
            _onClick={() => {
              history.push('/');
            }}
          >
            줍깅로고
          </Text> */}
          <Grid padding="0 400px 0 0">
            <Buttons header width="116px" height="44px" color="#333333" bgColor="#fff">
              참여하기
            </Buttons>
            <Buttons header
              width="116px"
              height="44px"
              color="#333333"
              bgColor="#fff"
              _onClick={() => history.push('/review')}
            >
              커뮤니티
            </Buttons>
            <Buttons header width="103px" height="44px" color="#333333" bgColor="#fff">
              캠페인
            </Buttons>
          </Grid>
          {is_login ? (
            <Grid isFlex width="400px" height="60px" padding="0 20px">
              <Text bold cursor _onClick={() => history.push('/posting')} >
                모임만들기
              </Text>
              <Text
              margin="0px 20px"
                cursor="pointer"
                _onClick={() => history.push('/my')}
              >
                {window.localStorage.getItem('nickname')} 님
              </Text>
              <Buttons
                small_b
                size="18px"
                width="130px"
                height="50px"
                color="#fff"
                bgColor="#333333"
                borderRadius="10px"
                _onClick={() => {
                  dispatch(userCreators.logOutMiddleware());
                }}
              >
                로그아웃
              </Buttons>
            </Grid>
          ) : (
            <Grid isFlex width="400px" height="60px" padding="0 20px">
              <Text bold cursor _onClick={() => history.push('/posting')}>
                모임만들기
              </Text>
              <Text margin="0px 20px" cursor _onClick={() => history.push('/login')}>
                로그인
              </Text>
              <Buttons
                small_b
                size="18px"
                width="130px"
                height="50px"
                color="#fff"
                bgColor="#333333"
                borderRadius="10px"
                _onClick={() => history.push('/signup')}
              >
                회원가입
              </Buttons>
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Header;