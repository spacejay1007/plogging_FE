import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size, _onClick, cursor, width } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
    _onClick: _onClick,
    cursor: cursor,
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
  src: 'https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg',
  size: 36,
  width: false,
  _onClick: () => {},
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;

export default Image;
