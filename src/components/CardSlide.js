import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PostCard from './PostCard';
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
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="80px" height="80px" src={LeftButton} />
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
        margin: '0px 50px 0px 0px',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      <img width="80px" height="80px" src={RightButton} />
    </div>
  );
}

const CardSlide = () => {
  const styles = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Slider>
    </SlidSection>
  );
};

const SlidSection = styled.section`
  border: 1px solid #dcdcdc;
  margin: 0px 0px 0px 0px;
  padding: 50px;
  .slick-slide.slick-active {
    margin: 0px 0px 0px 0px;
  }
  .sc-dkPtRN.ejiJul {
    margin: 0px 0px 0px 50px;
  }
  .slick-arrow {
    &::before {
      /* content: ''; */
    }
  }
  .slick-arrow.slick-prev {
  }
`;

// const SlidSection = styled.section`
//   .slick-arrow {
//     z-index: 10;
//     width: 50px;
//     height: 50px;
//     background: rgba($bk, 0.2);
//     border-radius: 50%;
//     transition: background 0.5s;
//     &:hover {
//       background: rgba($pt, 0.9);
//       &::before {
//         color: rgba($bk, 0.5);
//       }
//     }
//     &::before {
//       font-family: 'ArrowBackIosIcon';
//       font-weight: 900;
//       font-size: 1000px;
//       transition: all 0.5s;
//     }
//   }
//   .slick-prev {
//     left: 30px;
//     &::before {
//       content: '\f137';
//     }
//   }
//   .slick-next {
//     right: 30px;
//     &::before {
//       content: '\f138';
//     }
//   }
// `; */

export default CardSlide;
// /* .slick-arrow.slick-prev {
//   &::before {
//     /* margin: 0px 0px 40px 0px;
//     content: '';
//     z-index: 1;
//     display: block;
//     width: 80px;
//     height: 80px;
//     background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd5KokA%2Fbtrja87vy9C%2FrpwkiU0tp5zmsBR66oUFzK%2Ftfile.svg');
//   } */
// }
// /* .slick-arrow.slick-next {
//   &::before { */
//     /* content: ''; */
//     /* z-index: 1;
//     display: block;
//     width: 80px;
//     height: 80px; */
//     /* background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcjABWQ%2Fbtrja8TWRm2%2FCuIVwSnF4oXm9J5OuzBsBK%2Ftfile.svg'); */
//   }
// }
