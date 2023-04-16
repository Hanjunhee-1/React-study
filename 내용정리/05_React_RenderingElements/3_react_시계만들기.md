# 🔔 시계 만들기 실습

- 지금까지 배운 것들을 토대로 시계 컴포넌트를 만드는 실습을 해볼 것입니다. 

- 우선 아래와 같이 `Clock.jsx` 라는 파일을 작성해주었습니다. 
    ```js
        // Clock.jsx
        function Clock(props) {
            return (
                <div>
                    <h1>Hello, React!</h1>
                    <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
                </div>
            );
        }

        export default Clock;
    ```
    - html 태그 안에서 `{}` 중괄호로 둘러쌓인 부분은 JavaScript 문법을 사용하는 부분입니다. <br/><br/><br/>


- 그리고 `index.js` 에 아래의 내용을 추가해주었습니다.
    ```js
        // index.js
        import Clock from './03_실습_시계만들기/Clock';
        ...

        setInterval(() => {
            root.render(
                <React.StrictMode>
                    <Clock/>
                </React.StrictMode>  )
        }, 1000);
    ```
    - 여기서 사용한 `setInterval()` 이라는 함수는 웹 페이지의 특정 부분을 주기적으로 업데이트 해줘야 할 때 사용하는 함수입니다.
    
    - 첫번째 인자로는 실행할 코드를 받고 두번째 인자로 `ms` 단위의 시간을 입력받습니다. 간단한 코드 해석을 해보자면 1초마다 렌더링을 해주는 것입니다. 

    - 왜 1초마다 렌더링 해줘야 할까요?

        - 현재 `Clock` 컴포넌트에서 시간을 보여주고 있기는 하지만 그 함수는 말 그대로 딱 한번만 시간을 보여줍니다. 즉, 시간은 계속 흐르고 있음에도 `Element` 가 렌더링 된 그 순간의 시간만을 보여주게 되는 것입니다. 때문에 `setInterval()` 함수를 통해 1초마다 해당 컴포넌트를 렌더링하게끔 해줘야 정상적인 시계의 기능을 할 수 있을 것입니다. <br/><br/><br/>

- 이렇게 해서 시계를 만들어보았는데 문제점이 있습니다.

    - React 프로젝트를 시작했을 때 탭이 2개가 뜹니다... 해당 문제는 아래의 부분에서 자세히 다뤄보며 수정해보겠습니다 <br/><br/><br/><br/><br/>


# 🔔 시계 만들기 실습 - 고급(?)

- 위의 문제는 오로지 `Clock` 컴포넌트를 위해 `root` 전체를 매번 새로 렌더링한다는 것입니다. `Clock` 컴포넌트 하나만 있다면 상관이 없지만 다른 컴포넌트도 추가가 된다면 성능상의 문제가 생기게 됩니다. 

- 해결 방법은 Clock 컴포넌트에서 알아서 현재 시간에 대한 `상태관리` 를 하게 하는 것입니다. 

- 일단 아래와 같이 Clock.jsx 와 index.js 를 수정해주었습니다.
    ```js
        // index.js
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <Library />
                <ConfirmDialog/>
                <Clock/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    ```
    - index.js 에서 기존에 사용하던 setInterval() 부분은 주석처리해주었습니다. <br/><br/>

    ```js
        // Clock.jsx
        import React from "react";
        class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = { date: new Date() };
            }

            componentDidMount() {
                this.timerId = setInterval(() => this.setTime(), 1000)
            }

            componentWillUnmount() {
                clearInterval(this.timerId);
            }

            setTime() {
                this.setState({
                    date: new Date()
                });
            }

            render() {
                return (
                    <div>
                        <h1>Hello, React!</h1>
                        <h2>현재 시간: {this.state.date.toLocaleTimeString()}</h2>
                    </div>
                )
            }
        }

        export default Clock;
    ```
    <br/><br/><br/><br/>

- 해당 부분은 `state` 와 `life-cycle` 에 대한 내용으로 아직은 좀 어려울 수 있습니다. 뿐만 아니라 `함수형 컴포넌트` 로 작성한 것이 아닌 `클래스형 컴포넌트` 로 작성한 것이어서 이해하기 더 어려울 수도 있습니다. 

- 간단히 설명하자면 컴포넌트는 `life-cycle` 이 존재하고 그것을 관리하기 위한 것이 `state` 즉, `상태관리` 라는 것을 알고 있으면 될 것 같습니다. 

참고링크: 
https://ko.reactjs.org/docs/state-and-lifecycle.html