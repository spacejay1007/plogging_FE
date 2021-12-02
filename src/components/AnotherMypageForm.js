import React from 'react';
import { Grid, Container, Text, Image, Buttons, Tags } from '../elements';
import { userCreators } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import AnotherProfileBadge from './MypageTab/AnotherProfileBadge';

const AnotherMypageForm = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.userData?.data[0]);

  const userId = Number(props.match.params.userId);
  console.log(userId);

  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo);
  React.useEffect(() => {
    dispatch(userCreators.postUserInfoDB(userId));
    // dispatch(userCreators.getUserDB());
  }, []);

  return (
    <React.Fragment>
      <Grid width='1440px' margin='0 auto'>
        <Container>
          <Grid center width='330px' margin='auto'>
            <Grid mainFlex justifyContent='center' padding='0 0 10px 0'>
              <Grid>
                {users?.userImg === null ? (
                  <Image
                    shape='circle'
                    size='150'
                    src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                  />
                ) : (
                  <Image shape='circle' size='150' src={userInfo?.userImg} />
                )}
              </Grid>
            </Grid>
            <Text size='24px' padding='10px 0 10px 0' bold>
              {userInfo?.nickname}
            </Text>
            {/* <Grid margin="10px auto 40px auto">
              <Tags large>
                {userInfo?.email}
                {userInfo?.nickname}
              </Tags>
            </Grid> */}
          </Grid>
          <Grid width='700px' margin='0 auto'>
            <Grid
              centerFlex
              width='700px'
              height='120px'
              margin='25px auto 25px auto'
            >
              <Text isFlex size='19px' width='510px'>
                {userInfo?.intro}
              </Text>
            </Grid>
            <Grid
              centerFlex
              width='700px'
              height='120px'
              margin='25px auto 45px 0'
            >
              <Grid centerFlex width='510px'>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{userInfo?.distance}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{userInfo?.location}</Tags>
                </Grid>
                <Grid margin='0 6px 0 0'>
                  <Tags large>{userInfo?.type}</Tags>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              centerFlex
              width='700px'
              height='100%'
              margin='25px auto 25px auto'
            >
              <Grid topStartFlex wrap width='510px'>
                <AnotherProfileBadge />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default AnotherMypageForm;
