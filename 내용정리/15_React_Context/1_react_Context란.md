# 🔔 Context

- 기존 컴포넌트의 경우 props 를 받아서 넘겨주는 식으로 사용했습니다. 해당 방식의 문제점은 상위 컴포넌트에서 사용하는 props 를 하위 컴포넌트에서도 사용해야 될 때입니다.

- props 로 일일이 데이터를 전달해줘야 하는데 비효율적인 방식입니다. 이럴 때 사용하는게 Context 입니다. Context 를 사용하면 데이터를 필요로 하는 컴포넌트에 바로 데이터를 줄 수 있습니다. <br/><br/><br/>


# 🔔 Context 를 사용하면 좋을 때

1. 여러 개의 컴포넌트들이 접근해야 하는 데이터가 존재할 경우
    ```js
        function App(props) {
            return <Toolbar theme='dark' />
        }

        function Toolbar(props) {
            return (
                <div>
                    <ThemedButton theme={props.theme} />
                </div>
            )
        }

        function ThemedButton(props) {
            return <Button theme={props.theme} />
        }
    ``` 
    - 위의 예시를 보면 props 를 일일이 하위 컴포넌트로 전달해주고 있기 때문에 굉장히 비효율적입니다. 이럴 때는 아래의 코드와 같이 Context 를 활용한 코드로 리팩토링해주어야 합니다. <br/><br/>

    ```js
        const ThemeContext = React.createContext('light');

        function App(props) {
            return (
                <ThemeContext.Provider value='dark'>
                    <Toolbar />
                </ThemeContext>
            )
        }

        function Toolbar(props) {
            return (
                <div>
                    <ThemedButton />
                </div>
            )
        }

        function ThemedButton(props) {
            return (
                <ThemeContext.Consumer>
                    {value => <Button theme={value} />}
                </ThemeContext.Consumer>
            )
        }
    ```
    - 위의 예시의 Context 는 테마를 위한 Context 이고 기본값은 light 입니다.
    - App 컴포넌트에 Provider 가 있는데 이를 통해 컴포넌트에게 현재 테마에 대한 데이터를 전달할 수 있게 됩니다. 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 따라 관계없이 데이터를 읽을 수 있습니다.
    - Consumer 는 Provider 를 찾아서 해당하는 value 를 사용할 수 있습니다. 만약 Provider 가 없을 경우에는 기본값인 light 를 사용하게 됩니다. <br/><br/><br/>

# 🔔 Context 를 사용하기 전에 고려할 점

- 무작정 Context 를 사용하는 것이 좋은 것은 아닙니다. 오히려 컴포넌트와 Context 가 연동되면서 재사용성이 떨어지기 때문에 재사용성을 고려해야 할 때는 기존에 사용하던 props 를 통해 데이터를 전달해주는 방식이 좋습니다. 