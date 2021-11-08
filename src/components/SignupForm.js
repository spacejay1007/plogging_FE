import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Buttons, Container, Grid, Input, Text } from '../elements';
import Swal from 'sweetalert2';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { LocationCheckbox, TypeCheckbox, DistanceCheckbox } from '.';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const [emailC, setEmailC] = useState();
  const [nicknameC, setNicknameC] = useState();

  // const RegExEmail = /^[a-zA-Z0-9!@#$%^&*]{6,24}$/;
  const RegExNickname = /^[가-힣]{2,6}$/;
  // const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

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
        text: '다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    if (
      // RegExEmail.test(email) === false ||
      // RegExPassword.test(password) === false ||
      RegExNickname.test(nickname) === false
    ) {
      return Swal.fire({
        text: '잘못된 닉네임 양식입니다. 한글 2~6자로 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
    }

    // const signupInfo = {
    //   email: email,
    //   nickname: nickname,
    //   password: password,
    //   passwordCheck: passwordCheck,
    // };

    // Swal.fire({
    //   text: '회원가입 완료!',
    //   width: '360px',
    //   confirmButtonColor: '#E3344E',
    // });

    dispatch(userCreators.signupMiddleware(email, password, nickname));
    history.push('/');
  };

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
                placeholder='이메일을 입력해주세요'
                _onChange={(e) => {
                  setEmail(e.target.value);
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
                  console.log(email);
                  dispatch(
                    userCreators.emailCheckMiddleware({
                      email: email,
                    }),
                  );
                  setEmailC(true);
                }}
              >
                중복 확인
              </Button>
            </Grid>
            {/* {email.length >= 6 && RegExEmail.test(email) === false ? (
              <Text color='red' size='12px'>
                이메일을 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Grid isFlex margin='0 0 16px 0'>
              <Input
                width='428px'
                height='54px'
                radius='10px'
                placeholder='닉네임을 입력해주세요'
                _onChange={(e) => {
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
                  console.log(typeof nickname);
                  dispatch(
                    userCreators.nicknameCheckMiddleware({
                      nickname: nickname,
                    }),
                  );
                  setNicknameC(true);
                }}
              >
                중복 확인
              </Button>
            </Grid>
            {/* {nickname.length >= 2 && RegExNickname.test(nickname) === false ? (
              <Text color='red' size='12px'>
                닉네임을 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Grid margin='0 0 16px 0'>
              <Input
                width='570px'
                height='54px'
                radius='10px'
                placeholder='비밀번호을 입력해주세요'
                _onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            {/* {password.length >= 6 && RegExPassword.test(password) === false ? (
              <Text color='red' size='12px'>
                비밀번호를 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Grid margin='0 0 16px 0'>
              <Input
                width='570px'
                height='54px'
                radius='10px'
                placeholder='비밀번호 확인'
                _onChange={(e) => {
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
          </Grid>
          <Grid width='576px' padding='30px 0'>
            <Text size='18px' bold padding='0 0 14px 0'>
              플로깅하고 싶은 장소를 골라주세요!
            </Text>
            <TypeCheckbox />
          </Grid>
          <Grid width='576px' padding='30px 0'>
            <Text size='18px' bold padding='0 0 14px 0'>
              플로깅할 수 있는 거리를 골라주세요!
            </Text>
            <DistanceCheckbox />
          </Grid>
          <Grid width='576px' padding='30px 0'>
            <Text size='18px' bold padding='0 0 4px 0'>
              플로깅할 수 있는 지역을 골라주세요!
            </Text>
            <Text size='14px' color='#666666' padding='0 0 14px 0'>
              줍깅 서비스는 현재 서울 지역만 서비스가 지원됩니다. 다른 지역은
              조금 기다려주세요!
            </Text>
            <LocationCheckbox />
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

export default SignupForm;
