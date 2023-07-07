# 🔔 UI 컴포넌트 구현

- 아래와 같이 UI 컴포넌트를 구현했습니다. 
    1. button 과 input 관련 컴포넌트
        ```js
            // Button.jsx
            import styled from 'styled-components';

            const StyledButton = styled.button`
                padding: 8px 16px;
                font-size: 16px;
                border-width: 1px;
                border-radius: 8px;
                cursor: pointer;
            `;

            export default function Button(props) {
                const { title, onClick } = props;

                return (
                    <StyledButton onClick={onClick}>
                        {title || 'button'}
                    </StyledButton>
                )
            }
        ```
        ```js
            // TextInput.jsx
            import styled from "styled-components";

            const StyledTextarea = styled.textarea`
                width: calc(100% - 32px);
                ${(props) => 
                    props.height && `height: ${props.height}px;`
                }
                padding: 16px;
                font-size: 16px;
                line-height: 20px;
            `;

            export default function TextInput(props) {
                const { height, value, onChange } = props;

                return (
                    <StyledTextarea height={height} value={value} onChange={onChange} />
                )
            }
        ```
        <br/><br/>

    2. 게시글 관련 컴포넌트
        ```js
            // PostListItem.jsx
            import styled from "styled-components";

            const Wrapper = styled.div`
                width: calc(100% - 32px);
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                border: 1px solid gray;
                border-radius: 8px;
                cursor: pointer;
                background: white;
                :hover {
                    background: lightgray;
                }
            `;

            const TitleText = styled.p`
                font-size: 20px;
                font-weight: 500;
            `;

            export default function PostListItem(props) {
                const { post, onClick } = props;

                return (
                    <Wrapper onClick={onClick}>
                        <TitleText>{post.title}</TitleText>
                    </Wrapper>
                )
            }
        ```
        ```js
            // PostList.jsx
            import styled from "styled-components";
            import PostListItem from "./PostListItem";

            const Wrapper = styled.div`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                
                & > * {
                    :not(:last-child) {
                        margin-bottom: 16px;
                    }
                }
            `;

            export default function PostList(props) {
                const { posts, onClickItem } = props;

                return (
                    <Wrapper>
                        {posts.map((post, index) => {
                            return (
                                <PostListItem
                                    key={post.id}
                                    post={post}
                                    onClick={() => {
                                        onClickItem(post);
                                    }}
                                />
                            )
                        })}
                    </Wrapper>
                )
            }
        ```
        <br/><br/>

    3. 댓글 관련 컴포넌트
        ```js
            // CommentListItem.jsx
            import styled from "styled-components";

            const Wrapper = styled.div`
                width: calc(100% - 32px);
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                border: 1px solid gray;
                border-radius: 8px;
                cursor: pointer;
                background: white;
                :hover {
                    background: lightgray;
                }
            `;

            const ContentText = styled.p`
                font-size: 14lpx;
            `;

            export default function CommentListItem(props) {
                const { comment } = props;

                return (
                    <Wrapper>
                        <ContentText>{comment.content}</ContentText>
                    </Wrapper>
                )
            }
        ```
        ```js
            // CommentList.jsx
            import styled from "styled-components";
            import CommentListItem from "./CommentListItem";

            const Wrapper = styled.div`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                & > * {
                    :not(:last-child) {
                        margin-bottom: 16px;
                    }
                }
            `;

            export default function CommentList(props) {
                const { comments } = props;

                return (
                    <Wrapper>
                        {comments.map((comment, index) => {
                            return (
                                <CommentListItem key={comment.id} comment={comment} />
                            )
                        })}
                    </Wrapper>
                )
            }
        ```