# 🔔 여러 컴포넌트를 렌더링하는 방법

- 서버로부터 어떤 데이터를 받아올 때 여러개를 받아오는 경우에는 아래와 같은 예시처럼 `List` 형태로 받게됩니다.
    ```js
        status_code: 200,
        content: [
            {
                id: 1,
                comment: '안녕하세요.',
                user: {
                    id: 1,
                    name: 'kevin',
                    age: 21
                },
                createdAt: '2023-05-12',
                updatedAt: '2023-05-12'
            },
            {
                id: 2,
                comment: '반갑습니다.',
                user: {
                    id: 2,
                    name: 'tom',
                    age: 30,
                },
                createdAt: '2023-05-12',
                updatedAt: '2023-05-12'
            }
        ]
    ```
    <br/><br/><br/>

- React 에서는 List 에서 사용할 수 있는 `map` 이라는 함수를 통해 위와 같은 형태의 데이터들도 렌더링 해줄 수 있습니다. 아래의 코드는 위의 예시코드를 렌더링하는 또다른 예시코드입니다.
    ```js
        const comments = content.map((content) => {
            <li>{content.comment}</li>
        });

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <ul>{comments}</ul>,
            document.getElementById('root');
        )
    ```
    - 위의 코드는 `comments` 라는 변수에 넘겨받은 데이터 중에서 `comment` 부분만 따로 추출하여 저장합니다. `JSX` 문법이 사용되었다는 것도 잘 봐주시면 좋을 것 같습니다. 

    - 해당 코드 자체에 문제는 없지만 실행을 시켜본 뒤 console 창을 보면 경고문을 띄워주고 있습니다. 그 이유는 `Key` 를 따로 정해주지 않았기 때문입니다!