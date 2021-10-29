import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Button, Container, Grid, Image, Input, Text } from '../elements';
import Swal from 'sweetalert2';
import { userCreators } from '../redux/modules/user';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const [emailC, setEmailC] = useState();
  const [nicknameC, setNicknameC] = useState();

  const RegExEmail = /^[a-zA-Z0-9!@#$%^&*]{6,24}$/;
  const RegExNickname = /^[a-zA-Z0-9가-힣]{2,10}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const signup = () => {
    if (!emailC || !nicknameC) {
      return Swal.fire({
        text: '닉네임 및 이메일 중복체크를 해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
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
        confirmButtonColor: '#E3344E',
      });
    }

    if (
      RegExEmail.test(email) === false ||
      RegExNickname.test(nickname) === false ||
      RegExPassword.test(password) === false
    ) {
      return Swal.fire({
        text: '잘못된 양식입니다. 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    const signupInfo = {
      email: email,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };

    Swal.fire({
      text: '회원가입 완료!',
      width: '360px',
      confirmButtonColor: '#E3344E',
    });

    dispatch(userCreators.signupMiddleware(signupInfo));
    history.push('/login');
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
        <Grid center width='250px' margin='auto'>
          <Grid padding='30px 0px'>
            <Text align='center' padding='15px 0px 5px 0px'>
              회원가입
            </Text>
            <Text size='14px'>기본정보를 입력해주세요 :)</Text>
          </Grid>
          <Grid>
            <Grid isFlex>
              <Input
                width='250px'
                height='32px'
                placeholder='이메일을 입력해주세요'
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Button
                width='80px'
                height='32px'
                size='11px'
                _onClick={() => {
                  console.log(typeof email);
                  dispatch(
                    userCreators.emailCheckMiddleware({
                      email: email,
                    }),
                  );
                  setEmailC(true);
                }}
              >
                중복체크
              </Button>
            </Grid>
            {/* {email.length >= 6 && RegExEmail.test(email) === false ? (
              <Text color='red' size='12px'>
                이메일을 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Grid isFlex>
              <Input
                width='250px'
                height='32px'
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
                width='80px'
                height='32px'
                size='11px'
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
                중복체크
              </Button>
            </Grid>
            {/* {nickname.length >= 2 && RegExNickname.test(nickname) === false ? (
              <Text color='red' size='12px'>
                닉네임을 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Input
              width='250px'
              height='32px'
              placeholder='비밀번호을 입력해주세요'
              _onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* {password.length >= 6 && RegExPassword.test(password) === false ? (
              <Text color='red' size='12px'>
                비밀번호를 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
            <Input
              width='250px'
              height='32px'
              placeholder='비밀번호 확인'
              _onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
            />
            {/* {passwordCheck.length >= 6 &&
            RegExPassword.test(passwordCheck) === false ? (
              <Text color='red' size='12px'>
                비밀번호를 다시 입력해주세요
              </Text>
            ) : (
              ''
            )} */}
          </Grid>
          <Button
            text='회원가입'
            width='250px'
            height='32px'
            _onClick={() => signup()}
          >
            회원가입
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SignupForm;
