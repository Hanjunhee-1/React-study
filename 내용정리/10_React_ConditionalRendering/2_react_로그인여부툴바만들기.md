# 🔔 툴바 컴포넌트 만들기

- 이번에는 로그인 여부에 따라 다른 문구를 보여주는 컴포넌트들을 작성해 볼 것입니다.
    ```js
        // Toolbar.jsx
        const styles = {
            wrapper: {
                padding: 16,
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px solid gray',
            },
            greeting: {
                marginRight: 8,
            },
        };

        export default function Toolbar(props) {
            const { isLoggedIn, onClickLogin, onClickLogout } = props;

            return (
                <div style={styles.wrapper}>
                    {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
                
                    {isLoggedIn ? (
                        <button onClick={onClickLogout}>로그아웃</button>
                    ) : (
                        <button onClick={onClickLogin}>로그인</button>
                    )}
                </div>
            );
        }
    ```
    - props 로 `isLoggedIn`, `onClickLogin`, `onClickLogout` 을 받아서 그에 따라 '환영합니다!' 문구와 '로그인' 혹은 '로그아웃' 버튼 중 어느 것을 보여줄지 결정합니다. 해당 부분이 바로 `Conditional Rendering` 입니다.<br/><br/>


    ```js
        // LandingPage.jsx
        import { useState } from "react";
        import Toolbar from "./Toolbar";

        export default function LandingPage(props) {
            const [isLoggedIn, setIsLoggedIn] = useState(false);

            const onClickLogin = () => {
                setIsLoggedIn(true);
            };

            const onClickLogout = () => {
                setIsLoggedIn(false);
            };

            return (
                <div>
                    <Toolbar 
                        isLoggedIn={isLoggedIn}
                        onClickLogin={onClickLogin}
                        onClickLogout={onClickLogout}
                    />
                    <div style={{padding: 16}}>React-study</div>
                </div>
            )
        }
    ```
    - `isLoggedIn` 을 `useState()` 로 관리하고 작성해둔 `Toolbar` 컴포넌트로 props 를 넘겨주고 있습니다.