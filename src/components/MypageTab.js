import { Button } from '../elements';
import React, { Component } from 'react';
import styled from 'styled-components';
import {
  MyprofileTab,
  ApplicationTab,
  ReviewTab,
  MeetingTab,
} from './MypageTab/index';

const TabList = {
  0: <MyprofileTab />,
  1: <ApplicationTab />,
  2: <ReviewTab />,
  3: <MeetingTab />,
};

class MypageTab extends Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };

  render() {
    return (
      <div className='wrap'>
        <MenuBar>
          <Tabs>
            <Button
              width='278px'
              height='44px'
              outline='0px'
              className={`${this.state.menu === 0 ? 'active' : ''}`}
              _onClick={() => this.changeMenu(0)}
            >
              내 프로필
            </Button>
            <Button
              width='278px'
              height='44px'
              className={`${this.state.menu === 1 ? 'active' : ''}`}
              _onClick={() => this.changeMenu(1)}
            >
              신청 내역
            </Button>
            <Button
              width='278px'
              height='44px'
              className={`${this.state.menu === 2 ? 'active' : ''}`}
              _onClick={() => this.changeMenu(2)}
            >
              후기 내역
            </Button>
            <Button
              width='278px'
              height='44px'
              className={`${this.state.menu === 3 ? 'active' : ''}`}
              _onClick={() => this.changeMenu(3)}
            >
              모임 관리
            </Button>
          </Tabs>
        </MenuBar>
        <div className='contentArea'>{TabList[this.state.menu]}</div>
      </div>
    );
  }
}

const MenuBar = styled.div`
  background: #fff;
  width: 100%;
  margin: 20px auto 0 auto;
  text-align: center;
`;

const Tabs = styled.ul`
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  color: #efefef;
  padding: 1rem;
  cursor: pointer;
`;

export default MypageTab;
