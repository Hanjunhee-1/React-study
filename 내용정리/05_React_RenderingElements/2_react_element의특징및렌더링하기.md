# 🔔 Element 의 특징

- `immutable`
    
    - 한번 생성된 Element 의 children 이나 attribute 는 바꿀 수 없습니다.  

    - 그럼 웹 페이지를 새로고침하면 안바뀌는 것인가요?

        - 가장 중요한 단어인 `생성된` 에 초점을 맞추면 해당 질문의 답을 구할 수 있습니다. React 에는 Virtual DOM 이라는 것이 있습니다. 만약 새로고침을 하게 된다면 미리 만들어둔 Component 에서 새로운 Element 를 만들어내는 것입니다. 즉, Virtual DOM 에서 바뀌어야 하는 부분을 찾아내서 해당 부분에 대한 것만 바꿔주게 됩니다. 붕어빵 기계에서 붕어빵을 만들어내는 원리를 생각하면 쉽습니다. <br/><br/><br/><br/>

# 🔔 Element 렌더링하기

- React 앱에 필수적으로 들어가는 Root DOM Node 라는 것이 있는데 아래와 같은 html 코드로 되어있습니다.
    ```html
        <div id='root'></div>
    ```
    <br/><br/>

- index.js 를 보면 Element 가 어떤 식으로 렌더링 되는지 알수 있습니다. 
    ```js
        // index.js
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            // [elements ...],
            document.getElementById('root')
        );
    ```

    - [elements ...] 라고 되어있는 자리에는 미리 만들어둔 컴포넌트를 html 태그 형태로 넣어두면 렌더링됩니다. 예시) `<Library/>`, `<ConfirmDialog/>`

    - React 의 DOM 과 브라우저의 DOM 은 다릅니다!

    - React 에서 렌더링한다는 것은 Virtual DOM 을 실제 브라우저의 DOM 으로 만드는 과정입니다.