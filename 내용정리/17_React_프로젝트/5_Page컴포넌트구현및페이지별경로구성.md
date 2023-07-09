# 🔔 Page 별 구현

- 아래와 같이 Page 별로 컴포넌트들을 작성했습니다. 

    1. MainPage
        ```js
            // MainPage.jsx
            import { useNavigate } from 'react-router-dom';
            import styled from 'styled-components';
            import PostList from '../list/PostList';
            import Button from '../ui/Button';
            import data from '../data.json';

            const Wrapper = styled.div`
                padding: 16px;
                width: calc(100% - 32px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `;

            const Container = styled.div`
                width: 100%;
                max-width: 720px;

                & > * {
                    :not(:last-child) {
                        margin-bottom: 16px;
                    }
                }
            `;

            export default function MainPage(props) {
                const {} = props;

                const navigate = useNavigate();

                return (
                    <Wrapper>
                        <Container>
                            <Button 
                                title='글 작성하기'
                                onClick={() => {
                                    navigate('/post-write');
                                }}
                            />

                            <PostList 
                                posts={data}
                                onClickItem={(item) => {
                                    navigate(`/post/${item.id}`);
                                }}
                            />
                        </Container>
                    </Wrapper>
                )
            }
        ```
        <br/><br/><br/>

    2. PostWritePage
        ```js
            // PostWritePage.jsx
            import React, { useState } from "react";
            import { useNavigate } from "react-router-dom";
            import styled from "styled-components";
            import TextInput from '../ui/TextInput'
            import Button from "../ui/Button";

            const Wrapper = styled.div`
                padding: 16px;
                width: calc(100% - 32px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `;

            const Container = styled.div`
                width: 100%;
                max-width: 720px;

                & > * {
                    :not(:last-child) {
                        margin-bottom: 16px;
                    }
                }
            `;

            export default function PostWritePage(props) {
                const navigate = useNavigate();

                const [title, setTitle] = useState('');
                const [content, setContent] = useState('');

                return (
                    <Wrapper>
                        <Container>
                            <TextInput 
                                height={20}
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                            />

                            <TextInput 
                                height={400}
                                value={content}
                                onChange={(event) => {
                                    setContent(event.target.value);
                                }}
                            />

                            <Button 
                                title='글 작성하기'
                                onClick={() => {
                                    navigate('/');
                                }}
                            />
                        </Container>
                    </Wrapper>
                )
            }
        ```
        <br/><br/><br/>
    
    3. PostViewPage
        ```js
            // PostViewPage.jsx
            import React, { useState } from "react";
            import { useNavigate, useParams } from "react-router-dom";
            import styled from "styled-components";
            import CommentList from '../list/CommentList';
            import TextInput from "../ui/TextInput";
            import Button from "../ui/Button";
            import data from '../data.json';

            const Wrapper = styled.div`
                padding: 16px;
                width: calc(100% - 32px);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `;

            const Container = styled.div`
                width: 100%;
                max-width: 720px;

                & > * {
                    :not(:last-child) {
                        margin-bottom: 16px;
                    }
                }
            `;

            const PostContainer = styled.div`
                padding: 8px 16px;
                border: 1px solid gray;
                border-radius: 8px;
            `;

            const TitleText = styled.p`
                font-size: 20px;
                font-weight: 500;
            `;

            const ContentText = styled.p`
                font-size: 20px;
                line-height: 32px;
                white-space: pre-wrap;
            `;

            const CommentLabel = styled.p`
                font-size: 16px;
                font-weight: 500;
            `;

            export default function PostViewPage(props) {
                const navigate = useNavigate();
                const { postId } = useParams;

                const post = data.find((item) => {
                    return item.id == postId;
                });

                const [comment, setComment] = useState('');

                return (
                    <Wrapper>
                        <Container>
                            <Button 
                                title='뒤로가기'
                                onClick={() => {
                                    navigate('/')
                                }}
                            />
                            <PostContainer>
                                <TitleText>{post.title}</TitleText>
                                <ContentText>{post.content}</ContentText>
                            </PostContainer>

                            <CommentLabel>댓글</CommentLabel>
                            <CommentList comments={post.comments} />

                            <TextInput 
                                height={40}
                                value={comment}
                                onChange={(event) => {
                                    setComment(event.target.value);
                                }}
                            />
                            <Button 
                                title='댓글 작성하기'
                                onClick={() => {
                                    navigate('/');
                                }}
                            />
                        </Container>
                    </Wrapper>
                )
            }
        ```
        <br/><br/><br/>

# 🔔 라우팅 구성하는 방법

- React 에서는 `react-router-dom` 이라는 패키지를 통해서 라우팅을 구성합니다.

- 구현 예시는 다음과 같습니다.
    ```js
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='places' element={<PlacePage />} />
                <Route path='games' element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    ```
    - 만약 `host 주소`/`places` 라는 곳으로 접속한다면 PlacePage 컴포넌트가 렌더링되어 나타날 것입니다.

    - page 간의 이동의 경우에는 `useNavigate` 라는 훅을 통해 할 수 있습니다. 