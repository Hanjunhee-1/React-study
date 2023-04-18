# 🔔 Props 의 특징

- 오직 읽을 수만 있습니다.

- Props 는 pure 함수 같은 역할을 합니다.

    - pure 함수는 무엇일까요?
        ```js   
            // pure function
            function pure_sum(a, b) {
                return a + b;
            }

            // impure function
            const fixed = 10;
            function impure_sum(a, b) {
                return a + b + fixed;
            }
        ```
        - 위의 pure_sum() 함수는 매개변수로 받은 a 와 b 끼리의 합을 출력합니다. 이처럼 함수 이름과 매개변수를 보고 내용을 맞출 수 있다면 pure 함수인 것입니다. 

        - 반대로 impure_sum() 함수는 매개변수로 a 와 b 를 받는 것까지는 동일합니다만 예측한 내용과는 다른 로직이 수행되고 있습니다. <br/><br/>
- 즉, 모든 React 컴포넌트는 props 를 직접 바꿀 수 없고, 같은 props 에 대해서는 항상 같은 결과를 보여줘야 하는 것입니다. <br/><br/><br/><br/>

# 🔔 Props 사용법

- 예제를 통해 알아보도록 하겠습니다. 
    ```
        function App(props) {
            return (
                <Profile
                    name="React"
                    introduction="Hello, React"
                    viewCount={10}
                />
            )
        }
    ```
    - 해당 예제는 Profile 이라는 컴포넌트에 name, introduction, viewCount 라는 이름의 props 를 넘겨주고 있습니다. 

    - props 객체는 아래와 같은 형태일 것입니다. 
        ```
            {
                name: "React",
                introduction: "Hello, React",
                viewCount: 10,
            }
        ```
<br/><br/><br/>

    또 다른 예제도 보자.
    ```
        function App(props) {
            return (
                <Layout
                    width={2500}
                    height={1440}
                    header={
                        <Header title="Hello, React" />
                    }
                    footer={
                        <Footer />
                    }
                />
            )
        }
    ```
    이번에는 props 로 글자나 숫자 값만 받는 것이 아닌 또 다른 컴포넌트를 받는 예제이다.
    내용정리/5_React_RenderingElements/1_react_element의정의와생김새.txt 를 같이보면
    더 잘 이해가 될 것이라고 생각한다.


    너무 JSX 로만 하면 재미없으니 React 의 createElement() 함수를 통해서도 props 를 다뤄보자.
    맨 위의 Profile 컴포넌트 예제를 createElement() 함수로 만들어본다면 아래와 같을 것이다.
    ```
        React.createElement(
            Profile,
            {
                name: "React",
                introduction: "Hello, React",
                viewCount: 10,
            },
            null
        )
    ```
    createElement() 의 매개변수로는 
    첫번째로 type, 두번째로 props, 마지막으로 children 을 받는다.


    ★  문득 생각나서 해본 createElement() 로 컴포넌트 구성하기

        /04_실습_createElement사용해보기 디렉토리에서 작성한 것들이다.
        ```
            // Item.jsx
            import React from "react";

            function Item(props) {
                return (
                    React.createElement(
                        "div",
                        null,
                        [
                            React.createElement(
                                "h1",
                                null,
                                `이 상품의 이름은 ${props.name} 입니다.`
                            ),
                            React.createElement(
                                "h2",
                                null,
                                `가격은 ${props.price}원 입니다.`
                            )
                        ]
                    )
                )
            }

            export default Item;
        ```
        ```
            // Market.jsx
            import React from "react";
            import Item from "./Item";

            function Market(props) {
                return (
                    React.createElement(
                        "div",
                        null,
                        [
                            React.createElement(
                                "h1",
                                null,
                                "이 아래로는 createElement() 로 생성한 element 입니다."
                            ),
                            React.createElement(
                                Item,
                                {
                                    name: "Galaxy Buds Pro",
                                    price: 230000
                                },
                                null
                            ),
                            React.createElement(
                                Item,
                                {
                                    name: "Lenovo 노트북",
                                    price: 1000000
                                },
                                null
                            )
                        ]
                    )
                )
            }

            export default Market;
        ```

        계속 하다보니 jsx 로 작성한 것이나 createElement() 를 활용한 것이나 똑같이 느껴진다.
        하지만 createElement() 가 더 긴것은 맞다...
        React.createElement 를 계속 작성하는 것이 좀 그렇다면 다른 변수에 할당해서 줄여쓸 수도 있다.

        예시)
            const e = React.createElement;
            e(
                ...
            )

        참고링크:
        https://ko.reactjs.org/docs/react-without-jsx.html