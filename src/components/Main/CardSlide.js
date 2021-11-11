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
        margin: '0px 0px 0px -18px',
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
        margin: '0px 0px 0px 0px',
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 790,
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
  /* width:2900px; */
  margin: 0px 0px 0px 0px;
  /* padding: 50px; */
  /* .slick-list {
    &::before {
      width: 2900px;
    }
  } */

  /* .slick-list {
    max-width: 1200px;
  } */
  .slick-slide {
    max-width: 300px;

    margin: 0px 0px 0px 0px;
  }
  .slick-track {
    height: 485px;
  }
  .sc-dkPtRN.ejiJul {
    margin: 0px 0px 0px 30px;
  }
  .slick-arrow {
     {
      /* content: ''; */
    }
  }
  .slick-slider.slick-initialized {
  }
  .slick-arrow.slick-prev {
  }
  .slick-arrow.slick-next {
    position: absolute;
    margin: 0px 0px 0px 0px;
  }

  .sc-bqiRlB.gDNBiK {
    /* height: 100%; */
  }
`;

export default CardSlide;
