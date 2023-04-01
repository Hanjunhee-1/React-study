# 🔔 함수의 형태
- 함수는 2가지의 형태로 쓸 수 있습니다.

- 예시
    - `function statement`
        ```Javascript
            function sum(a, b) {
                return a+b;
            }
        ```
        - 다른 프로그래밍 언어들을 통해 꾸준히 봐왔던 함수의 형태입니다.
        <br/><br/><br/>
    - `arrow function expression`
        ```JavaScript
            const sum = (a, b) => {
                return a+b;
            }
        ```
        - 화살표 함수라고 부르는 함수의 형태입니다. 변수를 선언하여 해당 변수에 함수를 대입해주는 형태입니다. <br/><br/><br/>
    
    - 👁‍🗨 추가로 위의 형태에서 약간 변형된 함수도 존재합니다.
        ```Javascript
            (a, b) => {
                console.log(a * b);
            }
        ```
        - 해당 함수는 `익명 함수` 입니다. 그냥 함수의 내용만 존재하며 재사용할 수 없다는 특징을 갖고 있습니다. 보통 `비동기 방식` 과 `콜백 함수` 를 구현할 때 혹은 함수 자체를 매개변수로 넘겨줄 때 많이 사용합니다. 