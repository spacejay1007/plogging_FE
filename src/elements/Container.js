import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const { margin, cursor, children } = props;
  const styles = { margin, cursor };

  return (
    <React.Fragment>
      <ElContainer {...styles}>{children}</ElContainer>
    </React.Fragment>
  );
};

const ElContainer = styled.div`
  width: '100%';
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

export default Container;
