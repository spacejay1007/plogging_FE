import React from 'react';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

const Inputs = (props) => {
  const { large, _onChange, defaultValue, value, placeholder } = props;
  if (large) {
    return (
      <React.Fragment>
        <LargeInput 
        onChange={_onChange}
        value={value ? value : null}
        defaultValue={defaultValue ? defaultValue : null}
        placeholder={placeholder ? placeholder : null}>
        </LargeInput>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <LargeInput 
        onChange={_onChange}
        value={value ? value : null}
        defaultValue={defaultValue ? defaultValue : null}
        placeholder={placeholder ? placeholder : null}>
      </LargeInput>
    </React.Fragment>
  );
};

Inputs.defaultProps = {
  large: '',
  value: '',
  defaultValue: '',
  placeholder: '',
  _onChange: () => {},
};

const LargeInput = styled(InputBase)(({ theme }) => ({
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
    '& .MuiInputBase-input': {
        zIndex: 1,
        innerWidth:'480px',
      borderRadius: 10,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
    //   left:'80px',
      width: '626px',
      height: '74px',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
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
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
export default Inputs;