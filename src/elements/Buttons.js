import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Buttons = (props) => {
  const {
    margin,
    text,
    children,
    large_b,
    medium_b,
    small_b,
    medium_j,
    medium_w,
    small_w,
    dis_large,
    dis_medium,
    dis_small,
    enter,
    more,
    _onClick,
  } = props;
  const styles = {
    margin,
  };

  if (large_b) {
    return (
      <React.Fragment>
        <LargeButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButton>
      </React.Fragment>
    );
  }
  if (medium_b) {
    return (
      <React.Fragment>
        <MediumButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButton>
      </React.Fragment>
    );
  }
  if (small_b) {
    return (
      <React.Fragment>
        <SmallButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButton>
      </React.Fragment>
    );
  }
  if (medium_j) {
    return (
      <React.Fragment>
        <LargeButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButtonWhite>
      </React.Fragment>
    );
  }
  if (medium_w) {
    return (
      <React.Fragment>
        <MediumButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonWhite>
      </React.Fragment>
    );
  }
  if (small_w) {
    return (
      <React.Fragment>
        <SmallButtonWhite {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButtonWhite>
      </React.Fragment>
    );
  }
  if (dis_large) {
    return (
      <React.Fragment>
        <LargeButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButtonDisable>
      </React.Fragment>
    );
  }
  if (dis_medium) {
    return (
      <React.Fragment>
        <MediumButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonDisable>
      </React.Fragment>
    );
  }
  if (dis_small) {
    return (
      <React.Fragment>
        <SmallButtonDisable {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButtonDisable>
      </React.Fragment>
    );
  }
  if (enter) {
    return (
      <React.Fragment>
        <EnterButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </EnterButton>
      </React.Fragment>
    );
  }
  if (more) {
    return (
      <React.Fragment>
        <MoreButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MoreButton>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <SmallButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </SmallButton>
    </React.Fragment>
  );
};

Buttons.defaultProps = {
  margin: false,
  text: false,
  children: null,
  _onClick: () => {},
  large_b: false,
  medium_b: false,
  small_b: false,
  medium_j: false,
  medium_w: false,
  small_w: false,
  dis_large: false,
  dis_medium: false,
  dis_small: false,
  enter: false,
  more: false,
};

const LargeButton = styled(Button)({
  color: '#fff',
  height: '64px',
  width: '570px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#333333',
  borderColor: '#333333',
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
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MediumButton = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#333333',
  borderColor: '#333333',
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
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const SmallButton = styled(Button)({
  color: '#fff',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#333333',
  borderColor: '#333333',
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
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const LargeButtonWhite = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#fff',
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
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MediumButtonWhite = styled(Button)({
  color: '#333333',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#acacac',
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
    color: '#fff',
    backgroundColor: '#333333',
    borderColor: '#333333',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#333333',
    borderColor: '#333333',
    color: '#fff',
  },
});

const SmallButtonWhite = styled(Button)({
  color: '#333333',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#acacac',
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
    color: '#fff',
    backgroundColor: '#333333',
    borderColor: '#333333',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#333333',
    borderColor: '#333333',
    color: '#fff',
  },
});

const LargeButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '64px',
  maxWidth: '570px',
  minWidth: '300px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const MediumButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '54px',
  maxWidth: '278px',
  minWidth: '250px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const SmallButtonDisable = styled(Button)({
  color: '#aaaaaa',
  height: '50px',
  width: '130px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#eeeeee',
  borderColor: '#eeeeee',
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
    color: '#aaaaaa',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    color: '#aaaaaa',
  },
});

const EnterButton = styled(Button)({
  color: '#fff',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#23C8AF',
  borderColor: '#23C8AF',
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
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});

const MoreButton = styled(Button)({
  color: '#23C8AF',
  height: '54px',
  width: '278px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  fontWeight: 700,
  padding: '6px 12px',
  border: '2px solid',
  borderRadius: '10px',
  lineHeight: 1.5,
  backgroundColor: '#A5E9DF',
  borderColor: '#A5E9DF',
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
    color: '#fff',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#23C8AF',
    borderColor: '#23C8AF',
    color: '#fff',
  },
});
export default Buttons;
