import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Buttons, Container, Grid, Text } from '../elements';
import Swal from 'sweetalert2';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const SignupForm = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [location, setLocation] = useState(types[0]);
  const [type, setType] = useState(types[0]);
  const [distance, setDistance] = useState(types[0]);
  const [number, setNumber] = useState('');
  const [numberCheck, setNumberCheck] = useState('');

  const [active, setActive] = useState('');
  const [active1, setActive1] = useState('');
  const [active2, setActive2] = useState('');

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const numCheck = useSelector(
    (state) => state.user?.list[0]?.data?.data?.certificationNumber,
  );

  const signupInfo = {
    email: email,
    nickname: nickname,
    password: password,
    location: location,
    type: type,
    distance: distance,
    number: number,
  };

  const [emailC, setEmailC] = useState('');
  const [nicknameC, setNicknameC] = useState('');

  const RegExEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const RegExNickname = /^[???-???]{2,6}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const RegExPhoneNum = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const RegExNumberCheck = /^[0-9]{4}$/;

  const signup = () => {
    if (!emailC || !nicknameC) {
      return Swal.fire({
        text: '????????? ??? ????????? ??????????????? ????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (
      email === '' ||
      password === '' ||
      nickname === '' ||
      passwordCheck === ''
    ) {
      return Swal.fire({
        text: '??????????????? ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (password !== passwordCheck) {
      return Swal.fire({
        text: '??????????????? ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExEmail.test(email) === false) {
      return Swal.fire({
        text: '????????? ????????? ???????????????. ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExNickname.test(nickname) === false) {
      return Swal.fire({
        text: '????????? ????????? ???????????????. ?????? 2~6?????? ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExPassword.test(password) === false) {
      return Swal.fire({
        text: '????????? ???????????? ???????????????. ??????, ?????? 8~16?????? ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExPhoneNum.test(number) === false) {
      return Swal.fire({
        text: '????????? ??????????????? ???????????????. ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExNumberCheck.test(numberCheck) === false) {
      return Swal.fire({
        text: '??????????????? ???????????? ???????????????. ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (numberCheck !== numCheck) {
      return Swal.fire({
        text: '??????????????? ????????? ????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    dispatch(
      userCreators.signupMiddleware(
        email,
        password,
        nickname,
        location,
        distance,
        type,
        number,
      ),
    );
    history.push('/login');
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
    palette: {
      primary: {
        main: '#23c8af',
      },
    },
  });

  const emailCheck = () => {
    if (email.length === 0) {
      return Swal.fire({
        html: '???????????? ???????????? ???????????????. </br> ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
    if (RegExEmail.test(email) === false) {
      return Swal.fire({
        text: '????????? ????????? ?????? ??????????????????',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
    dispatch(userCreators.emailCheckMiddleware(email));
  };

  const nicknameCheck = () => {
    if (nickname.length === 0) {
      return Swal.fire({
        html: '???????????? ???????????? ???????????????. </br> ?????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
    if (RegExNickname.test(nickname) === false) {
      return Swal.fire({
        text: '????????? ????????? ?????? ??????????????????',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
    dispatch(userCreators.nicknameCheckMiddleware(nickname));
  };

  // onKeyPress
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      signup();
    }
  };

  const certificationNum = () => {
    if (numberCheck !== numCheck) {
      return Swal.fire({
        text: '????????? ????????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    } else {
      return Swal.fire({
        text: '????????? ????????? ??????????????????!',
        timer: 3000,
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }
  };

  return (
    <React.Fragment>
      <Grid width='1440px' margin='0 auto'>
        <Container>
          <Grid center width='570px' margin='auto'>
            <Grid padding='60px 0px'>
              <Text size='28px' align='center' padding='15px 0px 5px 0px' bold>
                ?????? ????????? ???????????????!
              </Text>
              <Text size='18px'>??????????????? ?????????????????? :)</Text>
            </Grid>
            <Grid>
              <Grid isFlex margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10} width='428px' height='54px'>
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
                          rows={1}
                          placeholder='???????????? ??????????????????'
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          // onKeyPress={handleKeyPress}
                          error={
                            RegExEmail.test(email) === false && email.length > 0
                          }
                          helperText={
                            RegExEmail.test(email) === false && email.length > 0
                              ? '????????? ????????? ?????? ??????????????????.'
                              : ''
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
                <Button
                  width='128px'
                  height='54px'
                  size='14px'
                  border='0px'
                  borderRadius='10px'
                  color='#fff'
                  bgColor='#333333'
                  _onClick={() => {
                    emailCheck();
                    setEmailC(true);
                  }}
                >
                  ?????? ??????
                </Button>
              </Grid>
              <Grid margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10}>
                    <Box
                      component='form'
                      sx={{
                        '& .MuiInputBase-root': { width: '100%' },
                      }}
                      noValidate
                      autoComplete='off'
                    >
                      <div>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          type={values.showPassword ? 'text' : 'password'}
                          value={password}
                          placeholder='??????????????? ?????????????????? (??????,?????? 8~16??? ??????)'
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyPress={handleKeyPress}
                          error={password.length < 8 && password.length > 1}
                          helperText={
                            password.length < 8 && password.length > 1
                              ? '??????, ???????????? 8~16??? ??????'
                              : ''
                          }
                          endAdornment={
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
              </Grid>
              <Grid margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10}>
                    <Box
                      component='form'
                      sx={{
                        '& .MuiInputBase-root': { width: '100%' },
                      }}
                      noValidate
                      autoComplete='off'
                    >
                      <div>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          type={values.showPassword ? 'text' : 'password'}
                          value={passwordCheck}
                          placeholder='??????????????? ?????? ??????????????????'
                          onChange={(e) => {
                            setPasswordCheck(e.target.value);
                          }}
                          onKeyPress={handleKeyPress}
                          error={password !== passwordCheck}
                          helperText={
                            password !== passwordCheck
                              ? '??????????????? ????????????????????????.'
                              : ''
                          }
                          endAdornment={
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
              </Grid>
              <Grid isFlex margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10} width='428px' height='54px'>
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
                          rows={1}
                          placeholder='???????????? ?????????????????? (?????? 2~6??? ??????)'
                          value={nickname}
                          onChange={(e) => {
                            setNickname(e.target.value);
                          }}
                          onKeyPress={handleKeyPress}
                          error={
                            RegExNickname.test(nickname) === false &&
                            nickname.length > 0
                          }
                          helperText={
                            RegExNickname.test(nickname) === false &&
                            nickname.length > 0
                              ? '2~6??? ?????? ?????????, ??????????????? ???????????????.'
                              : ''
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
                <Button
                  width='128px'
                  height='54px'
                  size='14px'
                  border='0px'
                  borderRadius='10px'
                  color='#fff'
                  bgColor='#333333'
                  _onClick={() => {
                    nicknameCheck();
                    setNicknameC(true);
                  }}
                >
                  ?????? ??????
                </Button>
              </Grid>
              <Grid isFlex margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10} width='428px' height='54px'>
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
                          rows={1}
                          placeholder='????????? ????????? ??????????????????'
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                          onKeyPress={handleKeyPress}
                          error={
                            RegExPhoneNum.test(number) === false &&
                            number.length > 0
                          }
                          helperText={
                            RegExPhoneNum.test(number) === false &&
                            number.length > 0
                              ? '????????? ????????? ??????????????????.( "-" ??????)'
                              : ''
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
                <Button
                  width='128px'
                  height='54px'
                  size='14px'
                  border='0px'
                  borderRadius='10px'
                  color='#fff'
                  bgColor='#333333'
                  _onClick={() => {
                    dispatch(userCreators.numberCheckMiddleware(number));
                  }}
                >
                  ???????????? ??????
                </Button>
              </Grid>
              <Grid isFlex margin='0 0 24px 0'>
                <ThemeProvider theme={inputTheme}>
                  <Grid item xs={12} sm={10} width='428px' height='54px'>
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
                          rows={1}
                          placeholder='??????????????? ??????????????????'
                          value={numberCheck}
                          onChange={(e) => {
                            setNumberCheck(e.target.value);
                          }}
                          onKeyPress={handleKeyPress}
                          error={
                            RegExNumberCheck.test(numberCheck) === false &&
                            numberCheck.length > 0
                          }
                          helperText={
                            RegExNumberCheck.test(numberCheck) === false &&
                            numberCheck.length > 0
                              ? '??????????????? ??????????????????.'
                              : ''
                          }
                        />
                      </div>
                    </Box>
                  </Grid>
                </ThemeProvider>
                <Button
                  width='128px'
                  height='54px'
                  size='14px'
                  border='0px'
                  borderRadius='10px'
                  color='#fff'
                  bgColor='#333333'
                  _onClick={certificationNum}
                >
                  ??????
                </Button>
              </Grid>
            </Grid>
            <Grid padding='30px 0'>
              <Text size='24px' bold>
                ???????????? ???????????? ?????? ????????? ??????????????????!
              </Text>
              <Text size='14px' color='#A9A9A9'>
                ?????? ????????? ?????????????????? :)
              </Text>
            </Grid>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 14px 0'>
                ??????????????? ?????? ????????? ???????????????!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types2.map((type2) => (
                    <ButtonToggle
                      value={type}
                      key={type2}
                      active={active2 === type2}
                      onClick={() => {
                        setType(type2);
                        setActive2(type2);
                      }}
                    >
                      {type2}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 14px 0'>
                ???????????? ??? ?????? ????????? ???????????????!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types1.map((type1) => (
                    <ButtonToggle
                      value={distance}
                      key={type1}
                      active={active1 === type1}
                      onClick={() => {
                        setDistance(type1);
                        setActive1(type1);
                      }}
                    >
                      {type1}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid width='576px' padding='30px 0'>
              <Text size='18px' bold padding='0 0 4px 0'>
                ???????????? ??? ?????? ????????? ???????????????!
              </Text>
              <Text size='14px' color='#666666' padding='0 0 14px 0'>
                ?????? ???????????? ?????? ?????? ????????? ???????????? ???????????????. ?????? ?????????
                ?????? ??????????????????!
              </Text>
              <Grid mainFlex>
                <ButtonGroup>
                  {types.map((type) => (
                    <ButtonToggle
                      value={location}
                      key={type}
                      active={active === type}
                      onClick={() => {
                        setLocation(type);
                        setActive(type);
                      }}
                    >
                      {type}
                    </ButtonToggle>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid padding='0 0 100px 0'>
              <Buttons
                large_b
                text='?????? ????????????'
                width='570px'
                height='54px'
                size='20px'
                color='#fff'
                bgColor='#23c8af'
                borderRadius='10px'
                margin='8px auto'
                _onClick={() => {
                  signup();
                }}
              ></Buttons>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

const types = [
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '????????????',
  '?????????',
  '????????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '?????????',
  '????????????',
  '?????????',
  '?????????',
  '?????????',
  '??????',
  '?????????',
];

const types1 = ['1km ??????', '1km~3km', '3km~5km', '5km ??????'];

const types2 = ['??????(??????)', '??????', '??????', '??? ?????? ???'];

const Btn = styled.button``;

const ButtonToggle = styled(Btn)`
  opacity: 1;
  width: 132px;
  height: 44px;
  margin: 6px;
  border: 0px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  ${({ active1 }) =>
    active1 &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  ${({ active2 }) =>
    active2 &&
    `
    opacity: 1;
    color: white;
    background-color: #333333;
    border-radius: 10px
    font-size: 14px;
    `};
  &:hover {
    transition: all 0.5s;
    background-color: #23c8af;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export default SignupForm;
