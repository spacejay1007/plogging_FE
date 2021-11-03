import React from 'react';
import AWS from 'aws-sdk';

import { Container, Grid, Text, Input } from '../../elements/index';

const ReviewPhoto = (props) => {
  return (
    <React.Fragment>
      <Input type="file"></Input>
    </React.Fragment>
  );
};

export default ReviewPhoto;
