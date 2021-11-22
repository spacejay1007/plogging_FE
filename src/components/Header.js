import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Container, Grid, Button, Image, Text, Buttons } from '../elements';
import { history } from '../redux/configureStore';
import { userCreators } from '../redux/modules/user';
import Swal from 'sweetalert2';
import MenuIcon from '@mui/icons-material/Menu';
import { getsCookie } from '../shared/Cookie';

import { useSelector } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = getsCookie('token');
  console.log(is_login);
  // const [menu, setmenu] = React.useState(false);
  // const logout = () => {
  //   dispatch(userCreators.logOutMiddleware());
  // };
  // React.useEffect((user) => {
  //   dispatch(userCreators.getUser(user));
  //   console.log(user);
  // }, []);

  return (
    <React.Fragment>
      <Container width="1440px">
        {/* <Common> */}
        <Grid isFlex>
          <Grid
            flexLeft
            width="100%"
            height="100px"
            // margin="auto"
            padding="0 0px 0 72px"
          >
            <Image
              shape="rec"
              width="110px"
              height="41px"
              cursor="pointer"
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
            {/* <Grid padding="0 400px 0 0"> */}
            {/* <Menubar
                href="#"
                onClick={() => {
                  setmenu(!menu);
          <Grid padding='0 400px 0 0'>
            <Buttons
              header
              width='116px'
              height='44px'
              color='#333333'
              bgColor='#fff'
              _onClick={() => history.push('/searches')}
            >
              참여하기
            </Buttons>
            <Buttons
              header
              width='116px'
              height='44px'
              color='#333333'
              bgColor='#fff'
              _onClick={() => history.push('/review')}
            >
              커뮤니티
            </Buttons>
            <Buttons
              header
              width='103px'
              height='44px'
              color='#333333'
              bgColor='#fff'
            >
              캠페인
            </Buttons>
          </Grid>
          {typeof is_login !== 'undefined' ? (
            <Grid isFlex width='400px' height='60px' padding='0'>
              <Text bold cursor _onClick={() => history.push('/posting')}>
                모임만들기
              </Text>
              <Text cursor='pointer' _onClick={() => history.push('/my')}>
                {window.localStorage.getItem('nickname')} 님
              </Text>
              <Buttons
                small_b
                size='18px'
                width='130px'
                height='50px'
                color='#fff'
                bgColor='#333333'
                borderRadius='10px'
                _onClick={() => {
                  dispatch(userCreators.logOutMiddleware());
                }}
              >
                <MenuIcon />
              </Menubar>
              <ContlorBox> */}
            <Grid flexLeft>
              <Buttons
                header
                // maxWidth="116px"
                // height="44px"
                color="#333333"
                bgColor="#fff"
                _onClick={() => history.push('/searches')}
              >
                참여하기
              </Buttons>
              <Buttons
                header
                // maxWidth="116px"
                // height="44px"
                color="#333333"
                bgColor="#fff"
                _onClick={() => history.push('/review')}
              >
                커뮤니티
              </Buttons>
              <Buttons
                header
                // maxWidth="103px"
                // height="44px"
                color="#333333"
                bgColor="#fff"
              >
                캠페인
              </Buttons>
            </Grid>
            {/* </ContlorBox> */}
          </Grid>

          <Grid padding="0 75px 0 0px">
            {is_login ? (
              // <ContlorBox>
              <Grid isFlex width="400px" height="60px" padding="0">
                <Text bold cursor _onClick={() => history.push('/posting')}>
                  모임만들기
                </Text>
                <Text cursor="pointer" _onClick={() => history.push('/my')}>
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
              // </ContlorBox>
              // <ContlorBox>
              <Grid isFlex width="400px" height="60px" padding="0">
                <Text
                  bold
                  cursor
                  _onClick={() => {
                    Swal.fire({
                      text: '로그인해주세요.',
                      width: '360px',
                      confirmButtonColor: '#23c8af',
                    });
                    history.push('/login');
                  }}
                >
                  모임만들기
                </Text>
                <Text cursor _onClick={() => history.push('/login')}>
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
              // </ContlorBox>
            )}
          </Grid>
        </Grid>
        {/* </Common> */}
      </Container>
    </React.Fragment>
  );
};

// const Common = styled.div`
//   display: flex;

//   justify-content: space-between;
//   /* margin: 20px; */
//   @media screen and (min-width: 500px) {
//     flex-direction: column;
//   }
// `;
// const Home = styled.a`
//   display: flex;
//   align-items: center;
//   font-size: 30px;
//   /* margin 10px; */
//   text-decoration: none;
//   color: black;
//   font-weight: bold;
//   @media screen and (max-width: 500px) {
//     display: none;
//   }
// `;
// const ContlorBox = styled.div`
//   display: flex;
//   align-items: center;
//   @media screen and (max-width: 500px) {
//     flex-direction: column;
//     align-items: flex-end;
//     display: none;
//   }
// `;
// const Menubar = styled.a`
//   display: flex;
//   align-items: center;
//   font-size: 30px;
//   position: absolute;
//   right: 32px;
//   height: 97px;

//   @media screen and (min-width: 500px) {
//     display: none;
//   }
// `;

export default Header;
