import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons } from '../elements/index';

export const CommentList = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid
        isFlex
        borderBottom="2px solid #eeeeee"
        height="70px"
        margin="15px 0px"
      >
        <Grid flexLeft>
          <Image
            shape="circle"
            src={
              props?.userImg
                ? `${props?.userImg}`
                : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
            }
            // src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
            size="28"
            margin="-10px 10px 0px 0px"
          />
          <Grid>
            <Text bold color="#333333" size="14px">
              {props?.nickname ? props?.nickname : ''}
            </Text>
            <Text color="#acacac" size="14px" margin="0px 0px 15px 0px">
              {props?.modifiedAt ? props?.modifiedAt : ''}
            </Text>
          </Grid>
        </Grid>
        <Grid width="500px" height="48px">
          <Text color="#acacac" size="14px" margin="-5px 0px 15px 0px">
            {props?.content ? props?.content : ''}
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
