import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';

const TypeCheckbox = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <React.Fragment>
      <Grid mainFlex>
        <ButtonGroup>
          {types.map((type) => (
            <ButtonToggle
              // value={types[0]}
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

const types = [
  '공원에서',
  '퇴근하면서',
  '도심 산책하면서',
  '여행하면서',
  '해안가에서',
];

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

export default TypeCheckbox;
