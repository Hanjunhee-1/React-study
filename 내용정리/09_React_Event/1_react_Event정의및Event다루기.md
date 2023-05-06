# 🔔 Event 의 정의

- 사용자의 어떤 행동 하나하나를 `Event` 라고 합니다.

- 아래의 예시를 보겠습니다.
    ```html
        <button onClick="activate()">
            Activate
        </button>
    ```
    - 해당 버튼을 누르면 `activate` 라는 함수를 실행하게됩니다. <br/><br/><br/>

- 이번에는 React 의 `Event` 예시 코드를 보겠습니다.
    ```js
        <button onClick={activate}>
            Activate
        </button>
    ```
    - DOM 을 사용하는 것과 굉장히 비슷합니다. <br/><br/><br/>


- 이렇게 어떤 `Event` 가 발생하면 해당 `Event` 를 처리해주는 것을 `Event Handler` 또는 `Event Listner` 라고도 합니다.