// 회원정보 수정 탭
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container, Grid, Image, Text, Buttons, Tags } from '../../elements';
import { history } from '../../redux/configureStore';
import { Button } from '../../elements';
import Swal from 'sweetalert2';
import { userCreators } from '../../redux/modules/user';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const MyprofileEditTab = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [intro, setIntro] = useState('');

  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [distance, setDistance] = useState('');

  const [active, setActive] = useState(types[0]);
  const [active1, setActive1] = useState(types[0]);
  const [active2, setActive2] = useState(types[0]);

  const profileInfo = {
    nickname: nickname,
    password: password,
    location: location,
    type: type,
    distance: distance,
    intro: intro,
  };

  const [emailC, setEmailC] = useState();
  const [nicknameC, setNicknameC] = useState();

  const RegExNickname = /^[가-힣]{2,6}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const editProfile = () => {
    if (!nicknameC) {
      return Swal.fire({
        text: '닉네임 중복체크를 해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (password === '' || nickname === '' || passwordCheck === '') {
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

    const user = {
      ...profileInfo,
    };

    console.log(user);

    dispatch(
      userCreators.profileEditMiddleware(
        password,
        nickname,
        location,
        distance,
        type,
        intro,
      ),
    );
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

  return (
    <React.Fragment>
      <Container>
        <Grid center width='330px' margin='auto'>
          <Grid mainFlex justifyContent='center' padding='0 0 10px 0'>
            <Image
              src='https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266'
              shape='circle'
            />
          </Grid>
          <Text size='14px' padding='0 0 10px 0'>
            {window.localStorage.getItem('nickname')}님
          </Text>
          <Text
            isFlex
            width='273px'
            height='47px'
            margin='0 auto 40px auto'
            borderRadius='24px'
            color='#333333'
            bg='#23c8af'
          >
            {window.localStorage.getItem('email')}
          </Text>
          <Grid isFlex padding='0 0 120px 0'>
            <Buttons
              width='150px'
              height='54px'
              borderRadius='10px'
              size='18px'
              bold
              bgColor='#D8D8D8'
            >
              로그아웃
            </Buttons>
            <Buttons
              width='150px'
              height='54px'
              borderRadius='10px'
              size='18px'
            >
              회원탈퇴
            </Buttons>
          </Grid>
        </Grid>
        <Grid isFlex width='969px' height='44px' margin='0 auto 100px auto'>
          <Text
            align='center'
            width='242px'
            height='44px'
            borderBottom='2px solid #212121'
            cursor='pointer'
          >
            내 프로필
          </Text>
          <Text
            align='center'
            width='242px'
            height='44px'
            color='#DBDCDB'
            borderBottom='2px solid #DBDCDB'
            cursor='pointer'
            _onClick={() => {
              history.push('/crews/my');
            }}
          >
            신청 내역
          </Text>
          <Text
            align='center'
            width='242px'
            height='44px'
            color='#DBDCDB'
            borderBottom='2px solid #DBDCDB'
            cursor='pointer'
            _onClick={() => {
              history.push('/reviews/my');
            }}
          >
            후기 내역
          </Text>
          <Text
            align='center'
            width='242px'
            height='44px'
            color='#DBDCDB'
            borderBottom='2px solid #DBDCDB'
          >
            모임 관리
          </Text>
        </Grid>
        <Grid>
          <Grid flexEnd margin='0 435px 24px 0'>
            <Text isFlex padding='0 76px 0 0'>
              비밀번호
            </Text>
            <Grid width='570px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
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
                        placeholder='비밀번호를 입력해주세요'
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid flexEnd margin='0 435px 24px 0'>
            <Text isFlex padding='0 35px 0 0'>
              비밀번호 확인
            </Text>
            <Grid width='570px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
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
                        placeholder='비밀번호를 다시 입력해주세요'
                        value={passwordCheck}
                        onChange={(e) => {
                          setPasswordCheck(e.target.value);
                        }}
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid flexEnd margin='0 435px 24px 0'>
            <Text isFlex padding='0 94px 0 0'>
              닉네임
            </Text>
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
                      multiline
                      rows={1}
                      placeholder='닉네임을 입력해주세요 (한글 2~6자 이내)'
                      value={nickname}
                      onChange={(e) => {
                        setNickname(e.target.value);
                      }}
                      error={nickname.length < 2 && nickname.length > 6}
                      helperText={
                        nickname.length < 2 && nickname.length > 6
                          ? '2~6자 이내, 한글만, 띄어쓰기불가'
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
              margin='0 0 0 14px'
              border='0px'
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
          <Grid flexEnd margin='0 435px 100px 0'>
            <Text isFlex padding='0 76px 0 0'>
              자기소개
            </Text>
            <Grid width='570px' height='54px'>
              <ThemeProvider theme={inputTheme}>
                <Grid item xs={12} sm={10}>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        margin: '0 0 0 0',
                      },
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <div>
                      <TextField
                        required
                        id='outlined-textarea'
                        multiline
                        rows={4}
                        placeholder='자기소개를 입력해주세요'
                        value={intro}
                        onChange={(e) => {
                          setIntro(e.target.value);
                        }}
                        error={intro.length > 60 || intro.length < 10}
                        helperText={
                          intro.length > 60 || intro.length < 10
                            ? '최소 10자이상 60자미만 작성해주세요'
                            : ''
                        }
                      />
                    </div>
                  </Box>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid flexEnd margin='0 985px 0 0'>
            <Text isFlex padding='0 76px 0 0'>
              관심사 설정
            </Text>
          </Grid>
          <Grid columnFlex>
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
          </Grid>
        </Grid>
        <Grid mainFlex justifyContent='center' padding='0 0 85px 0'>
          <Buttons
            large_b
            _onClick={() => {
              editProfile();
              history.push('/my');
            }}
          >
            회원정보 수정 완료
          </Buttons>
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
  '1km 이내',
  '1km~3km',
  '3km~5km',
  '5km 이상',
  '거리는 상관없어요',
];

const types2 = ['도심(시내)에서', '공원에서', '한강에서', '산 또는 숲에서'];

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

export default MyprofileEditTab;
