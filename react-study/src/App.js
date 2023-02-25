import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './17_프로젝트/component/page/MainPage';
import PostWritePage from './17_프로젝트/component/page/PostWritePage';
import PostViewPage from './17_프로젝트/component/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export default function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>나의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='post-write' element={<PostWritePage />} />
        <Route path='post/:postId' element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  )
}