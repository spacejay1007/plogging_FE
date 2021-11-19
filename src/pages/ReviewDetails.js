import React from 'react';

import { Container, Grid, Image, Text, Buttons } from '../elements/index';
import DetailPostInfo from '../components/Community/DetailPostInfo';
import DetailReviewInfo from '../components/Community/DetailReviewInfo';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreator as reviewAction } from '../redux/modules/review';
import { history } from '../redux/configureStore';

import Swal from 'sweetalert2';

const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.review.detail?.review);
  const post = useSelector((state) => state.review.detail?.post);
  const reviewId = Number(props.match.params.reviewId);
  const is_login = document.cookie;
  const userName = localStorage.getItem('nickname');

  const reviewDelete = () => {
    if (!is_login) {
      Swal.fire({
        text: '로그인해주세요.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      history.push('/login');

      return;
    }
    if (detail.nickname !== userName) {
      Swal.fire({
        text: '삭제 권한이 아닙니다.',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }
    if (
      Swal.fire({
        title: '정말 삭제하시겠습니까?',
        width: '360px',
        showCancelButton: true,
        confirmButtonColor: '#23c8af',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 삭제하겠습니다',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!');
          dispatch(reviewAction.deleteReviewDB(reviewId));
          history.push('/review');
        }
      })
    ) {
    }
  };

  React.useEffect(() => {
    dispatch(reviewAction.detailReviewDB(reviewId));
  }, []);

  const reviewImg = detail?.reviewImg;
  const content = detail?.content;
  const reviewTitle = detail?.title;

  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid>
          <Grid topFlex margin="135px 0px ">
            <Grid
              flexLeft
              minWidth="770px"
              border="1px solid #DCDCDC"
              borderRadius="25px"
              overFlow
              margin="0px 70px 0px 0px"
            >
              <Image src={reviewImg}></Image>
            </Grid>

            <Grid>
              <Grid borderRadius="10px">
                <Grid isPosition="absolute" margin="-30px 0px 0px 300px ">
                  <Buttons smallbottom _onClick={reviewDelete}>
                    삭제
                  </Buttons>
                </Grid>
                <DetailPostInfo post={post} />
              </Grid>
              <Grid>
                <DetailReviewInfo detail={detail} />
              </Grid>

              <Grid width="370px" padding="40px 0px 0px 0px ">
                <Text bold size="40px">
                  {reviewTitle}
                </Text>
                <Text margin="30px 0px 0px 0px">{content}</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ReviewDetail;
