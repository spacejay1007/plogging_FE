import React from 'react';
import styled from 'styled-components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PostCard from './PostCard';
import SlideLeftBtn from '../../assets/Icon/SlideLeftBtn.svg';
import SlideRightBtn from '../../assets/Icon/SlideRightBtn.svg';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: '10',
        margin: '0px 0px 0px 0px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="42px" height="42px" src={SlideLeftBtn} />
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
        margin: '0px 15px 0px 0px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="42px" height="42px" src={SlideRightBtn} />
    </div>
  );
}

const CardSlide = (props) => {
  const post_list = props.post_list;

  const styles = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    //반응형 Breakepoint = width
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        {post_list?.map((p, idx) => {
          return <PostCard {...p} />;
        })}
      </Slider>
    </SlidSection>
  );
};

const SlidSection = styled.section`
  /* border: 1px solid #dcdcdc; */
  margin: 0px 0px 0px 0px;
  /* padding: 50px; */
  .slick-track {
  }
  .slick-slide.slick-active {
    /* max-width: 290px; */
    margin: 0px 0px 0px 0px;
  }
  .sc-dkPtRN.ejiJul {
    margin: 0px 0px 0px 30px;
  }
  .slick-arrow {
    &::before {
      /* content: ''; */
    }
  }
  .slick-arrow.slick-prev {
  }
  .sc-bqiRlB.gDNBiK {
    height: 100%;
  }
`;

export default CardSlide;