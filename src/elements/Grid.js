import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    //수정사항
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    right,
    maxWidth,
    minWidth,
    flexLeft,
    overFlow,
    _onClick,
    zIndex,
    justifyContent,
    flexRight,
    bgImg,
    grid,
  } = props;

  const styles = {
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    //수정사항
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    right,
    maxWidth,
    minWidth,
    flexLeft,
    overFlow,
    _onClick,
    zIndex,
    justifyContent,
    flexRight,
    bgImg,
    grid,
  };

  return (
    <>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  width: '',
  height: '',
  maxWidth: '',
  minWidth: '',
  padding: '',
  margin: '',
  bg: '',
  center: '',
  isFlex: '',
  borderRadius: '',
  border: '',
  //수정사항
  wrap: '',
  flexBasis: '',
  isShadow: '',
  flexEnd: '',
  mainFlex: '',
  isPosition: '',
  top: '',
  right: '',
  flexLeft: '',
  overflow: '',
  _onClick: () => {},
  zIndex: '',
  justifyContent: '',
  bgImg: '',
  grid: '',
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : '')};
  ${(props) => (props.margin ? `margin : ${props.margin}; ` : '')};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : '')};
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ''};
  ${(props) =>
    props.isShadow
      ? `box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.3);`
      : ''};
  ${(props) =>
    props.flexEnd ? `display : flex; justify-content: flex-end;` : ''};
  ${(props) =>
    props.mainFlex
      ? `display : flex;justify-content: center; align-items : center ;`
      : ''};
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ''};
  ${(props) => (props.border ? `border : ${props.border};` : '')};
  // 수정사항
  ${(props) => (props.wrap ? `flex-wrap : wrap` : '')}
  ${(props) => (props.flexBasis ? `flex-basis : 30% ` : '')};
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ''};
  ${(props) => (props.border ? `border : ${props.border};` : '')};
  ${(props) => (props.isPosition ? `position : ${props.isPosition}` : '')};
  ${(props) => (props.top ? `top : ${props.top}` : '')};
  ${(props) => (props.right ? `right : ${props.right}` : '')};
  ${(props) =>
    props.grid
      ? `display:grid;
        grid-gap: 4px;
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        align-items: center;
        // 최대넓이 설정
        max-width: 750px;
        justify-content: space-around;
        // 양 옆 여백 간격 통일 - 가운데 정렬
        margin: auto;`
      : ''}
  ${(props) =>
    props.flexLeft
      ? `display : flex; align-items : center; justify-content: flex-start;`
      : ''};
  ${(props) =>
    props.flexRight
      ? `display : flex; align-items : center; justify-content: flex-end;`
      : ''};
  ${(props) => (props.overFlow ? `overflow: hidden;` : '')};
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex}` : '')};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
  ${(props) => (props.bgImg ? `background-image: url('${props.bgImg}')` : '')};
`;
export default Grid;
