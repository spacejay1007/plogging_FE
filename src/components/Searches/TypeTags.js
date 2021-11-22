import React from 'react';

import { Grid, Text, Image, Buttons, Icon } from '../../elements/index';
import mapIcon from '../../assets/Icon/mapIcon.svg';
import useTypeParams from './useTypeParams'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const TypeTags = () => {
    const { withTypeParams, searchParams } = useTypeParams();

    const [active, setActive] = React.useState(false);

    const handleActive = () => {
        setActive(false)
        setActive(true)
    }

    return (
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
                        to={withTypeParams(`/searches`, { set: { type: '장소전체' } })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags _onClick={handleActive}>장소 전체</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withTypeParams(`/searches`, {
                          set: { type: '도심(시내)' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags _onClick={handleActive}>도심(시내)</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withTypeParams(`/searches`, {
                          set: { type: '공원' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags _onClick={handleActive}>공원</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withTypeParams(`/searches`, {
                          set: { type: '한강' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags _onClick={handleActive}>한강</Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withTypeParams(`/searches`, {
                          set: { type: '산 또는 숲' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags _onClick={handleActive}>산 또는 숲</Tags>
                      </Link>
                    </Grid>
                  </Grid>
    );

}

const type = ['장소전체','도심(시내)','공원','한강','산 또는 숲' ]


    const Tags = styled(Button)({
        color: '#23C8AF',
        backgroundColor: '#fff',
        borderColor: '#23C8AF',
        height: '32px',
        width: 'auto',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 700,
        padding: '10px 15px',
        border: '3px solid',
        borderRadius: '30px',
        lineHeight: 1.5,
        boxSizing: 'border-box',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          color: '#23C8AF',
          backgroundColor: '#fff',
          borderColor: '#23C8AF',
          boxShadow: 'none',
        },
      }); 







