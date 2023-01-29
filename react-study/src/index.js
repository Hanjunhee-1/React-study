import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './01_실습_JSX코드작성/Library';
import ConfirmDialog from './02_실습_Element알아보기/ConfirmDialog';
import Clock from './03_실습_시계만들기/Clock';
import Market from './04_실습_createElement사용해보기/Market';
import CommentList from './05_실습_댓글컴포넌트작성해보기/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <ConfirmDialog/>
    <Clock/>
    <Market/>
    <CommentList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// 탭이 2개가 렌더링됨
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>  )
// }, 1000);

reportWebVitals();
