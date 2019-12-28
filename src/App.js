import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}>텍폴 333번가</h1>
      <div className={'post'}>
        <table width="700" height="100">
          <tr height="50"><td width="15">이름1</td> 
                          <td width="15"> 도서</td>
                          <td width="15"> 5000원</td>
                          <td width="55"> 수업자료 판매합니다.</td></tr>
          <tr height="50"><td width="15">이름2</td> 
                          <td width="15"> 옷</td>
                          <td width="15"> 15000원</td>
                          <td width="55"> 맨투맨 팔아요</td></tr>
          <tr height="50"><td width="15">이름3</td> 
                          <td width="15"> 도서</td>
                          <td width="15"> 25000원</td>
                          <td width="55"> 전공서적 팔아요!</td></tr>
          <tr height="50"><td width="15">이름4</td> 
                          <td width="15"> 귤</td>
                          <td width="15"> 20000원</td>
                          <td width="55"> 직접 제배한 귤 팝니다</td></tr>
          <tr height="50"><td width="15">이름5</td> 
                          <td width="15"> 무료나눔</td>
                          <td width="15"> 0원</td>
                          <td width="55"> 무료나눔합니다</td></tr>
        </table>
      </div>
      <button onclick="location='App.js'">글쓰기</button>
    </div>
  );
}

export default App;
