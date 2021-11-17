import React from 'react';
import { actionsCreators as commentActions } from '../../redux/modules/comment';
import { useDispatch, useSelector } from "react-redux"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Text, Image, Tags, Buttons, Inputs } from '../../elements/index';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

export const Comment = (props) => {
  const dispatch = useDispatch();

  console.log(props);

  let postId = props.post_id;
  console.log(postId);
  const [commentValue, setCommentValue] = React.useState('');

  const comment = {
    postId: postId,
    content: commentValue,
    replyTo: '',
  };

  console.log(comment);

  const handleComment = (e) => {
    setCommentValue(e.target.value);
    // console.log(e.target.value);
  };

  const uploadComment = () => {
    dispatch(commentActions.addCommentDB(comment));
    props.refreshComment(comment);
    
  };

  const inputTheme = createTheme({
    shape: {
      borderRadius: 10,
      width: 500,
    },
  });

  return (
    <React.Fragment>
      {props?.CommentLists &&
        props?.CommentLists?.map(
          (comment, index) =>
            !comment?.replyTo && (
              <React.Fragment>
                <SingleComment
                  refreshComment={props?.refreshComment}
                  comment={comment}
                  postId={postId}
                />
                <ReplyComment refreshComment={props?.refreshComment} parentCommentId={comment?.commentId} CommentLists={props?.CommentLists} postId={postId} />
              </React.Fragment>
            ),
        )}
      <Grid flexLeft>
        <Image
          shape="circle"
          //   src={
          //     detail?.userImg
          //       ? `${detail?.userImg}`
          //       : 'https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg'
          //   }
          src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
          size="54"
          margin="-10px 10px 0px 0px"
        />
        <Grid margin="15px 0px 0px 0px">
          <Inputs
            large
            placeholder="댓글을 입력해주세요!"
            value={commentValue}
            _onChange={handleComment}
            // error={content.length < 5 && content.length > 1}
            // helperText={
            //   content.length < 5 && content.length > 1
            //     ? '최소 5글자 이상으로 채워주세요!'
            //     : ''
            // }
          />
        </Grid>
        <Grid margin="">
          <Buttons comment _onClick={uploadComment}>
            등록하기
          </Buttons>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
