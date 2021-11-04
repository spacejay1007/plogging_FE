import React from 'react';
import AWS from 'aws-sdk';

import { Container, Grid, Text, Input } from '../../elements/index';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ReviewPhoto = (props) => {
  const fileInput = React.useRef(null);
  //  Cognito 연동으로 S3 접근 권한을 얻는 부분
  AWS.config.update({
    region: 'ap-northeast-2', // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa', //  congnito 인증 풀에서 받아온 키를 문자열로 입력
    }),
  });

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
        alert('리뷰 이미지 업로드 성공');
      },
      function (err) {
        return alert('오류가 발생했습니다.', err.message);
      },
    );
  };
  //사진 미리보기

  const imagePreview = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
  };

  return (
    <React.Fragment>
      <Input type="file"></Input>
      <Input
        accept="image/*"
        // id="icon-button-file"
        type="file"
        ref={fileInput}
        _onChange={imagePreview}
      />
      <PhotoCamera />
    </React.Fragment>
  );
};

export default ReviewPhoto;
