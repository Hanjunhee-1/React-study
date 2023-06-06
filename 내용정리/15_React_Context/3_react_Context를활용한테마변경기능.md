# 🔔 Context 를 활용한 테마변경 기능

- Context 를 통해 테마를 변경하는 기능을 가진 간단한 컴포넌트를 만들어보겠습니다.

- 우선 ThemeContext 를 만들어줍니다.
    ```js
        // ThemeContext.jsx
        import React from "react";

        const ThemeContext = React.createContext();
        ThemeContext.displayName = 'ThemeContext';

        export default ThemeContext;
    ```
    <br/><br/>

- 그리고 MainContent 라는 컴포넌트를 만들어줍니다.
    ```js
        // MainContent.jsx
        import { useContext } from "react";
        import ThemeContext from "./ThemeContext";

        export default function MainContent(props) {
            const { theme, toggleTheme } = useContext(ThemeContext);

            return (
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        padding: '1.5rem',
                        backgroundColor: theme === 'light' ? 'white' : 'black',
                        color: theme === 'light' ? 'black' : 'white',
                    }}
                >
                    <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>
                    <button onClick={toggleTheme}>테마 변경</button>
                </div>
            )
        }
    ```
    - useContext 훅은 Context.Consumer 와 같은 기능을 합니다. 
    - ThemeContext 로부터 받은 Context 를 theme 이라는 것에 저장해주고 toggleTheme 이라는 set 함수를 통해 테마를 변경해주기도 할 것입니다.
    <br/><br/>

- DarkOrLight 라는 컴포넌트를 만들어줍니다.
    ```js
        // DarkOrLight.jsx
        import { useCallback, useState } from "react";
        import ThemeContext from "./ThemeContext";
        import MainContent from "./MainContent";

        export default function DarkOrLight(props) {
            const [ theme, setTheme ] = useState('light');

            const toggleTheme = useCallback(() => {
                if (theme === 'light') {
                    setTheme('dark');
                } else if (theme === 'dark') {
                    setTheme('light');
                }
            }, [theme]);

            return (
                <ThemeContext.Provider value ={{ theme, toggleTheme }}>
                    <MainContent />
                </ThemeContext.Provider>
            )
        }
    ```
    - theme 은 useState 로 관리해줍니다. 
    
    - toggleTheme 함수는 useCallback 훅을 사용하여 theme 이 바뀔 때마다 각 값을 다르게 설정해줍니다.
    
    - 해당 컴포넌트에서는 ThemeContext 의 Provider 로 MainContent 컴포넌트를 감싸주고 value 에는 theme, toggleTheme 을 담아서 반환해줍니다. value 에서 theme 과 toggleTheme 을 담아서 MainContent 의 useContext 에서 사용할 수 있게 해줍니다. <br/><br/>