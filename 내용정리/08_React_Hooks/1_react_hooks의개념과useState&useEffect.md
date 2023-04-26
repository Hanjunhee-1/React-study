# 🔔 Hook

- class 형 컴포넌트에서는 생성자에서 state 를 정의하고 setState 함수를 통해 state 를 업데이트할 수 있으며 LifeCycle 과 관련된 methods 를 사용할 수 있습니다.

- 하지만 function 형 컴포넌트에서는 state 를 그런 방식으로 사용할 수 없고 뿐만 아니라 LifeCycle 에 따른 기능을 구현하는 것이 불가능합니다.

- 그래서 function 형 컴포넌트에서도 class 형 컴포넌트처럼 기능을 구현할 수 있도록 해주는 것이 바로 `Hook` 입니다. <br/><br/><br/><br/>


# 🔔 대표적인 Hook

- 아래와 같은 대표적인 `Hook` 들이 존재합니다.

    1. `useState()`

        - 가장 많이 사용되는 `Hook` 입니다. 이름에서부터 알 수 있듯이 `state` 를 사용하기 위한 `Hook` 입니다. 사용법 예시는 다음과 같습니다.
            ```js
                const [ 변수명, set함수명 ] = useState(변수의 초기값);
            ```

        - `변수` 는 state 로 관리해주어야할 변수를 의미하고 `set함수명` 은 setState 를 사용했던 것처럼 해당 state 를 관리해줄 함수의 이름을 의미합니다. 

        - `useState` 의 매개변수로는 `state 가 가져야할 초기값` 이 들어갑니다. 

        - 사용자가 어떤 버튼을 몇번 클릭했는지 관리해야할때 아래와 같이 `useState` 를 통해 클릭 횟수를 관리해줄 수 있습니다.
            ```js
                const [ count, setCount ] = useState(0);
            ```
            <br/><br/>

    2. useEffect()

        - `useEffect` 는 `side effect` 를 수행하기 위한 Hook 입니다. 보통 side effect 는 `부정적인 의미` 로 많이 쓰이지만 이때의 side effect 는 `효과 혹은 영향` 을 의미합니다. class 형 컴포넌트에서 제공하던 `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()` 를 통합적으로 제공하는 `Hook` 입니다. 사용법 예시는 다음과 같습니다. 
            ```js
                useEffect(함수, 의존성 배열);
            ```

        - 의존성 배열은 말 그대로 effect 가 의존하고 있는 배열을 뜻합니다. 의존성 배열 안의 변수 중 어느 하나라도 변경이 되었다면 함수가 실행됩니다. 

        - useEffect 는 치명적인 단점이 존재하는데 바로 빈번한 렌더링으로 인한 성능 저하가 생길 수 있다는 것입니다. 하지만 의존성 배열을 잘 넘겨주기만 한다면 이 문제는 해결할 수 있습니다. 가령, 컴포넌트가 Mount, Unmount 되었을 때에 한번씩만 실행되게 하고 싶으면 아래와 같이 사용할 수 있습니다.
            ```js
                useEffect(함수, []);
            ```

        - 위의 예시처럼 빈 배열을 넘겨주게되면 Mount, Unmount 시에만 컴포넌트가 렌더링됩니다. 

        - useEffect 는 조금 어려운 감이 있어서 주석과 함께 동작 내용을 작성해보면 아래와 같습니다. 
            ```js
                useEffect(() => {
                    /**
                        컴포넌트가 Mount 된 이후,
                        의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행.
                        의존성 배열에 빈 배열을 넣으면 Mount 와 Unmount 시에 단 한 번씩만 실행.
                        의존성 배열을 생락한다면 컴포넌트가 업데이트 될때마다 실행.
                    */
                    return () => {
                        // 컴포넌트가 Unmount 되기 전에 실행.
                    }
                }, [의존성 변수1, 의존성 변수2, ...]);
            ```