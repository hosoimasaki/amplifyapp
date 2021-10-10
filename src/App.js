import React from 'react';//Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import home from './home'; //home.js 読込み
import page2 from './page2'; //page2.js 読込み

function App() {
  return (
    /* Top Page */
    <div className="App">
      <BrowserRouter>
        <h2>i-seiQ Demo</h2>
          <Link to="/">Go To top </Link>
          <Link to="/home">Go To Link </Link>
          <Link to="/page2">Go To page2</Link>

        <Switch>
          <Route exact path="/home" component={home} />
          <Route exact path="/page2" component={page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
