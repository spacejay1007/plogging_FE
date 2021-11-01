import React from 'react';
import { Container, Grid, Button, Image, Text, Icon } from '../elements/index';
import BookMark from '../assets/Icon/BookMark.svg';
import Location from '../assets/Icon/Location.svg';
// import BookMarks from '../assets/Icon/BookMarks.svg';
import Share from '../assets/Icon/Share.svg';
import { useDispatch } from 'react-redux';

const PostCard = (props) => {
  console.log(props);

  const CardClick = () => {
    // history.push("/detail/${postId}")
    console.log('디테일로간다!!');
  };
  return (
    <React.Fragment>
      <Container cursor="pointer">
        <Grid>
          <Grid
            maxWidth="270px"
            height="380px"
            border="1px solid #DCDCDC"
            borderRadius="7px"
            // margin="16px"
            overFlow
            _onClick={CardClick}
          >
            <Grid width="100%" isPosition="relative">
              <Image src={props.postImg} />
              {/* https://www.fashionn.com/files/board/2014/image/p18kdfg8duhp31ga61ear1biulqb1.jpg */}
              <Grid
                width="50px"
                height="24px"
                isPosition="absolute"
                top="2%"
                borderRadius="5px"
                bg="#23c8af"
                margin="8px 0px 0px 8px"
              >
                <Text bold color="white" size="14px" margin="0px 12px">
                  D-{props.dday}
                </Text>
              </Grid>
            </Grid>

            <Grid padding="0px 18px 16px 18px ">
              {/* <Grid isFlex> */}
              {/* <Text margin="12px 0px" size="12px">
                  # 도심속플로깅 # 점심플로깅
                </Text> */}
              <Grid width="100%" isFlex>
                <Text bold size="20px">
                  {props.title}
                </Text>
                <Icon width="35px" src={BookMark} _onClick={() => {}} />

                {/* <Icon width="25px" src={Share} /> */}
                {/* </Grid> */}
              </Grid>
              <Grid flexLeft>
                <Icon width="25px" src={Location} />
                <Text margin="10px 10px" size="14px">
                  서울시 {props.location}
                </Text>
              </Grid>
              <Grid flexLeft margin="10px 0px 0px 0px">
                <Text size="14px" bold>
                  일시
                </Text>
                <Text margin="0px 0px 0px 10px" size="14px">
                  {/* 2021.10.26 (화) PM 2:00 */}
                  {props.runningDate}
                </Text>
              </Grid>
              <Grid flexLeft margin="10px 0px 10px 0px">
                <Text size="14px" bold>
                  인원
                </Text>
                <Text margin="0px 0px 0px 10px" size="14px">
                  {props.nowPeople} 명 / {props.limitPeople} 명
                </Text>
              </Grid>
              <Grid flexLeft>
                <Image
                  shape="circle"
                  src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                />{' '}
                <Text size="14px">{props.nickname} 의 모임</Text>
              </Grid>
            </Grid>
            {/* <Button width="100%" height="50px" bold size="14px" border="1px">
              지금 바로 참여하기
            </Button> */}
          </Grid>
        </Grid>
      </Container>

      <Container></Container>
    </React.Fragment>
  );
};

export default PostCard;
