import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import { AppContainer, AppHeader } from './components/header';
import FetchApi from './components/list';
import DropType from './components/dropdown'
import MainListItems from './components/listitem'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Table = styled.table`
  width: 100%;
  height: 100%;
`

const Tr = styled.tr``

const SideBar = styled.td`
  width: 20%;
  height: 100%;
  background-color:  #e6e6e6;
  display: inline-block;
`

const Content = styled.td`
  width: 79%;
  height: 100%;
  display: inline-block;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDashboard: false,
      isOpenManage: false,
      value: '',
    };
  }

  handleClickDashboard = (value) => {
    return this.setState({
      isOpenDashboard: true,
      isOpenManage: false,
      value,
    })
  }

  handleClickManage = (value) => {
    return this.setState({
      isOpenDashboard: false,
      isOpenManage: true,
      value,
    })
  }

  render() {
    const { isOpenDashboard, isOpenManage, value } = this.state
    return (
      <Container>
        <Table>
          <Tr>
            <SideBar>
              <MainListItems
                handleClickDashboard={this.handleClickDashboard}
                handleClickManage={this.handleClickManage}
              />
            </SideBar>
            <Content>
              {isOpenDashboard &&  <FetchApi /> }
              {isOpenManage && <DropType />}
            </Content>
          </Tr>
        </Table>
      </Container>
    )
  }
}

export default App