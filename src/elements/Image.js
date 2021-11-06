import { height } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size, _onClick, cursor, width, height, borderRadius, margin } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
    _onClick: _onClick,
    borderRadius : borderRadius,
    margin: margin
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  if (shape === 'rec') {
    return (
      <AspectOutters>
        <AspectInners {...styles}></AspectInners>
      </AspectOutters>
    );
  }
  if (shape === 'MainBanner') {
    return <MainBanner {...styles}> </MainBanner>;
  }

  return (
    <React.Fragment>
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: null,
  src: '',
  size: 36,
  width: '',
  height:'',
  margin: '',
  borderRadius: '',
  _onClick: () => {},
};

const MainBanner = styled.div`
  width: 100%;
  display: inline-block;
`;

const AspectOutter = styled.div`
  width: 100%;
  /* min-width: 250px; */
`;

const AspectInner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center center;
`;

const AspectOutters = styled.div`
  
  /* min-width: 250px; */
`;

const AspectInners = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  position: relative;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center center;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: ${(props) => props.margin};
`;

export default Image;
