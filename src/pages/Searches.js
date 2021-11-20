import React from 'react';

import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons, Icon } from '../elements/index';
import upIcon from '../assets/Icon/upIcon.svg';
import downIcon from '../assets/Icon/downIcon.svg';
import mapIcon from '../assets/Icon/mapIcon.svg';
import distanceIcon from '../assets/Icon/distanceIcon.svg';
import pinIcon from '../assets/Icon/pinIcon.svg';
import searchIcon from '../assets/Icon/searchIcon.svg';
import resetIcon from '../assets/Icon/resetIcon.svg';

import { postActions } from '../redux/modules/post';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/Searches/PostCard';

const Searches = (props) => {
  const dispatch = useDispatch();
  const all_list = useSelector((state) => state.post.all.data);
  React.useEffect(() => {
    dispatch(postActions.getAllDB());
  }, []);

  const parentRef = React.useRef(null);
  const childRef = React.useRef(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'transparent';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'transparent';
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse],
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? '▲' : '▼';

  return (
    <React.Fragment>
      <Grid center>
        <Grid bg="#f8f8f8" padding="10px 0px 40px 0px">
          <Grid margin="auto" center>
            <Text size="28px" bold margin="15px 0px" color="#333333">
              참여하기
            </Text>
            <Text size="18px" color="#666666" margin="10px 0px">
              다양한 크루를 탐색하거나 원하는 관심사를 설정하여 맞춤형 크루를
              찾을 수 있어요.
            </Text>
            <Text size="18px" color="#666666">
              참여는 신청 버튼 하나로 쉽고 빠르게!
            </Text>
          </Grid>
        </Grid>
        <Grid width="1170px" center margin="auto" padding="50px 0px">
          <Container>
            <Header onClick={handleButtonClick}>
              검색필터
              <Button>{buttonText}</Button>
            </Header>
            <ContentsWrapper ref={parentRef}>
              <Contents ref={childRef}>
                <Grid>
                  <Grid flexLeft>
                    <Image
                      shape="rec"
                      width="20px"
                      height="20px"
                      src={mapIcon}
                      margin="4px 10px 0px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px 0px"
                    >
                      장소별
                    </Text>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>장소 전체</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>도심(시내)</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>공원</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>한강</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>산 또는 숲</Tags>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px -5px">
                    <Image
                      shape="rec"
                      width="25px"
                      height="20px"
                      src={distanceIcon}
                      margin="4px 10px 0px 3px"
                      padding="3px 0px 0px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px -3px"
                    >
                      거리별
                    </Text>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>거리 전체</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>1km 이내</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>1km~3km</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>3km~5km</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>5km 이상</Tags>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 0px">
                    <Image
                      shape="rec"
                      width="20px"
                      height="20px"
                      src={pinIcon}
                      margin="4px 10px 0px 0px"
                      padding="2px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px 0px"
                    >
                      지역별
                    </Text>
                    <Text size="14px" color="#666666" margin="2px 0px 0px 0px">
                      원하는 지역을 최대 3개까지 선택해주세요. (현재 서울 지역만
                      서비스 지원)
                    </Text>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>지역 전체</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>강남구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>강동구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>강북구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>강서구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>관악구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>광진구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>구로구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>금천구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>노원구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>도봉구</Tags>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>동대문구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>동작구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>마포구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>서대문구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>서초구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>성동구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>성북구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>송파구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>양천구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>영등포구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>용산구</Tags>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>은평구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>종로구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>중구</Tags>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Tags medium>중랑구</Tags>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid centerFlex margin="20px 0px 0px 0px">
                      <Grid margin="0px 10px 0px 0px">
                        <Buttons small_b>검색</Buttons>
                      </Grid>
                      <Grid>
                        <Buttons small>필터 초기화</Buttons>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Contents>
            </ContentsWrapper>
          </Container>
          <Grid isFlex margin="50px 0px 20px 0px">
            <Grid>
              <Text margin="0px 0px 0px 10px" color="#333333" size="18px" bold>
                총 {all_list?.length}건
              </Text>
            </Grid>
            <Grid centerFlex margin="3px 0px 0px 0px">
              <Buttons search>추천순</Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search>마감임박순</Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search>최근날짜순</Buttons>
            </Grid>
          </Grid>
          <Grid grid>
              {all_list?.map((a, idx)=>{
                  return <PostCard {...a}/>
              })}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid #d8d8d8;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #acacac;
`;

const Button = styled.div`
  top: 5px;
  right: 7px;
  position: absolute;
  padding: 10px;
  color: #acacac;
  font-size: 15px;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  padding: 0 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 40px;
`;

export default Searches;
