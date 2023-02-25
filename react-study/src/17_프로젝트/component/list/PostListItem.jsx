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