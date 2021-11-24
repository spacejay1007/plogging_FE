import React from 'react';
import {
  Grid,
  Container,
  Text,
  Image,
  Buttons,
  Button,
  Tags,
} from '../elements';
import { Header } from '../components';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

const MypageForm = (props) => {
  const dispatch = useDispatch();

  React.useEffect((newProfile) => {
    dispatch(userCreators.getProfileMiddleware(newProfile));
    console.log(newProfile);
  }, []);

  return (
    <React.Fragment>
      <Grid width='1440px' margin='0 auto'>
        <Container>
          <Grid center width='330px' margin='auto'>
            <Grid mainFlex justifyContent='center' padding='0 0 10px 0'>
              <Grid>
                <Image
                  shape='circle'
                  size='150'
                  src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                />
              </Grid>
            </Grid>
            <Text size='24px' padding='10px 0 10px 0' bold>
              {window.localStorage.getItem('nickname')}
            </Text>
            <Grid margin='10px auto 40px auto'>
              <Tags large>{window.localStorage.getItem('email')}</Tags>
            </Grid>
            <Grid center padding='0 0 120px 0'>
              <Buttons
                small
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
                로그아웃
              </Buttons>
            </Grid>
          </Grid>
          <Grid
            isFlex
            width='968px'
            height='202px'
            border='1px solid #F8F8F8'
            borderRadius='10px'
            bg='#F8F8F8'
            margin='0 auto 80px auto'
          >
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 프로필</Text>
              <Text align='center' color='blue' borderBottom='1px solid blue'>
                3개
              </Text>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 참여내역</Text>
              <Text align='center' color='blue' borderBottom='1px solid blue'>
                3개
              </Text>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>내 북마크</Text>
              <Text align='center' color='blue' borderBottom='1px solid blue'>
                3개
              </Text>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #F8F8F8'
            >
              <Text padding='0 0 15px 0'>획득 배지</Text>
              <Text align='center' color='blue' borderBottom='1px solid blue'>
                3개
              </Text>
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
                history.push('/bookmark/my');
              }}
            >
              북마크
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
              _onClick={() => {
                history.push('/meeting/my');
              }}
            >
              모임 관리
            </Text>
          </Grid>
          <Grid width='700px' margin='0 auto'>
            <Grid isFlex width='340px' height='100px' margin='25px auto 25px 0'>
              <Grid width='150px'>
                <Text size='24px'>프로필</Text>
              </Grid>
              <Image
                shape='circle'
                size='150'
                src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
              />
            </Grid>

            <Grid isFlex width='500px' height='120px' margin='25px auto 25px 0'>
              <Grid width='150px'>
                <Text size='24px'>닉네임</Text>
              </Grid>
              <Grid width='310px'>
                <Text size='24px'>
                  {window.localStorage.getItem('nickname')}님
                </Text>
              </Grid>
            </Grid>
            <Grid
              isFlex
              width='700px'
              height='120px'
              margin='25px auto 25px auto'
            >
              <Grid width='150px'>
                <Text size='24px'>자기소개</Text>
              </Grid>
              <Grid>
                <Text size='24px' width='510px'>
                  {window.localStorage.getItem('intro')}
                </Text>
              </Grid>
            </Grid>
            <Grid isFlex width='700px' height='120px' margin='25px auto 25px 0'>
              <Grid width='150px'>
                <Text size='24px'>관심사 설정</Text>
              </Grid>
              <Grid display='flex' width='510px'>
                {/* <Grid
                  width='142px'
                  height='34px'
                  border='2px solid #23C8AF'
                  bg='white'
                  borderRadius='25px'
                  margin='0 6px 0 0'
                >
                  <Text align='center' color='#23C8AF' size='20px'>
                    {window.localStorage.getItem('distance')}
                  </Text>
                </Grid> */}
                <Grid margin='0 6px 0 0'>
                  <Tags large>{window.localStorage.getItem('distance')}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{window.localStorage.getItem('location')}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{window.localStorage.getItem('type')}</Tags>
                </Grid>
              </Grid>
            </Grid>
            <Grid isFlex width='500px' height='120px' margin='25px auto 25px 0'>
              <Grid width='150px'>
                <Text size='24px'>보유 뱃지</Text>
              </Grid>
              <Grid width='310px'>
                <Text size='24px'>뱃지 아이콘</Text>
              </Grid>
            </Grid>
            <Grid mainFlex justifyContent='center' padding='0 0 65px 0'>
              <Buttons large_b _onClick={() => history.push('/my/edit')}>
                회원정보 수정
              </Buttons>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default MypageForm;
