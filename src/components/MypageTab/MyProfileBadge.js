import React from 'react';
import { Grid, Container, Text, Image, Buttons, Tags } from '../../elements';
import { userCreators } from '../../redux/modules/user';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

// 신발끈 묶깅, 한 걸음 더
import Profile_Lv1 from '../../assets/Badge/Profile_Lv1.svg';
import Profile_Lv2 from '../../assets/Badge/Profile_Lv2.svg';
import UnProfile_Lv1 from '../../assets/Badge/UnProfile_Lv1.svg';
import UnProfile_Lv2 from '../../assets/Badge/UnProfile_Lv2.svg';

// 줍린이, 줍킹
import Review_Lv1 from '../../assets/Badge/Review_Lv1.svg';
import Review_Lv2 from '../../assets/Badge/Review_Lv2.svg';
import UnReview_Lv1 from '../../assets/Badge/UnReview_Lv1.svg';
import UnReview_Lv2 from '../../assets/Badge/UnReview_Lv2.svg';
// 둘러보깅, 아이줍깅
import Bookmark_Lv1 from '../../assets/Badge/Bookmark_Lv1.svg';
import Bookmark_Lv2 from '../../assets/Badge/Bookmark_Lv2.svg';
import UnBookmark_Lv1 from '../../assets/Badge/UnBookmark_Lv1.svg';
import UnBookmark_Lv2 from '../../assets/Badge/UnBookmark_Lv2.svg';
// 줍깅의 시작, 프로줍깅러
import Join_Lv1 from '../../assets/Badge/Join_Lv1.svg';
import Join_Lv2 from '../../assets/Badge/Join_Lv2.svg';
import UnJoin_Lv1 from '../../assets/Badge/UnJoin_Lv1.svg';
import UnJoin_Lv2 from '../../assets/Badge/UnJoin_Lv2.svg';
// 지각생
import Miss from '../../assets/Badge/Miss.svg';
import UnMiss from '../../assets/Badge/UnMiss.svg';

// 반장, 회장
import Master_Lv1 from '../../assets/Badge/Master_Lv1.svg';
import Master_Lv2 from '../../assets/Badge/Master_Lv2.svg';
import UnMaster_Lv1 from '../../assets/Badge/UnMaster_Lv1.svg';
import UnMaster_Lv2 from '../../assets/Badge/UnMaster_Lv2.svg';

const MyProfileBadge = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((state) => state.user.myBadge?.data);
  console.log(badge);

  const badgeLevel = badge?.filter((b, idx) => b?.badgeLevel);

  let mapLv = [...new Set(badge?.map((it) => it.badgeLevel))];

  console.log(mapLv);

  const connn = mapLv.filter((b) => {
    return b === 1;
  });
  console.log(connn);
  console.log(badgeLevel);

  React.useEffect(() => {
    dispatch(userCreators.getMyBadgeDB());
  }, []);

  return (
    <React.Fragment>
      {mapLv.filter((b) => {
        return b === 1;
      })[0] === 1 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Profile_Lv1} />
          <Text bold color="#333333" size="14px">
            신발끈 묶깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnProfile_Lv1} />
          <Text bold color="#333333" size="14px">
            신발끈 묶깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 11;
      })[0] === 11 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Profile_Lv2} />
          <Text bold color="#333333" size="14px">
            한 걸음 더
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnProfile_Lv2} />
          <Text bold color="#333333" size="14px">
            한 걸음 더
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 2;
      })[0] === 2 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Review_Lv1} />
          <Text bold color="#333333" size="14px">
            줍린이
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnReview_Lv1} />
          <Text bold color="#333333" size="14px">
            줍린이
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 22;
      })[0] === 22 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Review_Lv2} />
          <Text bold color="#333333" size="14px">
            줍킹
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnReview_Lv2} />
          <Text bold color="#333333" size="14px">
            줍킹
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 3;
      })[0] === 3 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Bookmark_Lv1} />
          <Text bold color="#333333" size="14px">
            둘러보깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnBookmark_Lv1} />
          <Text bold color="#333333" size="14px">
            둘러보깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 33;
      })[0] === 33 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Bookmark_Lv2} />
          <Text bold color="#333333" size="14px">
            아이줍깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnBookmark_Lv2} />
          <Text bold color="#333333" size="14px">
            아이줍깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 4;
      })[0] === 4 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Join_Lv1} />
          <Text bold color="#333333" size="14px">
            줍깅의 시작
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnJoin_Lv1} />
          <Text bold color="#333333" size="14px">
            줍깅의 시작
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 44;
      })[0] === 44 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Join_Lv2} />
          <Text bold color="#333333" size="14px">
            프로줍깅러
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnJoin_Lv2} />
          <Text bold color="#333333" size="14px">
            프로줍깅러
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 5;
      })[0] === 5 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Miss} />
          <Text bold color="#333333" size="14px">
            지각생
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMiss} />
          <Text bold color="#333333" size="14px">
            지각생
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 6;
      })[0] === 6 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Master_Lv1} />
          <Text bold color="#333333" size="14px">
            반장
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMaster_Lv1} />
          <Text bold color="#333333" size="14px">
            반장
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 66;
      })[0] === 66 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Master_Lv2} />
          <Text bold color="#333333" size="14px">
            회장
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMaster_Lv2} />
          <Text bold color="#333333" size="14px">
            회장
          </Text>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default MyProfileBadge;
