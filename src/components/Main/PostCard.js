import React from 'react';
import { Container, Grid, Image, Text, Icon } from '../../elements/index';
import BookMark from '../../assets/Icon/BookMark.svg';
import Location from '../../assets/Icon/Location.svg';

const PostCard = (props) => {
  const deadLine = props.limitPeople - props.nowPeople;
  const CardClick = () => {
    console.log('디테일로간다!!');
  };

  return (
    <React.Fragment>
      <Container cursor="pointer">
        <Grid>
          <Grid
            maxWidth="270px"
            // height="380px"
            border="1px solid #DCDCDC"
            borderRadius="7px"
            overFlow
            _onClick={CardClick}
          >
            <Grid width="100%" isPosition="relative">
              <Image src={props.postImg} />

              <Grid
                width="50px"
                height="24px"
                isPosition="absolute"
                top="2%"
                borderRadius="5px"
                bg="#23c8af"
                margin="8px 0px 0px 8px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px 6px"
                >
                  D-{props.dday}
                </Text>
              </Grid>
              {deadLine <= 2 ? (
                <Grid
                  minwidth="68px"
                  height="24px"
                  isPosition="absolute"
                  top="2%"
                  borderRadius="5px"
                  bg="#6984e4"
                  margin="8px 0px 0px 63px"
                >
                  <Text
                    align="center"
                    bold
                    color="white"
                    size="14px"
                    margin="2px"
                    padding="0px 4px"
                  >
                    마감임박
                  </Text>
                </Grid>
              ) : (
                ''
              )}
            </Grid>
            {/* padding="10px 18px 16px 18px " */}
            <Grid margin="10px 18px 16px 18px">
              <Grid width="100%" margin="0px 0px 4px 0px" isFlex>
                <Grid></Grid>
                <Icon width="35px" src={BookMark} _onClick={() => {}} />
              </Grid>
              <Text
                width="250px"
                bold
                size="20px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overFlow="hidden"
                display="block"
              >
                {props.title}
              </Text>
              <Grid flexLeft>
                <Icon width="25px" src={Location} />
                <Text size="14px">서울시 {props.location}</Text>
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
                />
                <Text size="14px">{props.nickname} 의 모임</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container></Container>
    </React.Fragment>
  );
};

export default PostCard;
