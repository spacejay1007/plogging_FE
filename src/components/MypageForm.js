import React from 'react';
import { Grid, Container, Text, Image, Buttons, Button } from '../elements';
import { Header } from '../components';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

const MypageForm = (props) => {
  const dispatch = useDispatch();
  React.useEffect((user) => {
    dispatch(userCreators.getUser(user));
  }, []);
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
          <Grid mainFlex justifyContent='center' height='130px'>
            <Text size='24px' padding=''>
              프로필
            </Text>
            <Image
              src='https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266'
              shape='circle'
            />
          </Grid>
          <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
            <Text size='24px'>닉네임</Text>
            <Text size='24px'>{window.localStorage.getItem('nickname')}님</Text>
          </Grid>
          <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
            <Text size='24px'>자기소개</Text>
            <Text size='24px'>
              {window.localStorage.getItem('intro')}자기소개
            </Text>
          </Grid>
          <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
            <Text size='24px'>관심사 설정</Text>
            <Text size='24px'>관심사 태그</Text>
          </Grid>
          <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
            <Text size='24px'>보유 뱃지</Text>
            <Text size='24px'>뱃지 아이콘</Text>
          </Grid>
          <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
            <Buttons large_b>회원정보 수정</Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MypageForm;
