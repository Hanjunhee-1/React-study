# 🔔 React 와 직접 연동하기

- 이미 작성되어있는 `html` 코드에 직접 `React` 를 연동할 수 있습니다.
    ```html
        <!-- index.html -->
        <html>
            <head>
                <title>React</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>Hello, React</h1>

                <div id="root"></div>

                <!-- 리액트 가져오기 -->
                <script src="https://unpkg.com/react@17/umd/react.development.js" crrosorigin></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

                <!-- 리액트 컴포넌트 가져오기 -->
                <script src="MyButton.js"></script>
            </body>
        </html>
    ```
    ```css
        /* style.css */
        h1 {
            color: green;
            font-style: italic;
        }
    ```
    ```js
        // MyButton.js
        const MyButton = (props) => {
            const [isClicked, setIsClicked] = React.useState(false);

            return React.createElement(
                'button',
                { onClick: () => setIsClicked(true) },
                isClicked ? 'Clicked!' : 'Click here!'
            )
        }

        const domContainer = document.querySelector('#root');
        ReactDOM.render(React.createElement(MyButton), domContainer);
    ```
    - 이렇게 처음부터 `React` 로 작성되지 않은 프로젝트에도 `React` 를 적용할 수 있습니다. 