import React from 'react';
import { Container, Grid, Image, Text, Buttons } from '../elements';
import { ApplicationTab } from './MypageTab';
import MeetingManagement from './MypageTab/MeetingManagement';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { crewActions } from '../redux/modules/crew';
import { userCreators } from '../redux/modules/user';

const MeetingMyForm = (props) => {
  const dispatch = useDispatch();

  const crew_list = useSelector((state) => state.crew.crew);
  console.log(crew_list);

  React.useEffect(() => {
    dispatch(crewActions.crewDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width="1440px" margin="0px auto">
        <Container>
          <Grid width="1440px">
            <Grid center width="330px" margin="auto">
              <Grid mainFlex justifyContent="center" padding="0 0 10px 0">
                {crew_list?.userImg ? (
                  <>
                    <Image size="150" shape="circle" src={crew_list?.userImg} />
                  </>
                ) : (
                  <>
                    <Image
                      size="150"
                      shape="circle"
                      src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                    />
                  </>
                )}
              </Grid>
              <Text size="24px" padding="0 0 10px 0">
                {window.localStorage.getItem('nickname')}님
              </Text>
              <Text
                isFlex
                width="273px"
                height="47px"
                margin="0 auto 40px auto"
                borderRadius="24px"
                color="#333333"
                bg="#23c8af"
              >
                {window.localStorage.getItem('email')}
              </Text>
              <Grid center padding="0 0 120px 0">
                <Buttons
                  small_b
                  size="18px"
                  width="130px"
                  height="50px"
                  color="#fff"
                  bgColor="#333333"
                  borderRadius="10px"
                  _onClick={() => {
                    dispatch(userCreators.logOutMiddleware());
                  }}
                >
                  로그아웃
                </Buttons>
                {/* <Buttons
              width='150px'
              height='54px'
              borderRadius='10px'
              size='18px'
            >
              회원탈퇴
            </Buttons> */}
              </Grid>
            </Grid>
            <Grid isFlex width="969px" height="44px" margin="0 auto 100px auto">
              <Text
                align="center"
                width="242px"
                height="44px"
                color="#DBDCDB"
                borderBottom="2px solid #DBDCDB"
                cursor="pointer"
                _onClick={() => {
                  history.push('/my');
                }}
              >
                내 프로필
              </Text>
              <Text
                align="center"
                width="242px"
                height="44px"
                color="#DBDCDB"
                borderBottom="2px solid #DBDCDB"
                cursor="pointer"
                _onClick={() => {
                  history.push('/crews/my');
                }}
              >
                신청 내역
              </Text>
              <Text
                align="center"
                width="242px"
                height="44px"
                color="#DBDCDB"
                borderBottom="2px solid #DBDCDB"
                cursor="pointer"
                _onClick={() => {
                  history.push('/reviews/my');
                }}
              >
                후기 내역
              </Text>
              <Text
                align="center"
                width="242px"
                height="44px"
                borderBottom="2px solid #212121"
                cursor="pointer"
                _onClick={() => {
                  history.push('/meeting/my');
                }}
              >
                모임 관리
              </Text>
            </Grid>
            <Grid>
              <Text align="center" color="#666666" margin="0px 0px 5px 0px">
                모임 날짜 및 모집 기간, 모임 인원은 수정할 수 없습니다.
              </Text>
              <Text align="center" color="#666666">
                모임 날짜, 모집 기간, 모임 인원을 수정하고 싶으시다면 모임을
                삭제한 후 새로 모임을 만들어주세요.
              </Text>

              {crew_list?.map((p, idx) => {
                return <MeetingManagement {...p} key={idx} />;
              })}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default MeetingMyForm;
