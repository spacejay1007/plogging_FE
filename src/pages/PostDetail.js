import React, { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';
import { actionsCreators as commentActions } from '../redux/modules/comment';
import { apis } from '../shared/axios';
import { history } from '../redux/configureStore';

// elements / mui
import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons } from '../elements/index'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import { Comment } from '../components/Comment';

const PostDetail = (props) => {

  console.log(props);

    const dispatch = useDispatch();
    var post_index = parseInt(props.match.params.id);
    console.log(post_index);

    const detail = useSelector((state) => state.post.detail?.data);
    const [Comments, setComments] = React.useState([]);

    console.log(Comments);

    const deadline = detail?.limitPeople - detail?.nowPeople

    useEffect(() => {
        dispatch(postActions.getPostDetailDB(post_index));
        
        apis
          .getComment(post_index)
          .then((res) => {
            const comments = res.data.data;
            console.log(comments);
            setComments(comments);

          })
          .catch((err) => console.log(err, '댓글불러오기에러'));
    }, [Comments.length])

    var refreshComment = (newComment) => {
      setComments(Comments.concat(newComment))
    }

    return (
      <React.Fragment>
        {/* <Grid _className="content"> */}
        {/* <Grid
            _className="sticky"
            width="370px"
            height="424px"
            border="1px solid #eeeeee"
            borderRadius="10px"
          >
            스티키
          </Grid> */}
        <Content>
          <Section>
            <ContentBody>
              <Image
                shape="rec"
                src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%B7+%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6+%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3+1.png"
                width="264px"
                height="205px"
                margin="0px 0px 40px 0px"
              />
              <Grid isFlex>
                <Grid flexLeft>
                  <Grid margin="0px 5px 0px 0px">
                    <Tags small>{detail?.location}</Tags>
                  </Grid>
                  <Grid margin="0px 5px 0px 0px">
                    <Tags small>{detail?.type}</Tags>
                  </Grid>
                  <Grid margin="0px 5px 0px 0px">
                    <Tags small>{detail?.distance}</Tags>
                  </Grid>
                </Grid>
                <Grid isFlex>
                  <Grid margin="6px 0px 0px 0px">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </Grid>
                  <Text color="#acacac" size="14px" margin="0px 5px">
                    조회수 {detail?.viewCount}
                  </Text>
                  <Grid margin="6px 2px 0px 0px">
                    <BookmarkBorderOutlinedIcon fontSize="small" />
                  </Grid>
                  <Text color="#acacac" size="14px">
                    북마크수{' '}
                    {detail?.totalBookMarkCount
                      ? detail?.totalBookMarkCount
                      : '0'}
                  </Text>
                </Grid>
              </Grid>
              <Text bold size="40px" margin="0px 0px 40px 0px" color="#333333">
                {detail?.title}
              </Text>
              <Grid flexLeft>
                <Grid margin="-8px 0px 0px 0px">
                  <RoomOutlinedIcon fontSize="small" />
                </Grid>
                <Text color="#acacac" size="14px" margin="0px 0px 15px 0px">
                  서울시 {detail?.location}
                </Text>
              </Grid>
              <Image
                shape="rec"
                width="701px"
                height="489px"
                borderRadius="10px"
                margin="0px 0px 40px 0px"
                src={detail?.postImg}
              />
              <Text size="14px" color="#23C8AF" margin="0px 0px 10px 0px">
                우리 크루 모임장을 소개합니다!
              </Text>
              <Text bold size="28px" color="#333333" margin="0px 0px 20px 0px">
                모임장 소개
              </Text>
              <Grid flexLeft>
                <Grid>
                  <Image
                    shape="circle"
                    src={
                      detail?.userImg
                        ? `${detail?.userImg}`
                        : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                    }
                    // src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                    size="178"
                    margin="40px 40px 40px 10px"
                  />
                </Grid>
                <Grid>
                  <Grid flexLeft margin="0px 0px 20px 0px">
                    <Text bold color="#333333" size="20px">
                      {detail?.writerName}
                    </Text>
                    <Text color="#333333" size="18px">
                      님
                    </Text>
                  </Grid>

                  <Text width="453px" size="18px" color="#666666">
                    {detail?.crewHeadIntro ? detail?.crewHeadIntro : ''}
                  </Text>
                </Grid>
              </Grid>
              <Grid>
                <Text size="14px" color="#23C8AF" margin="80px 0px 10px 0px">
                  우리 크루 모임을 소개합니다!
                </Text>
                <Text
                  bold
                  size="28px"
                  color="#333333"
                  margin="0px 0px 20px 0px"
                >
                  모임 소개
                </Text>
                <Grid width="690px">
                  <ContentBody
                    dangerouslySetInnerHTML={{ __html: detail?.content }}
                  ></ContentBody>
                </Grid>
                <Text size="14px" color="#23C8AF" margin="80px 0px 10px 0px">
                  신청 전 꼭 확인해주세요!
                </Text>
                <Text
                  bold
                  size="28px"
                  color="#333333"
                  margin="0px 0px 20px 0px"
                >
                  모임 상세 안내
                </Text>
                <Grid flexLeft margin="40px 0px 20px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    모임이름
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.title}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 20px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    모임날짜
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.runningDate}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 20px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    모집기간
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.startDate} ~ {detail?.endDate}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 18px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    모임지역
                  </Text>
                  <Text color="#666666" size="18px">
                    서울시 {detail?.location}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 17px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    장소유형
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.type}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 18px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    진행거리
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.distance}
                  </Text>
                </Grid>
                <Grid flexLeft margin="0px 0px 20px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="18px"
                    margin="0px 40px 0px 0px"
                  >
                    모임인원
                  </Text>
                  <Text color="#666666" size="18px">
                    {detail?.limitPeople}명
                  </Text>
                </Grid>
                <Grid margin="80px 0px">
                  <Text
                    bold
                    size="28px"
                    color="#333333"
                    margin="0px 0px 20px 0px"
                  >
                    모임장에게 물어보세요
                  </Text>
                  <Grid padding="30px" width="770px">
                    <Grid>
                      <Comment
                        refreshComment={refreshComment}
                        CommentLists={Comments}
                        post_id={post_index}
                      />
                    </Grid>
                    {/* <Grid>
                    {comment_list?.map((i, idx) => {
                      return (
                      <CommentList {...i} />
                      );
                    })}
                    </Grid> */}
                    {/* <Grid isFlex height="70px" margin="15px 0px">
                      <Grid flexLeft>
                        <Image
                          shape="circle"
                          src={
                            detail?.userImg
                              ? `${detail?.userImg}`
                              : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                          }
                          // src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                          size="54"
                          margin="-10px 10px 0px 0px"
                        />
                        <Grid>
                          <CommentWrite post_id={post_index} />
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </ContentBody>
            <Sticky>
              <Grid padding="30px">
                <Grid isFlex>
                  <Grid flexLeft>
                    <Image
                      shape="circle"
                      // src={
                      //   detail?.userImg
                      //     ? `${detail?.userImg}`
                      //     : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
                      // }
                      src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                      size="28"
                      margin="0px 10px 0px 0px"
                    />
                    <Text bold color="#333333" size="14px">
                      {detail?.writerName}
                    </Text>
                    <Text color="#333333" size="14px">
                      님의 모임
                    </Text>
                  </Grid>
                  <Grid>
                    <Tags rec_green>D-{detail?.dday}</Tags>
                  </Grid>
                </Grid>
                <Text bold size="20px" margin="10px 0px" color="#333333">
                  {detail?.title}
                </Text>
                <Grid flexLeft>
                  <Grid margin="-8px 0px 0px 0px">
                    <RoomOutlinedIcon fontSize="small" />
                  </Grid>
                  <Text color="#acacac" size="14px" margin="0px 0px 15px 0px">
                    서울시 {detail?.location}
                  </Text>
                </Grid>
                <Grid flexLeft margin="10px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="14px"
                    margin="0px 20px 0px 0px"
                  >
                    모임날짜
                  </Text>
                  <Text color="#666666" size="14px">
                    {detail?.runningDate}
                  </Text>
                </Grid>
                <Grid flexLeft margin="10px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="14px"
                    margin="0px 20px 0px 0px"
                  >
                    모집인원
                  </Text>
                  <Text color="#666666" size="14px">
                    {detail?.nowPeople}명/{detail?.limitPeople}명
                  </Text>
                  {deadline <= 1 ? (
                    <Grid margin="0px 20px">
                      <Tags rec_blue>마감임박</Tags>
                    </Grid>
                  ) : (
                    ''
                  )}
                </Grid>
                <Grid flexLeft margin="10px 0px">
                  <Text
                    bold
                    color="#333333"
                    size="14px"
                    margin="0px 20px 0px 0px"
                  >
                    모임날짜
                  </Text>
                  <Text color="#666666" size="14px">
                    {detail?.startDate} ~ {detail?.endDate}
                  </Text>
                </Grid>
                <Grid isFlex justifyContent="center" margin="30px 0px 15px 0px">
                  <Grid>
                    <Buttons enter>모임 참여 신청하기</Buttons>
                  </Grid>
                </Grid>
                <Grid isFlex justifyContent="center">
                  <Grid>
                    <Buttons medium>북마크 하기</Buttons>
                  </Grid>
                </Grid>
              </Grid>
            </Sticky>
          </Section>
        </Content>
        {/* </Grid> */}
      </React.Fragment>
    );
}

const ContentBody = styled.div`
  color: #666666;
  grid-column: 1 / 3;
`;

const IntroBody = styled.div`
`;

const Content = styled.div`
    width: 100%;
    width: 1300px;
    margin: 40px auto;
`;

const Section = styled.div`
    display: grid;
    grid: auto / 200px 1fr;
    grid-gap: 0 2em;
`;

const Sticky = styled.div`
    width: 370px;
    height: 424px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    grid-column:  3;
    align-self: start;
    position: sticky;
    top: 50px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3)
`;

export default PostDetail;