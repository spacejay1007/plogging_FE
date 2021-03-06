import React from 'react';
import { Container, Grid, Image, Text, Buttons, Tags } from '../elements';
import { ReviewTab } from './MypageTab';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';
import { userCreators } from '../redux/modules/user';
import UnReviewCard from './MypageTab/UnReviewCard';

const ReviewsMyForm = (props) => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.post.reviews?.data);

  const users = useSelector((state) => state.user.userData?.data[0]);

  const mypageNum = useSelector((state) => state.user.mypageNum?.data);

  React.useEffect(() => {
    dispatch(postActions.getMyReviewDB());
    dispatch(userCreators.getUserDB());
    dispatch(userCreators.getMyBadgeDB());
    dispatch(userCreators.getMyPageNumDB());
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
                  <Image shape='circle' size='150' src={users?.userImg} />
                )}
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
                ????????????
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
              <Text padding='0 0 15px 0'>??? ????????????</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/crews/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myCrews}
                </Text>
                <Text align='center' color='#23c8af'>
                  ???
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>??? ?????????</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/bookMark/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myBookmarks}
                </Text>
                <Text align='center' color='#23c8af'>
                  ???
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #D3D3D3'
            >
              <Text padding='0 0 15px 0'>??? ??????</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/reviews/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myReivews}
                </Text>
                <Text align='center' color='#23c8af'>
                  ???
                </Text>
              </Grid>
            </Grid>
            <Grid
              columnFlex
              width='242px'
              height='150px'
              borderRight='1px solid #F8F8F8'
            >
              <Text padding='0 0 15px 0'>?????? ??????</Text>
              <Grid
                alignEnd
                cursor='pointer'
                _onClick={() => history.push(`/my`)}
              >
                <Text size='27px' align='center' color='#23c8af' bold>
                  {mypageNum?.myBadges}
                </Text>
                <Text align='center' color='#23c8af'>
                  ???
                </Text>
              </Grid>
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
              ??? ?????????
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
              ?????? ??????
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
              ?????????
            </Text>
            <Text
              align='center'
              width='242px'
              height='44px'
              borderBottom='2px solid #212121'
              cursor='pointer'
            >
              ?????? ??????
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
              ?????? ??????
            </Text>
          </Grid>
          <Grid>
            {details?.length === 0 ? (
              <>
                <UnReviewCard />
              </>
            ) : (
              details
                ?.slice()
                .reverse()
                .map((p, idx) => {
                  return <ReviewTab {...p} />;
                })
            )}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default ReviewsMyForm;
