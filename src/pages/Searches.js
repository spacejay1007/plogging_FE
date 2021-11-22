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
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { postActions } from '../redux/modules/post';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/Searches/PostCard';
import useSearchParams from '../shared/useSearchParams'
import { Link } from 'react-router-dom';
import { ToggleButtonGroup } from '@mui/material';

const Searches = (props) => {
  const dispatch = useDispatch();
  const all_data = useSelector((state) => state.post.all.data);
  const all_list = all_data?.slice(0).reverse();
  const view_list = all_data
    ?.filter((x) => {
      return x.viewCount >= 0;
    })
    .sort(function (a, b) {
      return b.viewCount - a.viewCount;
    });
  const fin_list = all_data
    ?.filter((x) => {
      return x.dday >= 1;
    })
    .sort(function (a, b) {
      return a.dday - b.dday;
    });

  const [recentSort, setRecentSort] = React.useState(true);
  const [viewSort, setViewSort] = React.useState(false);
  const [finSort, setFinSort] = React.useState(false);
  // const reviewId = Number(props.match.params.reviewId);
  // console.log(reviewId);
  const clickRecentSort = () => {
    setRecentSort(true);
    setViewSort(false);
    setFinSort(false);
  };
  const clickViewSort = () => {
    setViewSort(true);
    setRecentSort(false);
    setFinSort(false);
  };
  const clickFinSort = () => {
    setFinSort(true);
    setRecentSort(false);
    setViewSort(false);
  };

  React.useEffect(() => {
    dispatch(postActions.getAllDB());
  }, []);

  const { withSearchParams, searchParams } = useSearchParams();

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

  var queryId = props.location.search

  const searchPost = () => {
    dispatch(postActions.getFilteredDB(queryId));
  }

  const [types, setTypes] = React.useState('장소전체');
  const [distances, setDistances] = React.useState('거리전체');
  const [locations, setLocations] = React.useState(() => ['지역전체']);

  const handleTypes = (event, newTypes) => {
    console.log(newTypes)
    setTypes(newTypes);
  };

  const handleDistances = (event, newDistances) => {
    console.log(newDistances)
    setDistances(newDistances);
  };

  const handleLocations = (event, newLocations) => {
    setLocations(newLocations);
  };


  return (
    <React.Fragment>
      <Grid center>
        <Grid bg="#f8f8f8" padding="10px 0px 40px 0px">
          <Grid margin="auto" center width="1000px">
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
                      <Link
                        to={withSearchParams(`/searches`, { set: { type: '장소전체' } })}
                        style={{ textDecoration: 'none' }}
                        
                      >
                        <Tags medium_t value={types} _onClick={handleTypes}>장소 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '도심(시내)' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={types}  _onClick={handleTypes}>도심(시내)</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '공원' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={types}  _onClick={handleTypes}>공원</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '한강' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={types} _onClick={handleTypes}>한강</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '산 또는 숲' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={types} _onClick={handleTypes}>산 또는 숲</Tags>
                      </Link>
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
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '거리전체' }
                        })}
                        style={{ textDecoration: 'none' }}
                       
                      >
                        <Tags medium_t value={distances}  _onClick={handleDistances}>거리 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km 이내' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={distances}  _onClick={handleDistances}>1km 이내</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km~3km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={distances}  _onClick={handleDistances}>1km~3km</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '3km~5km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={distances}  _onClick={handleDistances}>3km~5km</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '5km 이상' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t value={distances}  _onClick={handleDistances}>5km 이상</Tags>
                      </Link>
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
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '지역전체' }
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>지역 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강남구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>강남구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>강동구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>강북구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강서구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>강서구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '관악구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>관악구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '광진구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>광진구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '구로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>구로구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '금천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>금천구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '노원구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>노원구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '도봉구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>도봉구</Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '동대문구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>동대문구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '동작구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>동작구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '마포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>마포구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서대문구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>서대문구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서초구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>서초구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>성동구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>성북구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '송파구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>송파구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '양천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>양천구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '영등포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>영등포구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '용산구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>용산구</Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '은평구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>은평구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '종로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>종로구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>중구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중랑구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium_t>중랑구</Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid centerFlex margin="20px 0px 0px 0px">
                      <Grid margin="0px 10px 0px 0px">
                        <Buttons small_b _onClick={searchPost}>검색</Buttons>
                      </Grid>
                      <Grid>
                      <Link
                        to={withSearchParams(`/searches`, {
                          remove: ['location', 'type','distance'],
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Buttons small>필터 초기화</Buttons>
                        </Link>
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
              <Buttons search _onClick={clickRecentSort}>
                최근날짜순
              </Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search _onClick={clickViewSort}>
                조회수순
              </Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search _onClick={clickFinSort}>마감임박순</Buttons>
            </Grid>
          </Grid>
          <Grid grid>
            {recentSort && !viewSort && !finSort ? (
              <>
                {all_list?.map((a, idx) => {
                  return <PostCard {...a} />;
                })}
              </>
            ) : (
              ''
            )}
            {!recentSort && viewSort && !finSort ? (
              <>
                {view_list?.map((a, idx) => {
                  return <PostCard {...a} />;
                })}
              </>
            ) : (
              ''
            )}
            {!recentSort && !viewSort && finSort ? (
              <>
                {fin_list?.map((a, idx) => {
                  return <PostCard {...a} />;
                })}
              </>
            ) : (
              ''
            )}
            {/* {recentSort && !viewSort ? (
              <>
                {all_list?.map((a, idx) => {
                  return <PostCard {...a} />;
                })}
              </>
            ) : (
              ''
            )}
            {!recentSort && viewSort ? (
              <>
                {view_list?.map((a, idx) => {
                  return <PostCard {...a} />;
                })}
              </>
            ) : (
              ''
            )} */}
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

export default React.memo(Searches);
