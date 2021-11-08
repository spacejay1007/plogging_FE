import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Buttons, Grid } from "../elements/index"
import { actionsCreators as commentActions } from '../redux/modules/comment';

import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const CommentWrite = (props) => {
  const dispatch = useDispatch()
  let postId = props.post_id
  console.log(postId);
  const [content, setContent] = useState("");

  const comment = {
    postId: postId,
    content: content
  };

  console.log(comment);

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
      width: 500
    },
  });

  const uploadComment = () => {
    dispatch(commentActions.addCommentDB(comment));
  };

  return (
    <React.Fragment>
      <Grid flexLeft>
        <Grid>
          <ThemeProvider theme={inputTheme}>
            <TextField
              required
              id="outlined-required"
              defaultValue="댓글을 입력해주세요!"
              fullWidth
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                console.log(e.target.value);
              }}
              // error={content.length < 5 && content.length > 1}
              // helperText={
              //   content.length < 5 && content.length > 1
              //     ? '최소 5글자 이상으로 채워주세요!'
              //     : ''
              // }
            />
          </ThemeProvider>
        </Grid>
        <Grid>
          <Buttons dis_small _onClick={uploadComment}>등록하기</Buttons>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};