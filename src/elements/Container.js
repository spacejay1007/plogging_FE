import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const { margin, children } = props;
  const styles = { margin };

  return (
    <React.Fragment>
      <ElContainer {...styles}>{children}</ElContainer>
    </React.Fragment>
  );
};

const ElContainer = styled.div`
  width: '100%';
  margin: ${(props) => props.margin};
`;

export default Container;
