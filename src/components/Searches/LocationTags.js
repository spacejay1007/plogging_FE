import React from 'react';

import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons, Icon } from '../../elements/index';
import pinIcon from '../../assets/Icon/pinIcon.svg';
import useSearchParams from '../../shared/useSearchParams'
import { Link } from 'react-router-dom';

export const LocationTags = () => {
    const { withSearchParams, searchParams } = useSearchParams();

    return (
        <>
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
                        <Tags medium>지역 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강남구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>강남구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>강동구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>강북구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강서구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>강서구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '관악구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>관악구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '광진구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>광진구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '구로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>구로구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '금천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>금천구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '노원구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>노원구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '도봉구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>도봉구</Tags>
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
                        <Tags medium>동대문구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '동작구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>동작구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '마포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>마포구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서대문구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>서대문구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서초구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>서초구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>성동구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>성북구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '송파구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>송파구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '양천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>양천구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '영등포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>영등포구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '용산구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>용산구</Tags>
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
                        <Tags medium>은평구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '종로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>종로구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>중구</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중랑구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>중랑구</Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  </>
    );

}



