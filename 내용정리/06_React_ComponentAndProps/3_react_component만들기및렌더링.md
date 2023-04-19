# 🔔 Component 작성하기

- `Component` 는 크게 2가지 종류로 나뉩니다.

    - `함수형 컴포넌트`
        ```js
            function Hello(props) {
                return (
                    <h1>안녕, {props.name}</h1>
                );
            }
        ```
        - 최근에 가장 많이 사용하는 컴포넌트입니다. Hook 이라는 개념이 등장하는데 이것은 나중에 배울 것입니다. <br/><br/>

    - `클래스형 컴포넌트`
        ```js
            class Hello extends React.Component {
                render() {
                    return (
                        <h1>안녕, {props.name}</h1>
                    )
                }
            }
        ```
        - `React` 초기 버전에 주로 사용했지만 사용하기에 불편하다는 의견들이 많아지면서 `함수형 컴포넌트` 를 주로 사용하기 시작했습니다. <br/><br/><br/><br/>

# 🔔 Component 네이밍 규칙

- `Component` 의 이름은 반드시 `대문자` 로 시작해야 합니다.

    - 왜 꼭 `대문자` 로 시작해야할까요?

        - 예제로 살펴본 컴포넌트들을 어떻게 사용하여 렌더링했는지를 생각해보면 알수 있습니다. 만약에 `Button` 이라는 이름의 컴포넌트를 만들어서 사용한다고 생각해봅시다. 사용할 때는 마치 원래 있던 `html` 태그를 사용하는 것처럼 `<Button />` 이런 식으로 사용합니다. 만약, 컴포넌트의 이름이 `Button` 이 아닌 `button` 이었다면 `<button />` 이런 식으로 사용해야 하는데 이는 이미 존재하는 `html` 태그를 의미하고 `React` 에서는 작성해둔 컴포넌트가 아닌 기존에 존재하는 `html` 태그로 인식해버립니다. 때문에 이와 다르다는 것을 알려주기 위해 컴포넌트의 이름은 반드시 대문자로 시작해야 합니다.  

        - 이것은 추가로 네이밍 컨벤션들에 대해 공부를 하다보니 알게된 것인데 `카멜 케이스`, `파스칼 케이스` 등과 같은 컨벤션을 지키기 위해서 컴포넌트의 이름을 반드시 대문자로 시작하는 것이 아닌가라는 생각이 들게 되었습니다. <br/><br/><br/><br/>


# 🔔 Component 렌더링

- 렌더링 부분은 이전 예제들에서도 꾸준히 다뤄왔지만 한 번더 정리해봅니다.
    ```js
        function Hello(props) {
            return (
                <h1>안녕, {props.name}</h1>
            )
        }

        const element = <Hello name="React" />;
        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        root.render(
            element
        )
    ```
    - 위와 같이 렌더링을 해주었었습니다.

    - 보통은 이렇게 한 곳에 모아두지 않고 컴포넌트 별로 따로 작성한 뒤에 `root` 가 존재하는 곳에서 `import` 하여 사용하게 됩니다. 