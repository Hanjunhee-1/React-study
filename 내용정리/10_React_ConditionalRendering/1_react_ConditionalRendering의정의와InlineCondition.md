# 🔔 Conditional Rendering

- `Conditional Rendering` 은 어떠한 조건에 따라서 렌더링을 다르게 해주는 것을 의미합니다. 예를 들어, 어떠한 상태가 true 이면 버튼을 보여주고 false 이면 버튼을 비활성화 해주는 것이 Conditional Rendering 이라고 할 수 있습니다.

- `Truthy` & `Falsy`

    - JS 에서는 어떤 값이 True 이고 어떤 값이 False 인지 잘 알아두어야 합니다.

    1. `Truthy`
        - JS 에서 `true 로 여겨지는 값` 을 의미합니다.
        - 예시: `true`, `{}`, `[]`, `0 이 아닌 숫자`, `비어있지 않은 문자열` 등
        - {}, [] 와 같이 비어있는 것이라도 true 로 여겨지는 것이 있다는 것에 주의해야 합니다.

    2. `Falsy`
        - JS 에서 `false 로 여겨지는 값` 을 의미합니다.
        - 예시: `false`, `0 또는 -0`, `비어있는 문자열`, `null`, `undefined`, `NaN`
        - null 과 undefined 는 분명한 차이가 있지만 모두 false 로 여겨진다는 것에 주의해야 합니다. <br/><br/><br/><br/>


# 🔔 Inline Condition

- `Inline Condition` 은 조건문을 코드 안에 집어넣는 것이라고 생각하면 쉽습니다.

- if 문의 경우에는 `&&` 연산자를 사용합니다.
    ```js
        true && expression
        false && expression
    ```


- if-else 문의 경우 `삼항연산자` 를 사용합니다.
    ```js
        condition ? expression1 : expression2
    ```
    <br/><br/><br/><br/>

# 🔔 Component 렌더링을 막는 방법

- 삼항연산자를 통해 null 을 반환해주도록 하면 됩니다.
        