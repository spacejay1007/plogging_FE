import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, Buttons, Container, Grid, Input, Text } from '../elements';
import Swal from 'sweetalert2';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [distance, setDistance] = useState('');

  const [active, setActive] = useState(types[0]);
  const [active1, setActive1] = useState(types[0]);
  const [active2, setActive2] = useState(types[0]);
  // console.log(active);

  const signupInfo = {
    email: email,
    nickname: nickname,
    password: password,
    location: location,
    type: type,
    distance: distance,
  };

  const [emailC, setEmailC] = useState();
  const [nicknameC, setNicknameC] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
    console.log(e.target.value);
  };

  const handleLocation = (active) => {
    setLocation(active);
    console.log(active);
  };

  const handleType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const handleDistance = (e) => {
    setDistance(e.target.value);
    console.log(e.target.value);
  };

  const RegExEmail = /^[a-zA-Z0-9!@#$%^&*.]{6,24}$/;
  const RegExNickname = /^[가-힣]{2,6}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const signup = () => {
    if (!emailC || !nicknameC) {
      return Swal.fire({
        text: '닉네임 및 이메일 중복체크를 해주세요!',
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
        text: '회원정보를 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (password !== passwordCheck) {
      return Swal.fire({
        text: '비밀번호를 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    // if (password === '' || passwordCheck === '') {
    //   return Swal.fire({
    //     text: '비밀번호를 입력해주세요!',
    //     width: '360px',
    //     confirmButtonColor: '#23c8af',
    //   });
    // }

    if (RegExEmail.test(email) === false) {
      return Swal.fire({
        text: '잘못된 이메일 양식입니다. 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExNickname.test(nickname) === false) {
      return Swal.fire({
        text: '잘못된 닉네임 양식입니다. 한글 2~6자로 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (RegExPassword.test(password) === false) {
      return Swal.fire({
        text: '잘못된 비밀번호 양식입니다. 영문, 숫자 8~16자로 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    // Swal.fire({
    //   text: '회원가입 완료!',
    //   width: '360px',
    //   confirmButtonColor: '#E3344E',
    // });

    const user = {
      ...signupInfo,
    };

    console.log(user);

    dispatch(
      userCreators.signupMiddleware(
        email,
        password,
        nickname,
        location,
        distance,
        type,
      ),
    );
    history.push('/');
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
    },
  });

  // 엔터키로 Button 작동
  // const signupKeyPress = (e) => {
  //   if (e.key == 'Enter') {
  //     signup();
  //   }
  // };

  return (
    <React.Fragment>
      <Container>
        <Grid center width='570px' margin='auto'>
          <Grid padding='60px 0px'>
            <Text size='28px' align='center' padding='15px 0px 5px 0px' bold>
              줍깅 멤버가 되어주세요!
            </Text>
            <Text size='18px'>기본정보를 입력해주세요 :)</Text>
          </Grid>
          <Grid>
            <Grid isFlex margin='0 0 16px 0'>
              <Input
                width='428px'
                height='54px'
                radius='10px'
                padding='0 0 0 20px'
                placeholder='이메일을 입력해주세요'
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* <ThemeProvider theme={inputTheme}>
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
                        multiline
                        rows={1}
                        placeholder='이메일을 입력해주세요'
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        error={email.length < 5 && email.length > 1}
                        helperText={
                          email.length < 5 && email.length > 1
                            ? '최소 5글자 이상으로 채워주세요!'
                            : ''
                        }
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider> */}
              <Button
                width='128px'
                height='54px'
                size='14px'
                borderRadius='10px'
                color='#fff'
                bgColor='#333333'
                _onClick={() => {
                  console.log(email);
                  dispatch(userCreators.emailCheckMiddleware(email));
                  setEmailC(true);
                }}
              >
                중복 확인
              </Button>
            </Grid>
            <Grid margin='0 0 16px 0'>
              <Input
                type='password'
                width='570px'
                height='54px'
                radius='10px'
                padding='0 0 0 20px'
                placeholder='비밀번호을 입력해주세요 (영문, 숫자 포함 8~16자 이내)'
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid margin='0 0 16px 0'>
              <Input
                type='password'
                width='570px'
                height='54px'
                radius='10px'
                padding='0 0 0 20px'
                placeholder='비밀번호를 다시 입력해주세요'
                _onChange={(e) => {
                  console.log(password);
                  setPasswordCheck(e.target.value);
                }}
              />
            </Grid>
            {/* {passwordCheck.length >= 6 &&
            RegExPassword.test(passwordCheck) === false ? (
              <Text color='red' size='12px'>
                비밀번호를 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Grid isFlex margin='0 0 16px 0'>
              <Input
                width='428px'
                height='54px'
                radius='10px'
                padding='0 0 0 20px'
                placeholder='닉네임을 입력해주세요 (2~6자 이내, 한글만, 띄어쓰기 불가)'
                _onChange={(e) => {
                  console.log(JSON.stringify(e.target.value));
                  setNickname(e.target.value);
                  // if (
                  //   nickname.length <= 2 &&
                  //   RegExNickname.test(nickname) === false
                  // ) {
                  //   <Text color='red' size='12px'>
                  //     닉네임을 다시 입력해주세요
                  //   </Text>;
                  // }
                }}
              />
              <Button
                width='128px'
                height='54px'
                size='14px'
                borderRadius='10px'
                color='#fff'
                bgColor='#333333'
                _onClick={() => {
                  console.log(nickname);
                  dispatch(userCreators.nicknameCheckMiddleware(nickname));
                  setNicknameC(true);
                }}
              >
                중복 확인
              </Button>
            </Grid>
          </Grid>
          <Grid width='576px' padding='30px 0'>
            <Text size='18px' bold padding='0 0 14px 0'>
              플로깅하고 싶은 장소를 골라주세요!
            </Text>
            <Grid mainFlex>
              <ButtonGroup>
                {types2.map((type2) => (
                  <ButtonToggle
                    value={type}
                    key={type2}
                    active={active2 === type2}
                    onClick={() => {
                      console.log(type2);
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
              플로깅할 수 있는 거리를 골라주세요!
            </Text>
            <Grid mainFlex>
              <ButtonGroup>
                {types1.map((type1) => (
                  <ButtonToggle
                    value={distance}
                    key={type1}
                    active={active1 === type1}
                    onClick={() => {
                      console.log(type1);
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
              플로깅할 수 있는 지역을 골라주세요!
            </Text>
            <Text size='14px' color='#666666' padding='0 0 14px 0'>
              줍깅 서비스는 현재 서울 지역만 서비스가 지원됩니다. 다른 지역은
              조금 기다려주세요!
            </Text>
            {/* <LocationCheckbox types={type} _onChange={handleLocation} /> */}
            <Grid mainFlex>
              <ButtonGroup>
                {types.map((type) => (
                  <ButtonToggle
                    value={location}
                    key={type}
                    active={active === type}
                    onClick={() => {
                      console.log(type);
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
              text='줍깅 가입하기'
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
    </React.Fragment>
  );
};

const types = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '마포구',
  '도봉구',
  '동대문구',
  '동작구',
  '서대문구',
  '서초구',
  '상동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

const types1 = [
  '1KM이내',
  '1KM~3KM',
  '3KM~5KM',
  '5KM 이상',
  '거리는 상관없어요',
];

const types2 = ['도심(시내)에서', '공원에서', '한강에서', '산 또는 숲에서'];

const Btn = styled.button``;

const ButtonToggle = styled(Btn)`
  opacity: 0.4;
  width: 132px;
  height: 44px;
  margin: 6px;
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
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default SignupForm;
