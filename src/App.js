import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContainer, AppHeader, bas, nu } from './components/header'
import FetchApi from './components/list'



export default () => (
  <AppContainer>
    <AppHeader>
      <FetchApi />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. {bas} {nu(5, 9)}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </AppHeader>
  </AppContainer>
)
