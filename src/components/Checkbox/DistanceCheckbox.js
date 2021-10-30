import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';

const DistanceCheckbox = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <React.Fragment>
      <Grid mainFlex>
        <ButtonGroup>
          {types.map((type) => (
            <ButtonToggle
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </ButtonToggle>
          ))}
        </ButtonGroup>
      </Grid>
    </React.Fragment>
  );
};

const types = ['3KM이내', '5KM', '10KM', '15KM', '20KM', '거리는 상관없어요'];

const Button = styled.button``;

const ButtonToggle = styled(Button)`
  opacity: 0.3;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #555555;
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

export default DistanceCheckbox;
