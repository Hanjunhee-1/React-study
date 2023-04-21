# 🔔 댓글 컴포넌트 작성해보기

- 댓글 기능은 어떤 사이트를 만들더라도 대부분 들어가는 기능 중 하나입니다. 그래서 댓글 컴포넌트를 작성해보며 댓글 기능 구현방법을 알아보고자 합니다.

- 우선 댓글이라는 것이 웹 페이지에 어떻게 나타나는지 생각해보는 것이 중요합니다. 댓글이 딱 하나만 나타나는 경우는 거의 없고 여러 개가 리스트 형태로 나타납니다. 때문에 이럴 때는 댓글 하나에 대한 것과 전체 댓글에 관한 것으로 나누어서 컴포넌트를 구성해주면 됩니다. 

- `/05_실습_댓글컴포넌트작성해보기` 에서 작업했습니다.
    ```js
        // Comment.jsx
        const styles = {
            wrapper: {
                margin: 8,
                padding: 8,
                display: "flex",
                flexDirection: "row",
                border: "1px solid gray",
                borderRadius: 16,
            },
            imageContainer: {},
            image: {
                width: 50,
                height: 50,
                borderRadius: 25
            },
            contentContainer: {
                marginLeft: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            },
            nameText: {
                color: "black",
                fontSize: "16",
                fontWeight: "bold",
            },
            commentText: {
                color: "black",
                fontSize: 16,
            },
        }

        function Comment(props) {
            return (
                <div style={styles.wrapper}>
                    <div style={styles.imageContainer}>
                        <img 
                            src="http://internetlawclinic.org/common/img/default_profile.png"
                            alt="TEST"
                            style={styles.image}
                        />
                    </div>

                    <div style={styles.contentContainer}>
                        <span style={styles.nameText}>{props.name}</span>
                        <span style={styles.commentText}>
                            {props.content}
                        </span>
                    </div>
                </div>
            )
        }

        export default Comment;
    ```
    - style 속성을 통해 css 를 입혀보았는데 해당 부분은 나중에 자세히 다룰 것이기 때문에 댓글 컴포넌트는 어떻게 구성되는지 이해하는 것이 더 중요합니다. <br/><br/><br/>

    - 그 다음으로는 전체 댓글을 보여줄 컴포넌트를 작성했습니다.
    ```js
        // CommentList.jsx
        import Comment from "./Comment";

        const comments = [
            {
                name: "익명1",
                content: "React 배우다보니 할만하네요"
            },
            {
                name: "익명2",
                content: "엄청 어려운 줄 알았는데 그냥 할만해요"
            },
            {
                name: "익명3",
                content: "하기 전부터 겁을 먹으면 안되는 이유"
            }
        ]

        function CommentList(props) {
            return (
                <div>
                    {
                        comments.map((comment) => {
                            return (
                                <Comment name={comment.name} content={comment.content} />
                            )
                        })
                    }
                </div>
            )
        }

        export default CommentList;
    ```
    - 해당 부분에서는 js 문법과 관련된 내용이 나옵니다. map() 함수를 통해 list 로 받아온 comments 에서 하나씩 가져와서 댓글 컴포넌트를 통해 해당 내용들을 렌더링 해줍니다. <br/><br/><br/>

    - 제대로 동작하는지 확인하기 위해 index.js 를 아래와 같이 수정해줍니다.
    ```js
        // index.js
        // ...
        import CommentList from './05_실습_댓글컴포넌트작성해보기/CommentList';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <CommentList/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    ```

- 댓글 컴포넌트와 댓글 컴포넌트들을 모두 담는 댓글 리스트 컴포넌트를 구성하는 방법들을 보며 React 의 컴포넌트에 대한 이해를 더 높이는 것이 좋습니다. 