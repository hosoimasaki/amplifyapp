import React from 'react';              //Reactを読み込んでいる
import logo from './logo.svg';
import './App.css';

class home extends React.Component {   //homeクラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>i-seiQ Demo</h1>
            </header>
        );
    }
}
 
export default home;                   //homeを出力する為に必要