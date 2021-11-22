import React from 'react';

import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons, Icon } from '../../elements/index';
import distanceIcon from '../../assets/Icon/distanceIcon.svg';
import useSearchParams from '../../shared/useSearchParams'
import { Link } from 'react-router-dom';

export const DistanceTags = () => {
    const { withSearchParams, searchParams } = useSearchParams();

    return (
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
                        <Tags medium>거리 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km 이내' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>1km 이내</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km~3km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>1km~3km</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '3km~5km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>3km~5km</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '5km 이상' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags medium>5km 이상</Tags>
                      </Link>
                    </Grid>
                  </Grid>
    );

}



