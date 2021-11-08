import React, { useState } from 'react';
import { Container, Button, Grid, Input, Text, Buttons } from '../elements';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-dom';
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
        confirmButtonColor: '#23c8af',
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
        confirmButtonColor: '#23c8af',
      });
    }
    // const loginInfo = {
    //   email: email,
    //   password: password,
    // };
    dispatch(userCreators.loginMiddleware(email, password));
    history.push('/');
  };
  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
  });

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
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': { width: '100%' },
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <div>
                      <TextField
                        required
                        id='outlined-textarea'
                        multiline
                        rows={1}
                        label='이메일을 입력해주세요'
                        value={email}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
              {/* <Input
                type='email'
                width='570px'
                height='54px'
                radius='10px'
                placeholder='이메일'
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}
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

          <Grid isFlex padding='5px 0 36px 0'>
            <Grid isFlex>
              <Checkbox {...label} size='samll' />
              <Text size='13px'>로그인 상태 유지</Text>
            </Grid>
            <Text size='13px'>이메일찾기 / 비밀번호찾기</Text>
          </Grid>
          <Buttons
            large_b
            text='로그인하기'
            width='570px'
            height='54px'
            size='20px'
            color='#fff'
            bgColor='#23c8af'
            borderRadius='10px'
            _onClick={() => {
              login();
            }}
          >
            로그인 하기
          </Buttons>
          {/* <Button text='카카오톡 로그인' width='570px' height='54px'>
            카카오톡 로그인
          </Button> */}
          <Grid flexEnd padding='10px 0px'>
            <Text size='13px' padding='0 5px 0 0'>
              아직 회원이 아니시라면?
            </Text>
            <Text
              size='13px'
              color='blue'
              cursor='pointer'
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
