import React from 'react';

import ReviewWrite from '../components/Reviews/ReviewWrite';
import PostReviewCard from '../components/Reviews/PostReviewCard';

const Reviews = () => {
  return (
    <React.Fragment>
      <PostReviewCard />
      <ReviewWrite />
    </React.Fragment>
  );
};

export default Reviews;
