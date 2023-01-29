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