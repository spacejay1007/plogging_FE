import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    type,
    size,
    fontWeight,
    color,
    bgColor,
    _onClick,
    children,
    bold,
  } = props;

  const styles = {
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    type,
    size,
    fontWeight,
    color,
    bgColor,
    _onClick,
    bold,
  };

  return (
    <React.Fragment>
      <Elbutton {...styles} onClick={_onClick}>
        {children}
      </Elbutton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  width: '',
  margin: '',
  padding: '',
  borderRadius: '',
  type: 'submit',
  isShadow: false,
  fontWeight: 'bold',
  _onClick: () => {},
  children: null,
  bold: false,
};

const Elbutton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  box-sizing: border-box;
  ${(props) =>
    props.isShadow
      ? `box-shadow:0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ''}
  font-weight: ${(props) => (props.bold ? '700' : '400')};
`;
export default Button;
