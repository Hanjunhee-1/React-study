# 🔔 Hook 의 규칙

- `Hook` 은 무조건 최상위 레벨에서만 호출해야 합니다. 여기서 최상위 레벨은 컴포넌트의 위치를 말하며 컴포터넌트가 가장 상위의 컴포넌트여야 한다는 것입니다. 

- `Hook` 은 컴포넌트가 렌더링될때마다 매번 같은 순서로 호출되어야 합니다. 다음은 `Hook` 의 잘못된 사용예시입니다.
    ```js
        function Example(props) {
            const [name, setName] = useState('John');

            if (name !== '') {
                useEffect(() => {
                    //...
                })
            }
        }
    ```
    - 위 예시의 경우 조건문에 따라 `Hook` 을 호출하게 되기 때문에 매번 같은 순서로 `Hook` 이 호출되지 않습니다. <br/><br/>

- `Hook` 은 `React 함수 컴포넌트` 에서만 호출이 되어야 합니다.

- 위와 같은 Hook 에 대한 규칙을 검사해주는 플러그인을 사용하는 것도 좋은 방법입니다. (`eslint-plugin-react-hooks`) <br/><br/><br/><br/>


# 🔔 Custom Hook 만들기 

- 아래의 예제 코드를 보겠습니다.
    ```js
        function UserStatus(props) {
            const [isOnline, setIsOnline] = useState(null);

            useEffect(() => {
                function handleStatusChange(status) {
                    setIsOnline(status.isOnline);
                }

                ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
                return () => {
                    ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                }
            })
            
            if (isOnline === null) {
                return '대기중...';
            }

            return isOnline ? '온라인' : '오프라인';
        }
    ```
    ```js
        function UserListItem(props) {
            const [isOnline, setIsOnline] = useState(null);

            useEffect(() => {
                function handleStatusChange(status) {
                    setIsOnline(status.isOnline);
                }

                ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
                return () => {
                    ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
                }
            })

            return (
                <li style={{ color: isOnline ? 'green' : 'black' }}>
                    {props.user.name}
                </li>
            )
        }
    ```
    - `UserStatus` 는 사용자가 온라인인지 오프라인인지 아니면 대기중인지를 반환해주는 함수입니다.
    
    - `UserListItem` 은 해당 사용자의 이름을 온/오프 상태에 따라 색깔을 다르게 보여주는 컴포넌트입니다. 

    - 겹치는 부분이 존재하는 것을 알 수 있는데 이럴 때 `Custom Hook` 을 만들어서 사용하면 됩니다. <br/><br/><br/>

- `Custom Hook` 을 만들때는 `use` 를 꼭 앞에 붙여서 단순한 함수가 아닌 `Hook` 을 커스텀한 함수라는 것을 알려줍니다.
    ```js
        function useUserStatus(userId) {
            const [isOnline, setIsOnline] = useState(null);

            useEffect(() => {
                function handleStatusChange(status) {
                    setIsOnline(status.isOnline);
                }

                ServerAPI.subscribeUserStatus(userId, handleStatusChange);
                return () => {
                    ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
                }
            })
        } 
    ``` 
    <br/><br/>


- `Custom Hook` 을 사용해봅니다.
    ```js
        function UserStatus(props) {
            const isOnline = useUserStatus(props.user.id);

            if (isOnline === null) {
                return '대기중';
            }
            return isOnline ? '온라인' : '오프라인';
        }

        function UserListItem(props) {
            const isOnline = useUserStatus(props.user.id);

            return (
                <li style={{ color: isOnline ? 'green' : 'black' }}>
                    {props.user.name}
                </li>
            )
        }
    ```
    - `Custom Hook` 덕분에 코드가 훨씬 간결해지고 가독성이 높아진 것을 볼수 있습니다. <br/><br/><br/>

    
- 각 `Custom Hook` 은 독립적이기 때문에 여러 번 호출해도 되고 기존 함수 컴포넌트에서 따로 `Hook` 을 사용하고 있었더라도 `Custom Hook` 을 몇번이든 사용할 수 있습니다. 