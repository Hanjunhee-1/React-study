# 🔔 JSX 란

- `JSX` 는 `A syntax extension to JavaScript` 라는 뜻을 가지고 있습니다.
- 간단히 말해 `JavaScript` 의 문법을 확장시킨 것입니다.
    ```js
        const element = <h1>Hello, React!</h1>
    ```
    - 예시 코드를 보면 `JavaScript` 문법을 통해 `element` 변수를 생성해주었습니다. 그런데 `html` 코드를 변수에 대입해주고 있습니다. 이것은 `JSX` 이기에 사용가능한 문법입니다. <br/><br/><br/><br/>

# ❓ var, let, const 차이 알고 넘어가기

## 1. `var`
- `function-scope` 로 함수 레벨 스코프입니다. 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없습니다. `var` 는 다음과 같은 특징을 가집니다. 
    ```
        1. 변수 중복 선언 허용
        2. 변수 호이스팅 가능 (변수를 선언하지 않아도 참조가 가능한 것을 호이스팅이라고 합니다.)
    ```

## 2. `let`
- `const` 와 마찬가지로 블록 레벨 스코프입니다. 블록 레벨 스코프의 특징은 함수, if문, for문, while문, try-catch문 등의 블록 내에서 선언된 변수는 코드 블록 내부에서만 유효하며 코드 블록 외부에서는 참조할 수 없다는 것입니다. 이 외에도 다음과 같은 특징을 가집니다.
    ```
        1. 변수 중복 선언 금지
        2. 변수 호이스팅 불가능 
            --> var 의 경우 선언하지 않은 변수를 참조할 때 undefined 를 반환하지만 let 은 호이스팅이 불가능하므로 error 가 발생합니다. 
    ```

## 3. const
- `let` 과 거의 대부분 같습니다. 하지만 다른 것들이 존재하는데 아래와 같습니다.
    ```
        1. let 은 재할당이 가능하지만 const 는 재할당이 불가능합니다.
            --> 하지만 객체의 경우에는 객체 자체를 재할당 하는 것은 불가능하지만 객체가 가지는 property 를 추가/삭제 혹은 값을 변경하는 것은 가능합니다.
        2. let 은 선언만 하는 것이 가능하지만 const 는 선언과 동시에 할당이 이루어져야 합니다. 
    ```
<br/><br/><br/><br/>


# 🔔 JSX 의 역할

- `XML/HTML` 로 작성된 코드를 `JavaScript` 코드로 변환해주는 역할을 합니다. `React` 에서 `XML/HTML` 코드를 `JavaScript` 코드로 변환해주는 역할을 하는 것은 `createElement` 하는 함수입니다. 
    ```js
        // JSX 를 사용한 코드
        class Hello extends React.Component {
            render() {
                return <div>Hello {this.props.toWhat}</div>
            }
        }

        ReactDOM.render(
            <Hello toWhat="React">,
            document.getElementById('root')
        );
    ```
    ```js
        // JSX 를 사용하지 않은 코드
        class Hello extends React.Component {
            render() {
                return React.createElement('div', null, `Hello ${this.props.toWhat}`);
            }
        }

        ReactDOM.render(
            React.createElement(Hello, { toWhat: 'React' }, null),
            document.getElementById('root')
        );
    ```
    - 두 번째 예시처럼 `JSX` 를 사용하지 않고 `React` 의 `createElement` 를 통해 `XML/HTML` 코드를 `JavaScript` 로 바꿀 수 있습니다. <br/><br/><br/>

- 그럼 `createElement` 함수의 매개변수로는 무엇이 필요할까요?
- 다음과 같은 매개변수들이 선택적으로 필요합니다. 
    ```js
        React.createElement(
            type,
            [props],
            [...children]
        )
    ```
    1. `type`
        - `div`, `h1`, `span` 등과 같은 `html` 태그가 올수도 있고 다른 `ReactComponent` 가 올 수도 있습니다.

    2. `[props]`
        - `component` 구성 시 필요한 속성들이 들어갑니다. 

    3. `[...children]`
        - 현재 `element` 가 포함하고 있는 자식 `element` 가 들어갑니다. <br/><br/><br/>

- `React` 에서 꼭 `JSX` 를 사용해야 할까요?
    - 꼭 사용할 필요는 없지만 `createElement` 를 사용한 것보다 가독성이 좋기 때문에 `JSX` 를 잘 다룰 줄 아는 것이 `React` 프로젝트 작성 시 유용합니다. 