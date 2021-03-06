import React from 'react';
import AWS from 'aws-sdk';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { imageCreators } from '../redux/modules/image';
import { postActions } from '../redux/modules/post';

// m-ui...
import { Text, Image, Buttons } from '../elements/index';
import { Grid, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// calendar...
import 'react-datepicker/dist/react-datepicker.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Posting = (props) => {
  var postId = parseInt(props.match.params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPostDetailDB(postId));
  }, []);

  const detail = useSelector((state) => state.post.detail?.data);
  const headIntro = detail?.crewHeadIntro;

  const preview = useSelector((state) => state.image.preview);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [enddate, setEnddate] = React.useState(new Date(detail?.endDate));
  const [location, setLocation] = React.useState('');
  const [type, setType] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [intro, setIntro] = React.useState('');
  const [senddate, setSEnddate] = React.useState(new Date());

  const contents = {
    title: title ? title : `${detail?.title}`,
    content: content ? content : `${detail?.content}`,
    endDate: enddate,
    location: location ? location : `${detail?.location}`,
    type: type ? type : `${detail?.type}`,
    distance: distance ? distance : `${detail?.distance}`,
    crewHeadIntro: intro ? intro : `${detail?.crewHeadIntro}`,
  };

  console.log(contents)

  const handleEndDate = (date) => {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    setEnddate(newDate);
  };

  const handleSEndDate = (date) => {
    setSEnddate(date);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleDistance = (e) => {
    setDistance(e.target.value);
  };

  const inp = document?.getElementById('inputbutton');

  const fileInputClick = () => {
    inp?.current?.dispatchEvent(new Event('click'));
  };

  AWS.config.update({
    region: 'ap-northeast-2', // ????????? ???????????? ????????? ???????????? ???????????????. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:84ac387b-b3ed-4d45-8353-7ed4b6dd44aa', // cognito ?????? ????????? ????????? ?????? ???????????? ???????????????. (Ex. "ap-northeast-2...")
    }),
  });

  const fileInput = React.useRef();

  // ?????? ????????????
  const filePreview = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    //?????????????????? ????????????
    reader.readAsDataURL(file);
    //????????? ????????????
    reader.onloadend = () => {
      dispatch(imageCreators.setPreview(reader.result));
    };
  };

  const uploadFile = () => {
    // ????????? ?????? ?????? ?????? ?????? - ???????????? + ????????? ??????
    const date = new Date();
    // input ????????? ?????? ????????? ?????? ??????
    const file = fileInput.current.files[0];

    // S3 ?????? ??????
    const S3_BUCKET = 'jupgging-image';

    if (!file) {
      Swal.fire({
        text: '???????????? ????????? ????????????!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      return;
    }
    if (
      contents.endDate === '' 
    ) {
      window.alert('?????? ??????* ?????? ???????????????!');
      return;
    }

    // S3 SDK??? ????????? ????????? ??????
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: S3_BUCKET, // ???????????? ?????? ?????????
        Key: file.name + date.getTime() + '.jpg', // ???????????? ????????? (* ???????????? ???????????? ?????????!)
        Body: file, // ???????????? ?????? ??????
      },
    });

    const promise = upload.promise();
    promise.then(
      function (data) {
        dispatch(imageCreators.imageUpload(data.Location));
        const content = {
          ...contents,
          postImg: data.Location,
        };
        dispatch(postActions.editPostDB(postId, content));
      },
      function (err) {
        return alert('????????? ??????????????????: ', err.msg);
      },
    );
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10, 
    },
    palette: {
      primary: { main: '#23C8AF' },
    },
  });

  const ldate = new Date()
  const maxDate = new Date(detail?.runningDate)
  const limDate = new Date(
    maxDate.getTime() + maxDate.getTimezoneOffset() * 160000,
  ); 

  const minDate = new Date(detail?.startDate)

  return (
    <React.Fragment>
      <Grid maxWidth="700px" margin="auto" padding="10px">
        <Text align="center" size="32px">
          <h4>?????? ????????????</h4>
        </Text>
        <Text align="center" size="16px" color="#666666" margin="10px 0px">
        ?????? ?????? ??? ?????? ?????????, ?????? ????????? ????????? ??? ????????????.
            </Text>
            <Text align="center" size="16px" color="#666666" margin="10px 0px">
            ?????? ??????, ?????? ?????????, ?????? ????????? ???????????? ??????????????? ????????? ????????? ??? ?????? ????????? ??????????????????.
            </Text>
            <Text align="center" size="12px" color="#999999" margin="10px 0px 50px 0px">
            (???????????? ???????????? ?????????????????? ?????? ???????????? ?????? ??? ???????????? ???????????? ?????? ????????? ???????????????.)
            </Text>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            item
            xs={12}
            sm={10}
          >
            <ThemeProvider theme={inputTheme}>
              <TextField
                required
                id="outlined-required"
                label={detail?.title}
                fullWidth
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                error={title.length < 5 && title.length > 1}
                helperText={
                  title.length < 5 && title.length > 1
                    ? '?????? 5?????? ???????????? ???????????????!'
                    : ''
                }
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#999999">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '220px' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-read-only-input"
                  disabled
                  defaultValue={detail?.runningDate}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '220px'},
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                disabled
                  id="outlined-read-only-input"
                  defaultValue={detail?.startDate}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Text
              size="18px"
              padding="17px 0px 0px 0px"
              margin="0px -55px 0px 0px"
              align="center"
            >
              ~
            </Text>
          </Grid>
          <Grid item xs={12} sm={5}>
            <EndDatePicker
              portalId="root-portal"
              locale={ko}
              selected={senddate  <= ldate ? limDate : senddate}
              onChange={(date) => {
                handleEndDate(date);
                handleSEndDate(date);
              }}
              fixedHeight
              dateFormatCalendar="yyyy??? MMMM"
              selectsEnd
              dateFormat="yyyy??? MM??? dd???"
              endDate={enddate}
              minDate={minDate}
              maxDate={limDate}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '220px' },
                }}
                
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-read-only-input"
                  disabled
                  defaultValue="?????????"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiInputBase-root': { width: '220px', left: '107px' },
                  '& .MuiInputLabel-root': { left: '107px' },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label" required>
                    {detail?.location}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={location}
                    label="?????????"
                    onChange={handleLocation}
                    required
                  >
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'????????????'}>????????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'????????????'}>????????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'????????????'}>????????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                    <MenuItem value={'??????'}>??????</MenuItem>
                    <MenuItem value={'?????????'}>?????????</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiSelect-root': { width: '220px' },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label" required>
                    {detail?.type}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="?????? ??????"
                    onChange={handleType}
                    required
                  >
                    <MenuItem value={'??????(??????)'}>??????(??????)</MenuItem>
                    <MenuItem value={'??????'}>??????</MenuItem>
                    <MenuItem value={'??????'}>??????</MenuItem>
                    <MenuItem value={'??? ?????? ???'}>??? ?????? ???</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiSelect-root': { width: '220px' },
                }}
                noValidate
                autoComplete="off"
              >
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label" required>
                    {detail?.distance}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={distance}
                    label="?????? ??????"
                    onChange={handleDistance}
                    required
                  >
                    <MenuItem value={'1km ??????'}>1km ??????</MenuItem>
                    <MenuItem value={'1km~3km'}>1km~3km</MenuItem>
                    <MenuItem value={'3km~5km'}>3km~5km</MenuItem>
                    <MenuItem value={'5km ??????'}>5km ??????</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#999999">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <ThemeProvider theme={inputTheme}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '220px' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  disabled
                  id="outlined-read-only-input"
                  defaultValue={detail?.limitPeople}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Box>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <ThemeProvider theme={inputTheme}>
            <Grid item xs={12} sm={10}>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    defaultValue={headIntro}
                    onChange={(e) => {
                      setIntro(e.target.value);
                    }}
                  />
                </div>
              </Box>
            </Grid>
          </ThemeProvider>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ????????????
            </Text>
          </Grid>
          <Grid item xs={12} sm={10}>
            <CKEditor
              editor={ClassicEditor}
              data={detail?.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Text size="18px" padding="17px 0px 0px 0px" bold color="#333333">
              ?????????*
            </Text>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image
              shape="rectangle"
              src={preview ? preview : detail?.postImg}
            />
          </Grid>
          <Grid item xs={12} sm={6} margin="auto">
            <Image
              width="200px"
              height="193px"
              padding="10px 10px"
              borderRadius="12px"
              shape="rec"
              src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/camera_input.png"
              _onClick={fileInputClick}
            />
            <Grid
            // display='none'
            >
              <input
                accept="image/*"
                id="inputbutton"
                type="file"
                ref={fileInput}
                onChange={filePreview}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container padding="50px">
          <ThemeProvider theme={inputTheme}>
            <Buttons large _onClick={uploadFile}>
              ?????? ????????????
            </Buttons>
          </ThemeProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const EndDatePicker = styled(DatePicker)`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #acacac;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  margin: 0px -41px 0px 49px;
`;

export default Posting;
