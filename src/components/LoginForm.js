import React, { useState } from 'react';
import { Container, Button, Grid, Input, Text } from '../elements';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userCreators } from '../redux/modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const RegExEmail = /^[a-zA-Z0-9!@#$%^&*]{6,30}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const login = () => {
    if (email === '' || password === '') {
      return Swal.fire({
        text: '이메일 혹은 비밀번호가 공란입니다! 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }
    // console.log(RegExEmail.test(email));
    console.log(RegExPassword.test(password));

    if (
      // RegExEmail.test(email) === false ||
      RegExPassword.test(password) === false
    ) {
      return Swal.fire({
        text: '아이디 혹은 비밀번호가 양식에 맞지 않습니다!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }
    // const loginInfo = {
    //   email: email,
    //   password: password,
    // };
    dispatch(userCreators.loginMiddleware(email, password));
  };

  return (
    <React.Fragment>
      <Container>
        <Grid center width='570px' margin='auto'>
          <Grid margin='60px 0px'>
            <Text size='28px' align='center' bold>
              간편하게 로그인하고
            </Text>
            <Text size='28px' align='center' bold>
              다양한 줍깅 크루를 만나보세요!
            </Text>
          </Grid>
          <Grid wrap>
            <Grid padding='0 0 16px 0'>
              <Input
                type='email'
                width='570px'
                height='54px'
                radius='10px'
                placeholder='이메일'
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* {email.length >= 4 && RegExEmail.test(email) === false ? (
                <Text color='red' size='12px'>
                  email을 다시 입력해주세요
                </Text>
              ) : (
                ''
              )} */}
            </Grid>
            <Grid>
              <Input
                type='password'
                width='570px'
                height='54px'
                radius='10px'
                placeholder='비밀번호'
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* {password.length >= 6 &&
              RegExPassword.test(password) === false ? (
                <Text color='red' size='12px'>
                  password를 다시 입력해주세요
                </Text>
              ) : (
                ''
              )} */}
            </Grid>
          </Grid>

          <Grid isFlex padding='5px 0px'>
            <Grid isFlex>
              <Checkbox {...label} size="samll" />
              <Text size="13px">로그인 상태 유지</Text>
            </Grid>
            <Text size="13px">비밀번호찾기</Text>
          </Grid>
          <Button
            text='로그인하기'
            width='570px'
            height='54px'
            size='20px'
            color='#fff'
            bgColor='#23c8af'
            borderRadius='10px'
            _onClick={login}
          >
            로그인 하기
          </Button>
          {/* <Button text='카카오톡 로그인' width='570px' height='54px'>
            카카오톡 로그인
          </Button> */}
          <Grid flexEnd padding='10px 0px'>
            <Text size='13px' padding='0 5px 0 0'>
              아직 회원이 아니시라면?
            </Text>
            <Text
              size="13px"
              color="blue"
              cursor="pointer"
              _onClick={() => history.push('/signup')}
            >
              줍깅 가입하기
            </Text>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LoginForm;
