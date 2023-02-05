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
import NotificationList from './06_실습_State사용해보기/NotificationList';
import Counter from './07_실습_useState와useEffect사용해보기/Counter';
import Accomodate from './08_실습_Hooks사용해보기/Accomodate';
import ConfirmButton from './09_실습_클릭이벤트처리/ConfirmButton';
import LandingPage from './10_실습_로그인여부툴바만들기/LandingPage';
import AttendanceBook from './11_실습_출석부/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceBook />
    <LandingPage />
    <Library />
    <ConfirmDialog/>
    <Clock/>
    <Market/>
    <CommentList/>
    <Counter />
    <Accomodate />
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);


// Mount, Update, Unmount 를 좀 더 잘 알아보기 위해 따로 render 한 것.
// 확인하고 난 뒤에는 주석처리 해둘 것
// root.render(
//   <NotificationList />,
//   document.getElementById('root')
// )

reportWebVitals();
