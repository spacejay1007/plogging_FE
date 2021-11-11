import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    size,
    bold,
    color,
    align,
    margin,
    children,
    width,
    bg,
    padding,
    borderRadius,
    _onChange,
    _onClick,
    cursor,
    whiteSpace,
    textOverflow,
    display,
    overFlow,
    borderBottom,
    height,
    webkitLine,
    webkitBox,
    isFlex,
  } = props;

  const styles = {
    size: size,
    bold: bold,
    color: color,
    align: align,
    margin: margin,
    width: width,
    bg: bg,
    padding: padding,
    borderRadius: borderRadius,
    cursor: cursor,
    whiteSpace: whiteSpace,
    textOverflow: textOverflow,
    display: display,
    overFlow: overFlow,
    borderBottom: borderBottom,
    height: height,
    webkitLine: webkitLine,
    webkitBox: webkitBox,
    isFlex: isFlex,
  };

  return (
    <React.Fragment>
      <ElText onClick={_onClick} onChange={_onChange} {...styles}>
        {children}
      </ElText>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  size: '20px',
  bold: '',
  color: '#000000',
  margin: '0',
  width: '',
  bg: '',
  padding: '',
  borderRadius: '',
  _onChange: () => {},
  _onClick: () => {},
  cursor: '',
  display: '',
  borderBottom: '',
  height: '',
  webkitLine: '',
  webkitBox: '',
  isFlex: '',
};

const ElText = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : center;`
      : ''};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : '')};
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : '')};
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ''};
  ${(props) => (props.cursor ? `cursor:pointer` : '')}
  ${(props) => (props.whiteSpace ? `white-space : ${props.whiteSpace}` : '')};
  ${(props) =>
    props.textOverflow ? `text-overflow : ${props.textOverflow}` : ''};
  ${(props) => (props.display ? `display : ${props.display}` : '')};
  ${(props) => (props.overFlow ? `overflow : ${props.overFlow}` : '')};
  ${(props) =>
    props.borderBottom ? `border-bottom : ${props.borderBottom}` : ''};

  ${(props) =>
    props.webkitLine ? `-webkit-line-clamp : ${props.webkitLine}` : ''};
  ${(props) =>
    props.webkitBox ? `-webkit-box-orient : ${props.webkitBox}` : ''};
`;
export default Text;
