# 🔔 useMemo

- `useMemo` 는 `Memoized value` 를 반환해주는 `Hook` 입니다.

    - `memoization` 이 무엇인가요?
        - 최적화를 위해 사용하는 것입니다. 연산이 오래 걸리고 양이 많은 연산을 할 때 이전에 저장해놨던 호출결과를 바로 반환해주는 것입니다. 예를 들면, 피보나치 알고리즘이 있는데 해당 알고리즘은 시간복잡도가 빅오표기법으로 표현했을 때 `O(2^N)` 이 나옵니다. 하지만 `memoization` 을 적용하면 시간이 오래걸리던 알고리즘을 효율적으로 만들어줄 수 있습니다. <br/><br/><br/>


- `useMemo` 사용법 예시는 아래와 같습니다.
    ```js
        const memoizedValue = useMemo(() => {
            // 연산량이 높은 작업을 수행하여 결과를 반환.
            return computeExpensiveValue(의존성변수1, 의존성변수2);
        }, [의존성변수1, 의존성변수2])
    ```
    - 의존성 변수가 변했는지 여부에 따라서 변했다면 새로 연산(연산량이 높은) 을 하여 반환하고 변하지 않았다면 기존에 저장해두었던 결과를 반환해줍니다.
    <br/><br/><br/>


- 이렇게 `useMemo` 를 사용하면 컴포넌트가 렌더링 될때마다 연산량이 높은 작업을 반복해서 작업하는 것을 방지할 수 있습니다. 결과적으로는 빠른 렌더링이 가능하게 합니다. 

- `useEffect` 와 마찬가지로 의존성변수들이 담긴 의존성 배열을 매개변수로 안 줄수도 있습니다. 하지만 이러면 `useMemo` 에 있는 함수가 매 렌더링마다 실행되므로 의미가 없습니다. 의존성 배열이 빈 배열일 경우에는 컴포넌트가 `Mount` 될때만 호출됩니다. <br/><br/><br/><br/>


# 🔔 useCallback

- `useMemo` 와 비슷하지만 값이 아닌 함수를 반환해주는 `Hook` 입니다.

- `useCallback` 의 사용법 예시는 아래와 같습니다.
    ```js
        const memoizedCallback = useCallback(() => {
            doSomething(의존성변수1, 의존성변수2);
        }, [의존성변수1, 의존성변수2])
    ```
    - 의존성 변수가 변했는지 여부에 따라서 변했다면 `doSomething` 함수를 실행하고 변하지 않았다면 이전에 `memoization` 된 함수를 반환합니다. <br/><br/><br/><br/>


# 🔔 useRef

- `Reference` 를 사용하기 위한 Hook 입니다. 

    - `Reference` 가 무엇인가요?
        - 일반적으로는 특정 변수가 어느 위치에 저장되어 있는지 주소를 말합니다. React 에서는 특정 컴포넌트에 접근할 수 잇는 객체를 의미합니다. 즉, useRef 는 Reference 객체를 반환해주는 것입니다.

- `useRef` 의 사용법 예시는 아래와 같습니다.
    ```js
        const refContainer = useRef();
    ```
    - 위의 예시만 봐서는 어떻게 사용하는지 이해가 안갈수도 있을 것 같은데 아래의 자세한 예시를 보면 이해가 갈것입니다. <br/><br/>

    ```js
        import React, { useRef, useState } from 'react';

        function Timer() {
        const [count, setCount] = useState(0);
        const intervalRef = useRef();

        const startTimer = () => {
            intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            }, 1000);
        };

        const stopTimer = () => {
            clearInterval(intervalRef.current);
        };

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            </div>
        );
        }
    ```
    - 바로 위의 예시코드는 시계 컴포넌트를 `useState` 와 `useRef` 를 통해 구현한 예시입니다. `setInterval` 함수를 사용하면 따로 멈춰주지 않는한 계속해서 실행합니다. 때문에 반드시 `clearInterval` 함수를 통해 멈춰주어야 하는데 `setInterval` 함수가 실행된 위치를 `intervalRef` 변수의 `current` 라는 곳에 저장해두고 나중에 멈출때 `clearInterval` 함수의 매개변수로 `intervalRef.current` 를 넘겨주는 것입니다. 

- `useRef` Hook 은 내부의 데이터가 변경되었을 때 별도로 알려주지 않습니다. 