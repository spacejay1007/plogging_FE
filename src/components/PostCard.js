import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';
// import BookMarks from '../assets/Icon/BookMarks.svg';
import Share from '../assets/Icon/Share.svg';
import { useDispatch } from 'react-redux';

const PostCard = (props) => {
  const {
    postId,
    title,
    dday,
    postImg,
    RunningDate,
    limitPeople,
    nowPeople,
    bookMarkInfo,
    userImg,
    writerName,
  } = props;
  // const dispatch = useDispatch();
  // const [bookMark, setBookMark] = useState();

  const CardClick = () => {
    console.log('참석한다!');
  };
  return (
    <React.Fragment>
      <Container cursor="pointer">
        <Grid flexBasis>
          <Grid
            maxWidth="300px"
            width="100%"
            border="1px solid #DCDCDC"
            borderRadius="7px"
            margin="16px"
            overFlow
          >
            <Grid width="100%" isPosition="relative">
              <Image src="https://www.fashionn.com/files/board/2014/image/p18kdfg8duhp31ga61ear1biulqb1.jpg" />

              <Grid width="100%" isFlex isPosition="absolute" top="2%">
                <Grid flexLeft>
                  <Image
                    shape="circle"
                    src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                  />{' '}
                  <Text size="12px">userNickName</Text>
                </Grid>
                <Text bold margin="0px 12px">
                  D-3
                </Text>
              </Grid>
            </Grid>

            <Grid padding="16px 10px" _onClick={CardClick}>
              <Grid isFlex>
                <Text margin="12px 0px" size="12px">
                  # 도심속플로깅 # 점심플로깅
                </Text>
                <Grid isFlex>
                  <Icon width="25px" src={BookMark} _onClick={() => {}} />

                  <Icon width="25px" src={Share} />
                </Grid>
              </Grid>
              <Text bold size="20px" marg>
                플로깅 장소 명칭쓸거예요
              </Text>

              <Text margin="3px 10px" size="12px">
                서울시 강남구 삼성동
              </Text>

              <Grid flexLeft margin="20px 0px 0px 0px">
                <Text size="15px" bold>
                  모임날짜
                </Text>
                <Text margin="0px 0px 0px 10px" size="15px">
                  2021.10.26 (화) PM 2:00
                </Text>
              </Grid>
              <Grid flexLeft margin="10px 0px 20px 0px">
                <Text size="15px" bold>
                  모집인원
                </Text>
                <Text margin="0px 0px 0px 10px" size="15px">
                  20 명 / 30 명
                </Text>
              </Grid>
            </Grid>
            <Button width="100%" height="50px" bold size="14px" border="1px">
              지금 바로 참여하기
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container></Container>
    </React.Fragment>
  );
};

export default PostCard;
