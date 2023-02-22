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
import SignUp from './12_실습_사용자정보입력받기/SignUp';
import Calculator from './13_실습_섭씨온도와화씨온도표시하기/Calculator';
import ProfileCard from './14_실습_Card컴포넌트만들기/ProfileCard';
import DarkOrLight from './15_실습_Context를활용한테마변경기능/DarkOrLight';
import Blocks from './16_실습_StyledComponents사용하기/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
    <DarkOrLight />
    <ProfileCard />
    <Calculator />
    <SignUp />
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
