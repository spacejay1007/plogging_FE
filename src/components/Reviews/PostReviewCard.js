import React from 'react';
import {
  Container,
  Grid,
  Image,
  Text,
  Icon,
  Buttons,
} from '../../elements/index';

import img1 from '../../assets/img1.jpg';
import Location from '../../assets/Icon/Location.svg';

const PostReviewCard = (props) => {
  const review_list = props.review_list;
  // console.log(review_list);

  const postImg = review_list?.postImg;
  const location = review_list?.location;
  const title = review_list?.title;
  const content = review_list?.content;
  const type = review_list?.type;
  const distance = review_list?.distance;
  const userImg = review_list?.userImg;
  const writerName = review_list?.writerName;

  const runningDate = review_list?.runningDate;
  const limitPeople = review_list?.limitPeople;
  const startDate = review_list?.startDate;
  const endDate = review_list?.endDate;

  return (
    <React.Fragment>
      <Container>
        <Grid
          isFlex
          overFlow
          maxWidth="1160px"
          minWidth="500px"
          height="257px"
          border="1px solid #ACACAC"
          borderRadius="10px"
        >
          <Grid minWidth="255px">
            <Image src={postImg}></Image>
          </Grid>
          <Grid>
            <Grid width="400px" flexLeft>
              <Icon width="25px" src={Location} />
              <Text size="14px">서울시 {location}</Text>
            </Grid>
            <Grid>
              <Text> {title}</Text>
              {/* <Text
                width="300px"
                height=""
                size="10px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overFlow="hidden"
                display="block"
              > */}{' '}
              {/* dangerouslySetInnerHTML={{ __html: content }} */}
              {/* {} */}
              {/* </Text> */}
            </Grid>
            <section>
              <Grid flexLeft>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {type}
                  </Text>
                </Grid>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {distance}
                  </Text>
                </Grid>
                <Grid
                  width="50px"
                  height="20px"
                  border="1px solid #d8d8d8"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#333333"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {/* {props.distance} */}
                  </Text>
                </Grid>
              </Grid>
              <Grid flexLeft>
                <Image shape="circle" src={userImg} />
                <Text size="14px">{writerName}의 모임</Text>
              </Grid>
            </section>
          </Grid>

          <Grid width="70%">
            <Grid flexLeft>
              <Text size="14px" bold>
                모임날짜
              </Text>
              <Text size="14px">{runningDate}</Text>
            </Grid>
            <Grid flexLeft>
              <Text size="14px" bold>
                모임인원
              </Text>
              <Text size="14px"> {limitPeople}명 </Text>
            </Grid>
            <Grid flexLeft>
              <Text size="14px" bold>
                모집기간
              </Text>
              <Text size="14px">
                {startDate} ~ {endDate}
              </Text>
            </Grid>
            <Buttons enter> 모임 상세보기</Buttons>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostReviewCard;
