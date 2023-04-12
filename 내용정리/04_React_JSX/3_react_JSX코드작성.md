# 🔔 JSX 코드 작성해보기

- `JSX` 코드를 작성해보고 `ReactDOM` 으로 렌더링까지 해볼 것입니다.
    ```js
        // Book.jsx
        import React from "react";

        function Book(props) {
            return (
                <div>
                    <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
                    <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
                </div>
            )
        }

        export default Book;
    ```
    - `Book` 이라는 함수에서 `props` 를 매개변수로 받아서 `HTML` 코드로 반환해주고 있습니다.<br/><br/><br/>

    ```js
        // Library.jsx
        import React from "react";
        import Book from "./Book";

        function Library(props) {
            return (
                <div>
                    <Book name="처음 만난 파이썬" numOfPage={300}></Book>
                    <Book name="처음 만난 React" numOfPage={400}></Book>
                </div>
            )
        }

        export default Library;
    ```
    - `Library` 라는 함수에서 `props` 를 받긴하지만 실제로 함수 내부에서 사용하는 곳은 없습니다.

    - `Library.jsx` 에서는 미리 작성해둔 `Book` 컴포넌트로 태그를 생성하여 `name` 과 `numOfPage` 라는 `속성(property)` 을 넘겨주었습니다.

    - `export` 는 다른 파일에서 `import` 하여 사용하기 위해 적어준 것입니다.<br/><br/><br/><br/>


- 마지막은 렌더링입니다. 렌더링을 하기 위해서 `index.js` 를 수정해주었습니다.
    ```js
        // index.js
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        import reportWebVitals from './reportWebVitals';

        import Library from './실습_JSX코드작성/Library';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <Library />
            </React.StrictMode>,
            document.getElementById('root')
        );

        reportWebVitals();
    ```
    - 우선 `root` 라는 변수에 `ReactDOM` 객체의 `createRoot` 함수를 통하여 `root dom` 객체를 만들어주고 `render` 함수를 사용합니다. 
        - `React 17` 버전 이전에는 해당 방법을 사용하지 않고 바로 `ReactDOM.render()` 방식을 사용했었습니다. 

    - `render` 에는 `React.StrictMode` 라는 태그가 존재하는데 해당 태그가 없어도 문제가 되지는 않지만 안전하지 않은 것들에 대한 경고를 띄워주는 것이니 필요합니다. 

    - `React.StrictMode` 의 자식으로 미리 작성해두었던 `Library` 컴포넌트를 사용합니다. <br/><br/><br/>

# React 코드가 익숙하지 않을 때 해보면 좋을 것들

- 방금 작성한 `Book` 컴포넌트와 `Library` 컴포넌트 예제를 보면서 어떤 흐름을 가지는지 익히면 좋습니다. 

- 함수의 매개변수로 받는 `props` 는 어떤 것들을 받는 것인지 어떤 구조로 이루어져있는지도 생각해보면 좋습니다. 

- 실제 작성한 컴포넌트를 마치 `HTML` 태그처럼 사용한다는 것에 익숙해지면 좋습니다.

- 함수에서 결과를 반환해줄 때 `()` 로 묶어주는 것을 알고 있으면 좋습니다. 