// ApplicationTab
import React from 'react';
import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
import { history } from '../../redux/configureStore';

import MeetingCheckForm from './MeetingCheckForm';
import { crewActions } from '../../redux/modules/crew';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@mui/material';

import Rating from '@mui/material/Rating';
import BookMark from '../../assets/Icon/BookMark.svg';
import Location from '../../assets/Icon/Location.svg';

const MeetingManagement = (props) => {
  const dispatch = useDispatch();
  const crew_check = useSelector((state) => state.crew.check);
  // console.log(crew_check);
  const postId = props.postId;
  const [meetCheck, setMeetCheck] = React.useState(false);
  // const [checkBox, setCheckBox] = React.useState();
  const [checkedInputs, setCheckedInputs] = React.useState([]);
  // const [checkedItems, setCheckedItems] = React.useState(new Set());
  // const [isAllChecked, setIsAllChecked] = React.useState(false);
  // const [bChecked, setChecked] = React.useState(false);
  const clickCheck = () => {
    if (setMeetCheck(true)) {
      setMeetCheck(false);
    } else {
      setMeetCheck(!meetCheck);
    }

    dispatch(crewActions.crewCheckDB(postId));
  };

  // const changeCheckBox = (e) => {
  //   setCheckBox(e.target.value);
  // };

  const changeHandler = (checked, userId) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, userId]);
    } else {
      // setCheckedInputs(checkedInputs.filter((el) => el !== userId));
      const newCheckedInput = checkedInputs.map((e) => {
        if (e === userId) {
          return undefined;
        } else {
          return e;
        }
      });
      setCheckedInputs(
        newCheckedInput.filter((e) => e).length === 0 ? [] : newCheckedInput,
      );
    }
  };

  // const checkedItemHandler = (id, isChecked) => {
  //   if (isChecked) {
  //     checkedItems.add(id);
  //     setCheckedItems(checkedItems);
  //   } else if (!isChecked && checkedItems.has(id)) {
  //     checkedItems.delete(id);
  //     setCheckedItems(checkedItems);
  //   }
  // };
  const CheckSubmit = () => {
    console.log(postId);
    console.log(checkedInputs);

    dispatch(crewActions.editCrewCheckDB(postId, checkedInputs));
  };
  // const allCheckedHandler = (isChecked) => {
  //   if (isChecked) {
  //     setCheckedItems(new Set(member_check.map(({ id }) => id)));
  //     setIsAllChecked(true);
  //   } else {
  //     checkedItems.clear();
  //     setCheckedItems(setCheckedItems);
  //     setIsAllChecked(false);
  //   }
  // };
  // const checkHandler = ({ target }) => {
  //   setChecked(!bChecked);
  //   checkedItemHandler(member_check.userId, target.checked);
  // };

  // const allCheckHandler = () => setChecked(isAllChecked);

  // React.useEffect(() => {
  //   checkedItemHandler();
  // }, []);
  // React.useEffect(() => {
  // }, []);

  return (
    <React.Fragment>
      <Container cursor="pointer">
        <Grid>
          <Grid
            maxWidth="1161px"
            // height='257px'
            border="1px solid #DCDCDC"
            borderRadius="7px"
            margin="20px auto"
            overFlow
            isFlex
          >
            <Grid width="370px" height="" isPosition="relative">
              <Image src={props.postImg} />

              <Grid
                width="50px"
                height="24px"
                isPosition="absolute"
                top="2%"
                borderRadius="5px"
                bg="#23c8af"
                margin="8px 0px 0px 8px"
              >
                <Text
                  align="center"
                  bold
                  color="white"
                  size="14px"
                  margin="2px 6px"
                >
                  D-{props.dday}
                </Text>
              </Grid>
            </Grid>
            {/* padding="10px 18px 16px 18px " */}
            <Grid width="40%" margin="10px 18px 16px 18px">
              <Grid flexLeft padding="0 0 15px 0">
                <Icon width="25px" src={Location} />
                <Text size="14px">서울시 {props.location}</Text>
              </Grid>
              <Text
                width="250px"
                margin="0 0 30px 0"
                bold
                size="24px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overFlow="hidden"
                display="block"
              >
                {props.title}
              </Text>
              <Grid flexLeft>
                <Grid
                  width="66px"
                  height="22px"
                  border="1px solid #23C8AF"
                  bg="#23C8AF"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#eeeeee"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.type}
                  </Text>
                </Grid>
                <Grid
                  width="66px"
                  height="22px"
                  border="1px solid #23C8AF"
                  bg="#23C8AF"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#eeeeee"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.location}
                  </Text>
                </Grid>
                <Grid
                  width="66px"
                  height="22px"
                  border="1px solid #23C8AF"
                  bg="#23C8AF"
                  padding="2px "
                  borderRadius="9px"
                  margin="0px 6px 0px 0px"
                >
                  <Text
                    align="center"
                    color="#eeeeee"
                    size="9px"
                    // margin="2px 6px"
                  >
                    {props.distance}
                  </Text>
                </Grid>
              </Grid>
              <Grid flexLeft padding="0 0 10px 0">
                <Text size="18px" bold>
                  모임날짜
                </Text>
                <Text margin="0px 0px 0px 10px" size="18px">
                  {/* 2021.10.26 (화) PM 2:00 */}
                  {props.runningDate}
                </Text>
              </Grid>
              <Grid flexLeft padding="0 0 35px 0">
                <Text size="18px" bold>
                  모집인원
                </Text>
                <Text margin="0px 0px 0px 10px" size="18px">
                  {props.nowPeople} 명 / {props.limitPeople} 명
                </Text>
              </Grid>
              <Grid flexLeft padding="0 0 10px 0">
                <Image
                  shape="circle"
                  src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                />
                <Text size="18px" color="#ACACAC">
                  {props.writerName} 의 모임
                </Text>
              </Grid>
            </Grid>
            <Grid height="370px" margin="0 10px 0 0">
              {/* <Grid width="278px" height="87px" margin="120px 0 50px 0"> */}
              {/* <Grid flexLeft padding="0 0 5px 0">
                  <Text size="16px" bold>
                    모임날짜
                  </Text>
                  <Text size="16px" margin="0 0 0 5px">
                    {props.runningDate}
                  </Text>
                </Grid> */}
              {/* <Grid flexLeft padding="0 0 5px 0">
                  <Text size="16px" bold>
                    모집인원
                  </Text>
                  <Text size="16px" margin="0 0 0 5px">
                    {props.limitPeople}명
                  </Text>
                </Grid> */}
              {/* <Grid flexLeft padding="0 0 5px 0">
                  <Text size="16px" bold>
                    모집기간
                  </Text>
                  <Text size="16px" margin="0 0 0 5px">
                    {props.startDate}~{props.endDate}
                  </Text>
                </Grid> */}
              {/* </Grid> */}
              <Buttons medium_b>모임 수정</Buttons>

              <Buttons medium_b _onClick={clickCheck}>
                출석 관리
              </Buttons>

              {props.runningDate === props.dday &&
              props.limitePeople - props.nowPeople === 0 ? (
                <Buttons
                  width="270px"
                  medium_b
                  _onClick={() => history.push(`/reviewwrite/${props.postId}`)}
                >
                  후기 작성하기
                </Buttons>
              ) : (
                <Buttons
                  width="270px"
                  medium_b
                  _onClick={() => history.push(`/post/${props.postId}`)}
                >
                  모임 상세보기
                </Buttons>
              )}
            </Grid>
          </Grid>
          {meetCheck ? (
            <Grid>
              <Grid flexLeft>
                <Text> 모임 참여 인원</Text>
                <Text>
                  {' '}
                  {props.nowPeople} /{props.limitPeople}
                </Text>
              </Grid>
              <Grid grid>
                {crew_check?.map((crew, idx) => {
                  return (
                    <Grid>
                      <Grid flexLeft>
                        <Image
                          shape="circle"
                          src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=m66MW_9eWVgAX9nkvoE&_nc_ht=scontent-ssn1-1.xx&oh=c680ae2bb53a07f7ba6627a84fbc9881&oe=619FE266"
                        />
                        <Text size="14px"> {crew.nickname}님</Text>
                        {/* <Checkbox
                          onChange={changeCheckBox}
                        /> */}
                        <input
                          key={idx}
                          type="checkbox"
                          // id={crew.userId}
                          onChange={(e) => {
                            // checkHandler(e);
                            // setChecked(!bChecked);
                            // checkedItemHandler(crew.userId, e.target.checked);
                            changeHandler(
                              e.target.checked,

                              crew.userId,

                              // postId
                              //   e.currentTargert.checked,
                              //   member.userId,
                            );
                            console.log(
                              crew.userId,
                              e.currentTarget.checked,

                              postId,
                            );
                            // console.log(idx);
                          }}
                          // checked={checkedInputs.includes() ? true : false}
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
              <Buttons _onClick={CheckSubmit}>확인</Buttons>
              <Buttons
                _onClick={() => {
                  setMeetCheck(false);
                }}
              >
                취소
              </Buttons>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MeetingManagement;
