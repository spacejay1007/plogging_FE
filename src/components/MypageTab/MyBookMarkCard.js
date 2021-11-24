// // ApplicationTab
// import React from 'react';
// import { Container, Grid, Image, Text, Icon, Buttons } from '../../elements';
// import { history } from '../../redux/configureStore';
// import Swal from 'sweetalert2';

// import Location from '../../assets/Icon/Location.svg';

// const MeetingManagement = (props) => {
//   const postId = props.postId;

//   const  = () => {
//     history.push(`/meetingcheck/${postId}`);
//   };

//   return (
//     <React.Fragment>
//       <Container>
//         <Grid
//           isFlex
//           overFlow
//           maxWidth="1160px"
//           minWidth="1160px"
//           height="257px"
//           border="1px solid  #DCDCDC"
//           borderRadius="10px"
//           margin="40px auto"
//         >
//           <Grid width="370px">
//             <Image src={props.postImg}></Image>
//           </Grid>

//           <Grid padding="10px" height="257px" padding="20px">
//             <Grid width="450px" flexLeft>
//               <Icon width="30px" src={Location} />
//               <Text size="15px" color="#acacac">
//                 서울시 {props.location}
//               </Text>
//             </Grid>
//             <Grid>
//               <Text align="left" bold size="25px" margin="10px 0px">
//                 {' '}
//                 {props.title}
//               </Text>
//             </Grid>

//             <Grid margin="40px 0px 0px 0px">
//               <section>
//                 <Grid flexLeft>
//                   <Grid
//                     width="50px"
//                     height="20px"
//                     border="1px solid #23C8AF"
//                     bg="#23C8AF"
//                     padding="2px "
//                     borderRadius="9px"
//                     margin="0px 6px 0px 0px"
//                   >
//                     <Text align="center" color="#fff" size="9px">
//                       {props.type}
//                     </Text>
//                   </Grid>
//                   <Grid
//                     width="50px"
//                     height="20px"
//                     border="1px solid #23C8AF"
//                     bg="#23C8AF"
//                     padding="2px "
//                     borderRadius="9px"
//                     margin="0px 6px 0px 0px"
//                   >
//                     <Text align="center" color="#fff" size="9px">
//                       {props.distance}
//                     </Text>
//                   </Grid>
//                   <Grid
//                     width="50px"
//                     height="20px"
//                     border="1px solid #23C8AF"
//                     bg="#23C8AF"
//                     padding="2px "
//                     borderRadius="9px"
//                     margin="0px 6px 0px 0px"
//                   >
//                     <Text align="center" color="#fff" size="9px">
//                       {props.location}
//                     </Text>
//                   </Grid>
//                 </Grid>

//                 <section>
//                   <Grid flexLeft margin="10px 0px 0px 0px">
//                     <Text size="14px" bold margin="0px 20px 0px 0px">
//                       모임날짜
//                     </Text>
//                     <Text size="14px" color="#666666">
//                       {props.runningDate}
//                     </Text>
//                   </Grid>

//                   <Grid flexLeft margin="10px 0px 0px 0px">
//                     <Text size="14px" bold margin="0px 20px 0px 0px">
//                       모임인원
//                     </Text>
//                     <Text size="14px" color="#666666">
//                       {' '}
//                       {props.limitPeople}명{' '}
//                     </Text>
//                   </Grid>
//                   <Grid flexLeft margin="10px 0px 0px 0px">
//                     <Text size="14px" bold margin="0px 20px 0px 0px">
//                       모집기간
//                     </Text>
//                     <Text size="14px" color="#666666">
//                       {props.startDate} ~ {props.endDate}
//                     </Text>
//                   </Grid>
//                 </section>
//               </section>
//             </Grid>
//           </Grid>

//           <Grid maxWidth="350px" height="257px" centerFlex margin="0px 20px">
//             <Grid>
//               <Grid margin="10px 0px 0px 0px">
//                 <Buttons
//                   enter
//                   _onClick={() => {
//                     history.push(`/post/${props.postId}`);
//                   }}
//                 >
//                   {' '}
//                   모임 상세보기
//                 </Buttons>
//               </Grid>
//               {props.postAttendation === false ? (
//                 <>
//                   <Grid margin="10px 0px 0px 0px">
//                     <Buttons enter _onClick={clickCheck}>
//                       {' '}
//                       출석 체크
//                     </Buttons>
//                   </Grid>
//                 </>
//               ) : (
//                 <>
//                   <Grid margin="10px 0px 0px 0px">
//                     <Buttons
//                       enter_dis
//                       _onClick={() => {
//                         Swal.fire({
//                           text: '출석체크가 마감되었습니다.',
//                           width: '360px',
//                           confirmButtonColor: '#23c8af',
//                         });
//                       }}
//                     >
//                       {' '}
//                       출석 체크 완료
//                     </Buttons>
//                   </Grid>
//                 </>
//               )}
//               {props.dday < 0 ? (
//                 <Grid margin="10px 0px 0px 0px">
//                   <Buttons
//                     enter_dis
//                     _onClick={() => {
//                       Swal.fire({
//                         text: '삭제가 불가능합니다.',
//                         width: '360px',
//                         confirmButtonColor: '#23c8af',
//                       });
//                     }}
//                   >
//                     {' '}
//                     모임 삭제하기
//                   </Buttons>
//                 </Grid>
//               ) : (
//                 <>
//                   <Grid margin="10px 0px 0px 0px">
//                     <Buttons
//                       enter
//                       // _onClick={() => {
//                       //   history.push(`/post/${props.postId}`);
//                       // }}
//                     >
//                       {' '}
//                       모임 삭제하기
//                     </Buttons>
//                   </Grid>
//                 </>
//               )}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default MeetingManagement;
