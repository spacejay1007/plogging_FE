import React from 'react';
import { Container, Grid, Image, Text, Buttons } from '../elements';
import { ApplicationTab } from './MypageTab';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { getMyApplyDB, postActions } from '../redux/modules/post';

const CrewsMyForm = (props) => {
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.post.lists);
  console.log(detail);

  React.useEffect(() => {
    dispatch(postActions.getMyApplyDB());
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
            color='#DBDCDB'
            borderBottom='2px solid #DBDCDB'
            cursor='pointer'
            _onClick={() => {
              history.push('/my');
            }}
          >
            내 프로필
          </Text>
          <Text
            align='center'
            width='242px'
            height='44px'
            borderBottom='2px solid #212121'
            cursor='pointer'
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
            cursor='pointer'
          >
            모임 관리
          </Text>
        </Grid>
        <Grid>
          <ApplicationTab />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CrewsMyForm;
