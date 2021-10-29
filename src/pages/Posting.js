import React from "react";
import styled from "styled-components";
import AWS from "aws-sdk";
import * as moment  from 'moment';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from "../redux/modules/image";
import { postActions } from "../redux/modules/post";

// elements... 
import { Container, Text, Image } from "../elements/index";
import { DateRange } from 'react-date-range';
import { ko } from "date-fns/esm/locale";
import { addDays } from "date-fns"
import { Grid, TextField } from "@mui/material";
import { Input } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Posting = (props) => {
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState(''); 
    const [rundate, setRundate] = React.useState(new Date());
    const [range, setRange] = React.useState([
      {
        startdate: new Date(),
        enddate: addDays(new Date(), 1),
        key: "selection",
      },
    ]);
    console.log(range);
    // const [startdate, setStartdate] = React.useState(new Date());
    // const [enddate, setEnddate] = React.useState(new Date());
    const [location, setLocation] = React.useState('');
    const [type, setType] = React.useState('');
    const [distance, setDistance] = React.useState('');
    const [limit, setLimit] = React.useState('');
    // const [imgurl, setImgurl] = React.useState('');
    
    const contents = {
      title: title,
      content: content,
      runningDate: rundate,
      startDate: range.startdate,
      endDate: range.enddate,
      location: location,
      type: type,
      distance: distance,
      limitPeople: limit
    }

    const handleLocation = (e) => {
      setLocation(e.target.value);
      console.log(e.target.value);
    }
  
    AWS.config.update({
      region: "ap-northeast-2", // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa", // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
      }),
    })

    const fileInput = React.useRef();
    
    // 사진 미리보기
    const filePreview = (e) => {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(imageCreators.setPreview(reader.result));
      };
    };
  
    const uploadFile = e => {
      // 이미지 파일 이름 중복 방지 - 파일이름 + 업로드 시간
      const date = new Date();
      // input 태그를 통해 선택한 파일 객체
      const file = e.target.files[0]
      // S3 버킷 이름
      const S3_BUCKET = 'jupgging-image';

      if (!file) {
        window.alert('이미지를 업로드 해주세요!');
        return;
      }
      if (
        contents.title === '' ||
        contents.content === '' ||
        contents.runningDate === '' ||
        contents.startDate === '' ||
        contents.endDate === '' ||
        contents.location === '' ||
        contents.type === '' ||
        contents.distance === '' ||
        contents.limitPeople === ''
        ) {
          window.alert('내용을 모두 작성해주세요!');
          return;
      }

      // S3 SDK에 내장된 업로드 함수
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: S3_BUCKET, // 업로드할 대상 버킷명
          Key: file.name + date.getTime() + '.jpg', // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
          Body: file, // 업로드할 파일 객체
        },
      })
    
      const promise = upload.promise()
    
      promise
      .then(
        function (data) {
          dispatch(imageCreators.imageUpload(data.Location));
          const content = {
            ...contents,
            img: data.Location,
          };
          dispatch(postActions.addPostDB(content));
        },
        function (err) {
          return alert("오류가 발생했습니다: ", err.msg);
        }
      );
    };

    return (
      <React.Fragment>
        <Container>
          <Text align="center">
            <h4>모임 만들기</h4>
          </Text>

          <Grid container spacing={3}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              item
              xs={12}
            >
              <TextField
                required
                id="outlined-helperText"
                label="모임 이름"
                defaultValue="줍깅 같이 할 사람 모여라~!"
                fullWidth
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                helperText="최소 5글자 이상으로 채워주세요!"
              />
            </Grid>
            <Grid>
              <DateRange
                locale={ko} // 언어설정 기본값은 영어
                dateFormat="yyyy-MM-dd" // 날짜 형식 설정
                editableDateInputs={true}
                onChange={(item) => {
                  setRange([item.selection]);
                  console.log(item.selection);
                }}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  disablePast
                  renderInput={(props) => <TextField {...props} />}
                  label="모임 날짜"
                  fullWidth
                  autoOk={true}
                  value={rundate}
                  formatDate={(date) => moment(new Date()).format('YYYY-MM-DD')}
                  onChange={(newValue) => {
                    setRundate(newValue);
                    console.log(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disablePast
                  renderInput={(props) => <TextField {...props} />}
                  label="모집 시작일"
                  value={startdate}
                  onChange={(newValue) => {
                    setStartdate(newValue);
                    console.log(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disablePast
                  renderInput={(props) => <TextField {...props} />}
                  label="모임 마감일"
                  value={enddate}
                  onChange={(newValue) => {
                    setEnddate(newValue);
                    console.log(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  모임 장소
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={location}
                  label="모임 장소"
                  onChange={handleLocation}
                >
                  <MenuItem value={0}>강남구</MenuItem>
                  <MenuItem value={1}>강동구</MenuItem>
                  <MenuItem value={2}>강북구</MenuItem>
                  <MenuItem value={3}>강서구</MenuItem>
                  <MenuItem value={4}>관악구</MenuItem>
                  <MenuItem value={5}>광진구</MenuItem>
                  <MenuItem value={6}>구로구</MenuItem>
                  <MenuItem value={7}>금천구</MenuItem>
                  <MenuItem value={8}>노원구</MenuItem>
                  <MenuItem value={9}>마포구</MenuItem>
                  <MenuItem value={10}>도봉구</MenuItem>
                  <MenuItem value={11}>동대문구</MenuItem>
                  <MenuItem value={12}>동작구</MenuItem>
                  <MenuItem value={13}>서대문구</MenuItem>
                  <MenuItem value={14}>서초구</MenuItem>
                  <MenuItem value={15}>성동구</MenuItem>
                  <MenuItem value={16}>성북구</MenuItem>
                  <MenuItem value={17}>송파구</MenuItem>
                  <MenuItem value={18}>양천구</MenuItem>
                  <MenuItem value={19}>영등포구</MenuItem>
                  <MenuItem value={20}>용산구</MenuItem>
                  <MenuItem value={21}>은평구</MenuItem>
                  <MenuItem value={22}>종로구</MenuItem>
                  <MenuItem value={23}>중구</MenuItem>
                  <MenuItem value={24}>중랑구</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="모"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-helperText"
                label="Helper text"
                fullWidth
                helperText="Some important text"
              />
            </Grid>
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/postingdefaultimage.jpg'
              }
            />
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                ref={fileInput}
                onChange={filePreview}
              />
            </label>
          </Grid>
        </Container>
      </React.Fragment>
    );
}

export default Posting;