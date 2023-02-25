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