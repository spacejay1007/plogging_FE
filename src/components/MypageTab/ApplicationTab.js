// ApplicationTab
import React from 'react';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';
import Rating from '@mui/material/Rating';
import BookMark from '../../assets/Icon/BookMark.svg';
import Location from '../../assets/Icon/Location.svg';

const ApplicationTab = (props) => {
  return (
    <React.Fragment>
      <Container cursor='pointer'>
        <Grid>
          <Grid
            maxWidth='1161px'
            // height='257px'
            border='1px solid #DCDCDC'
            borderRadius='7px'
            margin='auto'
            overFlow
            isFlex
          >
            <Grid width='370px' height='' isPosition='relative'>
              <Image src={props.postImg} />

              <Grid
                width='50px'
                height='24px'
                isPosition='absolute'
                top='2%'
                borderRadius='5px'
                bg='#23c8af'
                margin='8px 0px 0px 8px'
              >
                <Text
                  align='center'
                  bold
                  color='white'
                  size='14px'
                  margin='2px 6px'
                >
                  D-{props.dday}
                </Text>
              </Grid>
            </Grid>
            {/* padding="10px 18px 16px 18px " */}
            <Grid width='40%' margin='10px 18px 16px 18px'>
              <Grid flexLeft padding='0 0 15px 0'>
                <Icon width='25px' src={Location} />
                <Text size='14px'>서울시 {props.location}</Text>
              </Grid>
              <Text
                width='250px'
                margin='0 0 30px 0'
                bold
                size='24px'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                overFlow='hidden'
                display='block'
              >
                {props.title}
              </Text>
              <Grid flexLeft>
                <Grid
                  width='66px'
                  height='22px'
                  border='1px solid #23C8AF'
                  bg='#23C8AF'
                  padding='2px '
                  borderRadius='9px'
                  margin='0px 6px 0px 0px'
                >
                  <Text
                    align='center'
                    color='#eeeeee'
                    size='9px'
                    // margin="2px 6px"
                  >
                    {props.type}
                  </Text>
                </Grid>
                <Grid
                  width='66px'
                  height='22px'
                  border='1px solid #23C8AF'
                  bg='#23C8AF'
                  padding='2px '
                  borderRadius='9px'
                  margin='0px 6px 0px 0px'
                >
                  <Text
                    align='center'
                    color='#eeeeee'
                    size='9px'
                    // margin="2px 6px"
                  >
                    {props.location}
                  </Text>
                </Grid>
                <Grid
                  width='66px'
                  height='22px'
                  border='1px solid #23C8AF'
                  bg='#23C8AF'
                  padding='2px '
                  borderRadius='9px'
                  margin='0px 6px 0px 0px'
                >
                  <Text
                    align='center'
                    color='#eeeeee'
                    size='9px'
                    // margin="2px 6px"
                  >
                    {props.distance}
                  </Text>
                </Grid>
              </Grid>
              <Grid flexLeft padding='0 0 10px 0'>
                <Text size='18px' bold>
                  모임날짜
                </Text>
                <Text margin='0px 0px 0px 10px' size='18px'>
                  {/* 2021.10.26 (화) PM 2:00 */}
                  {props.runningDate}
                </Text>
              </Grid>
              <Grid flexLeft padding='0 0 35px 0'>
                <Text size='18px' bold>
                  모집인원
                </Text>
                <Text margin='0px 0px 0px 10px' size='18px'>
                  {props.nowPeople} 명 / {props.limitPeople} 명
                </Text>
              </Grid>
              <Grid flexLeft padding='0 0 10px 0'>
                <Image
                  shape='circle'
                  src='https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266'
                />
                <Text size='18px' color='#ACACAC'>
                  {props.nickname} 의 모임
                </Text>
              </Grid>
            </Grid>
            <Grid height='370px' margin='0 10px 0 0'>
              <Grid width='278px' height='87px' margin='120px 0 50px 0'>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모임날짜
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.runningDate}
                  </Text>
                </Grid>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모집인원
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.limitPeople}명
                  </Text>
                </Grid>
                <Grid flexLeft padding='0 0 5px 0'>
                  <Text size='16px' bold>
                    모집기간
                  </Text>
                  <Text size='16px' margin='0 0 0 5px'>
                    {props.startDate}~{props.endDate}
                  </Text>
                </Grid>
              </Grid>
              {props.runningDate === props.dday &&
              props.limitePeople - props.nowPeople === 0 ? (
                <Buttons width='270px' medium_b>
                  후기 작성하기
                </Buttons>
              ) : (
                <Buttons
                  width='270px'
                  medium_b
                  _onClick={() => history.push(`/reviewwrite/${props.postId}`)}
                >
                  모임 상세보기
                </Buttons>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ApplicationTab;
