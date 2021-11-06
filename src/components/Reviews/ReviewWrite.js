import React from 'react';
import styled from 'styled-components';
import AWS from 'aws-sdk';

import {
  Container,
  Grid,
  Text,
  // Input,
  // Button,
  Image,
  Buttons,
} from '../../elements/index';
import { imageCreators } from '../../redux/modules/image';
import { actionCreator as reviewActions } from '../../redux/modules/review';
import { useDispatch, useSelector } from 'react-redux';
// import ReviewPhoto from './ReviewPhoto';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';

import { history } from '../../redux/configureStore';

const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [reviewTitle, setReviewTitle] = React.useState('');
  const [reviews, setReviews] = React.useState('');
  const [star, setStar] = React.useState('');
  const [satiRate, setSatiRate] = React.useState('');
  const [levelRate, setLevelRate] = React.useState('');
  const [trashRate, setTrashRate] = React.useState('');

  const contents = {
    // postId:postId,
    // reviewTitle:reviewTitle,
    content: reviews,
    star: star,
    sateiRate: satiRate,
    levelRate: levelRate,
    trashRate: trashRate,
  };
  const changeScore = (e) => {
    setStar(e.target.value);
    console.log('총점!');
  };

  const changeSatisfied = (e) => {
    setSatiRate(e.target.value);
    console.log('만족도!');
  };
  const changeLevel = (e) => {
    setLevelRate(e.target.value);
  };
  const changeAmount = (e) => {
    setTrashRate(e.target.value);
  };

  const reviewTitleChange = (e) => {
    setReviewTitle(e.target.value);
    console.log('리뷰타이틀작성');
  };
  const reviewChange = (e) => {
    setReviews(e.target.value);
    console.log('리뷰내용 작성');
  };
  const reviewsClick = () => {
    console.log('리뷰완성');
    setReviewTitle('');
    setReviews('');
    history.push('/review');
  };

  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa', //  congnito 인증 풀에서 받아온 키를 문자열로 입력
    }),
  });

  const fileInput = React.useRef(null);

  //사진 미리보기

  const imagePreview = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    //비동기적으로 바꿔주는
    reader.readAsDataURL(file);
    //로딩이 끝났을때
    reader.onloadend = () => {
      dispatch(imageCreators.setPreview(reader.result));
    };
  };
  //  Cognito 연동으로 S3 접근 권한을 얻는 부분

  const uploadFile = () => {
    const date = new Date();
    const file = fileInput.current.files[0];
    const S3_BUCKET = 'jumpgging-image';

    // S3 SKD에 포함된 함수로 파일 업로드 부분
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: S3_BUCKET, // 업로드할 대상 버킷명
        Key: file.name + date.getTime() + '.jpg', // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
        Body: file, // 업로드할 파일 객체
      },
    });
    const promise = upload.promise();

    promise.then(
      function (data) {
        dispatch(imageCreators.reviewImageUp(data.Loacation));
        console.log(data.Location);
        const content = {
          ...contents,
          reviewImg: data.Location,
        };
        dispatch(reviewActions.addReviewDB(content));
      },
      function (err) {
        return alert('오류가 발생했습니다.', err.message);
      },
    );
  };

  const iconTheme = createTheme({
    palette: {
      primary: { main: '#23C8AF' },
    },
  });
  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid center>
          <Grid width="100%">
            <StarSize>
              <Text>이번 플로깅은 어땠나요? 별점을 남겨주세요!</Text>
              <Rating
                name="simple-controlled"
                size="large"
                onChange={changeScore}
              />
            </StarSize>
          </Grid>

          <Grid isFlex width="100%">
            <Grid flexLeft>
              <Text>만족도</Text>
              <Rating
                name="simple-controlled"
                size="midium"
                onChange={changeSatisfied}
              />
            </Grid>
            <Grid flexLeft>
              <Text>난이도</Text>
              <Rating
                name="simple-controlled"
                size="midium"
                onChange={changeLevel}
              />
            </Grid>
            <Grid flexLeft>
              <Text>플로깅 양</Text>
              <Rating
                name="simple-controlled"
                size="midium"
                onChange={changeAmount}
              />
            </Grid>
          </Grid>

          <Text>당신의 플로깅 이야기를 들려주세요</Text>
          {/* <Input></Input>
          <Input></Input> */}
        </Grid>

        <Grid>
          <TextField
            required
            fullWidth
            id="outlined-textarea"
            multiline
            rows={1}
            label="제목을 입력해주세요(14자 이상)"
            value={reviewTitle}
            onChange={reviewTitleChange}
          />
          {/* <Input
            placeholder="제목을 입력해주세요(14자 이내)"
            value={reviewTitle}
            _onChange={reviewTitleChange}
          ></Input> */}
          <TextField
            required
            fullWidth
            id="outlined-textarea"
            multiline
            rows={20}
            label="어떤 일이 있었나요? 혹은 어떤 점이 좋았나요?"
            value={reviews}
            onChange={reviewChange}
          />
          {/* <Input
          multiLine
          border="1px solid "
          borderRadius="10px"
          placeholder="어떤 일이 있었나요? 혹은 어떤 점이 좋았나요?"
          value={reviews}
          _onChange={reviewChange}
        ></Input> */}
        </Grid>
        <Grid flexLeft>
          <Grid width="100px">
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/postingdefaultimage.jpg'
              }
            />
          </Grid>
          <Grid>
            <ThemeProvider theme={iconTheme}>
              <input
                accept="image/*"
                // id="icon-button-file"
                type="file"
                ref={fileInput}
                onChange={imagePreview}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                {/* <PhotoCamera /> */}
              </IconButton>
            </ThemeProvider>

            {/* <PhotoCamera type="file" /> */}
          </Grid>
        </Grid>
        <Grid>
          <Buttons user _onClick={reviewsClick}>
            후기올리기
          </Buttons>
          {/* <Button >후기올리기</Button> */}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
const StarSize = styled.span`
  .css-jue3ft-MuiRating-root {
    font-size: 60px;
  }
`;

export default ReviewWrite;
