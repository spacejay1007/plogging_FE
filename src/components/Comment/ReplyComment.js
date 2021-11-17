import React, { useState, useEffect } from 'react';
import { actionsCreators as commentActions } from '../../redux/modules/comment';
import { useDispatch, useSelector } from "react-redux"

import SingleComment from './SingleComment';

import { Grid, Text, Image, Tags, Buttons, Inputs } from '../../elements/index';

export const ReplyComment = (props) => {
    const [OpenReplyComments, setOpenReplyComments] = React.useState(false);
    const [ChildCommentNumber, setChildCommentNumber] = React.useState()

    useEffect(() => {
        let commentNumber = 0;

        props?.CommentLists?.map((comment) => {
            if(comment?.replyTo === props?.parentCommentId) {
                commentNumber ++
            }
        })

        setChildCommentNumber(commentNumber)

    }, [props?.CommentLists])

    const renderReplyComment = (parentCommentId) =>
      props?.CommentLists?.map((comment, index) => (
        <React.Fragment>
          {comment?.replyTo === parentCommentId && (
            <>
                <Grid margin="0px 0px 0px 20px" borderRadius="10px" padding="15px">
                  <Grid bg="#eeeeee" padding="10px 0px 0px 0px" borderRadius="10px">
              <SingleComment
                refreshComment={props?.refreshComment}
                comment={comment}
                postId={props?.postId}
              />
              </Grid>
              <ReplyComment refreshComment={props?.refreshComment} CommentLists={props?.CommentLists} postId={props?.postId} parentCommentId={comment?.commentId}/>
              </Grid>
            </>
          )}
        </React.Fragment>
      ));

      const onClickReplyCommentsOpen = () => {
        setOpenReplyComments(!OpenReplyComments)
      }

    return (
      <>
        {ChildCommentNumber > 0 && 
          <Grid>
            <Text
              color="#acacac"
              size="14px"
                _onClick={onClickReplyCommentsOpen}
            >
              {ChildCommentNumber}개의 댓글 더보기
            </Text>
          </Grid>
        }

        {OpenReplyComments && 
        renderReplyComment(props?.parentCommentId)
        }     

      </>
    );
}

export default ReplyComment
