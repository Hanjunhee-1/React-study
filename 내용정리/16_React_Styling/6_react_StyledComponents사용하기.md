# 🔔 styled-components 사용하기

- 아래와 같이 styled-components 를 사용하여 컴포넌트를 꾸며봅니다.
    ```javascript
        // Blocks.jsx
        import styled from 'styled-components';

        const Wrapper = styled.div`
            padding: 1rem;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: lightgray;
        `;

        const Block = styled.div`
            padding: ${(props) => props.padding};
            border: 1px solid black;
            border-radius: 1rem;
            background-color: ${(props) => props.backgroundColor};
            color: white;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
        `

        const blockItems = [
            {
                label: '1',
                padding: '1rem',
                backgroundColor: 'red',
            },
            {
                label: '2',
                padding: '3rem',
                backgroundColor: 'green',
            },
            {
                label: '3',
                padding: '2rem',
                backgroundColor: 'blue',
            },
        ];

        export default function Blocks(props) {
            return (
                <Wrapper>
                    {blockItems.map((blockItem) => {
                        return (
                            <Block
                                padding={blockItem.padding}
                                backgroundColor={blockItem.backgroundColor}
                            >
                            {blockItem.label}
                            </Block>
                        )
                    })}
                </Wrapper>
            )
        }
    ```
    - Block 이라는 styled-components 를 보면 props 를 통해 style 값을 지정해주고 있습니다. styled-components 도 엄연한 컴포넌트이기 때문에 가능한 것입니다. 