import React from 'react';//Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from './page1'; //page1.js 読込み
import page2 from './page2'; //page2.js 読込み

function App() {
  return (
    /* Top Page */
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>i-seiQ Demo</h1>
        <p>以下のボタンを押すとTOPページへ遷移します</p>
        <button onClick="changeLocation()">遷移する</button>
      </header>
      */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/page1" component={page1} />　
          <Route exact path="/page2" component={page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
