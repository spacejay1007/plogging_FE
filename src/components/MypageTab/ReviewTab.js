// ReviewTab card
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';
import Location from '../../assets/Icon/Location.svg';
import Rating from '@mui/material/Rating';

const ReviewTab = (props) => {
  return (
    <React.Fragment>
      <Container cursor='pointer'>
        <Grid>
          <Grid
            maxWidth='1161px'
            // height='257px'
            border='1px solid #DCDCDC'
            borderRadius='7px'
            margin='20px auto'
            overFlow
            isFlex
          >
            <Grid width='370px' height='' isPosition='relative'>
              <Image src={props.reviewImg} />
              {/* <Grid
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
              </Grid> */}
            </Grid>
            <Grid width='40%' margin='10px 18px 16px 18px'>
              <Grid flexLeft padding='0 0 15px 0'>
                <Icon width='25px' src={Location} />
                <Text size='14px'>서울시 {props.location}</Text>
              </Grid>
              <Text
                width='250px'
                margin='0 0 10px 0'
                bold
                size='24px'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                overFlow='hidden'
                display='block'
              >
                {props.title}
              </Text>
              <Grid flexLeft padding='0 0 10px 0'>
                <Text size='18px'>{props.content}</Text>
              </Grid>
              <Grid flexLeft padding='0 0 35px 0'>
                <StarSize>
                  <Grid flexLeft>
                    <Text
                      align='center'
                      color='#333'
                      margin='0px 30px 0px 0px '
                    >
                      {' '}
                      평점{' '}
                    </Text>
                    <Rating
                      name='read-only'
                      size='large'
                      value={props.star}
                      readOnly
                    />
                  </Grid>
                </StarSize>
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
              <Grid margin='95px 0 0 0'>
                <Buttons
                  width='270px'
                  medium_b
                  _onClick={() => history.push(`/review/${props.reviewId}`)}
                >
                  후기 상세보기
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const StarSize = styled.span`
  .MuiRating-root.MuiRating-sizeLarge.MuiRating-readyOnly.css-1x1lh1c-MuiRating-root {
    font-size: 50px;
  }
`;

export default ReviewTab;
