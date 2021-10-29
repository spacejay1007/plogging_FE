import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainReviewCard from './MainReviewCard';
import LeftButton from '../assets/Icon/LeftButton.svg';
import RightButton from '../assets/Icon/RightButton.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 0px 0px -40px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="70px" height="70px" src={LeftButton} />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 10px 0px 0px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="70px" height="70px" src={RightButton} />
    </div>
  );
}

const ReviewSlide = () => {
  const styles = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    //반응형 Breakepoint = width
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SlidSection>
      <Slider {...styles}>
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
        <MainReviewCard />
      </Slider>
    </SlidSection>
  );
};

const SlidSection = styled.section`
  border: 1px solid #dcdcdc;
  margin: 0px 0px 0px 0px;
  padding: 30px;
  .slick-slide.slick-active {
    margin: 0px 0px 0px 0px;
  }
  .sc-dkPtRN.ejiJul {
    /* margin: 0px 0px 0px 50px; */
  }
  .slick-arrow {
    &::before {
      /* content: ''; */
    }
  }
  .slick-arrow.slick-prev {
  }
`;

export default ReviewSlide;
