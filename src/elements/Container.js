import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const { margin, cursor, children, maxWidth } = props;
  const styles = { margin, cursor, maxWidth };

  return (
    <React.Fragment>
      <ElContainer {...styles}>{children}</ElContainer>
    </React.Fragment>
  );
};

Container.defaultProps = {
  children: null,
  margin: '',
  cursor: '',
};

const ElContainer = styled.div`
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

export default Container;
