import React, { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';
import { history } from '../redux/configureStore';

// elements / mui
import styled from 'styled-components';
import { Grid, Text, Image } from '../elements/index'

const PostDetail = (props) => {

    const dispatch = useDispatch();
    let post_index = parseInt(props.match.params.id);
    console.log(post_index);
    const detail = useSelector((state) => state.post.detail?.data);
    console.log(detail);

    useEffect(() => {
        dispatch(postActions.getPostDetailDB(post_index))
    }, [])
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
          <Sticky>스티키</Sticky>
          <ContentBody>
            <Text>{detail?.writerName}의 모임</Text>
            <Text>D-{detail?.dday}</Text>
            <Text>서울시 {detail?.location}</Text>
            <Text>모임날짜 {detail?.runningDate}</Text>
            <Text>
              모임인원 {detail?.nowPeople}/{detail?.limitPeople}
            </Text>
            <Text>
              모집기간 {detail?.startDate} ~ {detail?.endDate}
            </Text>
            <Text>조회수 {detail?.viewCount}</Text>
            <Text>
              북마크수 {detail?.bookMarkInfo ? detail?.bookMarkInfo : ''}
            </Text>
            <Text>제목 {detail?.title}</Text>
            <Text>모임장 소개 {detail?.intro ? detail?.intro : ''}</Text>
            <ContentBody
              dangerouslySetInnerHTML={{ __html: detail?.content }}
            ></ContentBody>
            <Text>장소유형 {detail?.type}</Text>
            <Text>진행거리 {detail?.distance}</Text>

            <Text>{detail?.writerName}의 모임</Text>
            <Text>D-{detail?.dday}</Text>
            <Text>서울시 {detail?.location}</Text>
            <Text>모임날짜 {detail?.runningDate}</Text>
            <Text>
              모임인원 {detail?.nowPeople}/{detail?.limitPeople}
            </Text>
            <Text>
              모집기간 {detail?.startDate} ~ {detail?.endDate}
            </Text>
            <Text>조회수 {detail?.viewCount}</Text>
            <Text>
              북마크수 {detail?.bookMarkInfo ? detail?.bookMarkInfo : ''}
            </Text>
            <Text>제목 {detail?.title}</Text>
            <Text>모임장 소개 {detail?.intro ? detail?.intro : ''}</Text>
            <ContentBody
              dangerouslySetInnerHTML={{ __html: detail?.content }}
            ></ContentBody>
            <Text>장소유형 {detail?.type}</Text>
            <Text>진행거리 {detail?.distance}</Text>

            <Text>{detail?.writerName}의 모임</Text>
            <Text>D-{detail?.dday}</Text>
            <Text>서울시 {detail?.location}</Text>
            <Text>모임날짜 {detail?.runningDate}</Text>
            <Text>
              모임인원 {detail?.nowPeople}/{detail?.limitPeople}
            </Text>
            <Text>
              모집기간 {detail?.startDate} ~ {detail?.endDate}
            </Text>
            <Text>조회수 {detail?.viewCount}</Text>
            <Text>
              북마크수 {detail?.bookMarkInfo ? detail?.bookMarkInfo : ''}
            </Text>
            <Text>제목 {detail?.title}</Text>
            <Text>모임장 소개 {detail?.intro ? detail?.intro : ''}</Text>
            <ContentBody
              dangerouslySetInnerHTML={{ __html: detail?.content }}
            ></ContentBody>
            <Text>장소유형 {detail?.type}</Text>
            <Text>진행거리 {detail?.distance}</Text>

            <Text>{detail?.writerName}의 모임</Text>
            <Text>D-{detail?.dday}</Text>
            <Text>서울시 {detail?.location}</Text>
            <Text>모임날짜 {detail?.runningDate}</Text>
            <Text>
              모임인원 {detail?.nowPeople}/{detail?.limitPeople}
            </Text>
            <Text>
              모집기간 {detail?.startDate} ~ {detail?.endDate}
            </Text>
            <Text>조회수 {detail?.viewCount}</Text>
            <Text>
              북마크수 {detail?.bookMarkInfo ? detail?.bookMarkInfo : ''}
            </Text>
            <Text>제목 {detail?.title}</Text>
            <Text>모임장 소개 {detail?.intro ? detail?.intro : ''}</Text>
            <IntroBody
              dangerouslySetInnerHTML={{ __html: detail?.content }}
            ></IntroBody>
            <Text>장소유형 {detail?.type}</Text>
            <Text>진행거리 {detail?.distance}</Text>
            <Image src={detail?.postImg}></Image>
        </ContentBody>
          </Section>
        </Content>
        {/* </Grid> */}
      </React.Fragment>
    );
}

const ContentBody = styled.div`
    grid-column: 2 / 3;
`;

const IntroBody = styled.div`
`;

const Content = styled.div`
    width: 90%;
    max-width: 750px;
    margin: 0 auto;
`;

const Section = styled.div`
    border: 2px solid red;
    display: grid;
    grid: auto / 200px 1fr;
    grid-gap: 0 2em;
`;

const Sticky = styled.div`
    border: 1px solid #eeeeee;
    border-radius: 10px;
    grid-column: 1 / 2;
    align-self: start;
    positon: sticky;
    top: 50px;
`;

export default PostDetail;