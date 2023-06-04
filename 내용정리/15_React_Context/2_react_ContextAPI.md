# 🔔 Context API

- Context 를 사용하기 위해 createContext() 라는 함수를 통해 Context 를 생성합니다. 
    ```js
        const MyContext = React.createContext(기본값);
    ```
    - 기본값으로 아무것도 주지 않으면 아무 일도 안 일어납니다 <br/><br/>

- Context 를 생성한 후에는 Provider 를 통해 Context 를 사용할 수 있게 해줍니다.
    ```js
        <MyContext.Provider value={ /* some value */}>
            // 다른 컴포넌트를 부른다.
        </MyContext>
    ```
    - Provider 컴포넌트가 다시 렌더링될 때마다 모든 하위 Consumer 가 의도치않게 다시 렌더링 되기 때문에 주의해서 사용합니다. 
    - 그래서 value 를 바로 넣어주는 것이 아닌 useState 로 관리하는 값을 넣어주는 것입니다.<br/><br/>

- 이제 Consumer 로 사용하면 됩니다.
    ```js
        <MyContext.Consumer>
            {value => /* Context 값에 따라 컴포넌트들을 렌더링 */}
        </MyContext.Consumer>
    ```
    - Provider 에서 따로 넘겨준 value 가 없다면 Context 의 기본값을 사용하게 됩니다. <br/><br/>

- useContext 라는 훅을 통해서도 Context 를 사용할 수 있습니다.
    ```js
        function MyComponent(props) {
            const value = useContext(MyContext);

            return (
                // ...
            )
        }
    ```
