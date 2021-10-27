import React from "react";
import axios from "axios";
import { Container, Grid, Button, Text } from "../elements/index";

const Posting = (props) => {
    return (
        <React.Fragment>
            <Container>
                <Grid>
                    <Text align="center">
                        <h4>모임 만들기</h4>
                    </Text>
                    
                    모임이름<br/>
                    모임날짜 모임시간
                    모집기간<br/>
                    모임장소<br/>
                    장소유형<br/>
                    진행거리<br/>
                    모집인원<br/>
                    모임소개<br/>
                    이미지 <Button>업로드</Button>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Posting;