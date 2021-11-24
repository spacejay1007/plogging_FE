import React from 'react';
import { Container, Grid, Button, Image, Text, Buttons } from '../elements';

export const Footer = () => {
  return (
    <React.Fragment>
      <Grid margin='200px 0 0 0'>
        <Grid margin='auto' width='100%' height='310px' bg='#f8f8f8'>
          <Grid flexLeft margin='auto' width='1290px' height='100%'>
            <Grid margin='0px 120px 0px 0px'>
              <Image
                shape='rec'
                width='150px'
                height='60px'
                src='https://jupgging-image.s3.ap-northeast-2.amazonaws.com/jupgging_logo_footer.png'
              />
              <Text margin='20px 0px' size='14px'>
                줍깅 운영정책 | 개인정보처리방침 | 이용약관
              </Text>
            </Grid>
            <Grid margin='0px 120px 0px 0px'>
              <Text bold>Service</Text>
              <Text margin='20px 0px 10px 0px' size='14px'>
                서비스 소개
              </Text>
              <Text margin='0px 0px 20px 0px' size='14px'>
                서비스 이용 방법
              </Text>
            </Grid>
            <Grid margin='0px 120px 0px 0px'>
              <Text bold>Support</Text>
              <Text margin='20px 0px 10px 0px' size='14px'>
                공지사항
              </Text>
              <Text margin='0px 0px 20px 0px' size='14px'>
                문의하기
              </Text>
            </Grid>
            <Grid>
              <Text bold>FAQ</Text>
              <Text margin='20px 0px 50px 0px' size='14px'>
                자주 묻는 질문
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
