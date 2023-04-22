# 🔔 State 와 Life Cycle 자세히 알아보기


- `/06_실습_State사용해보기` 에서 작성한 코드들입니다.
    ```js
        // Notification.jsx
        import React from "react";

        const styles = {
            wrapper: {
                margin: 8,
                padding: 8,
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid gray',
                borderRadius: 16,
            },
            messageText: {
                color: 'black',
                fontSize: 16,
            },
        };

        export default class Notification extends React.Component {
            constructor(props) {
                super(props);

                this.state = {};
            }

            componentDidMount() {
                console.log(`${this.props.id} Mount 되었습니다.`);
            }
            
            componentDidUpdate() {
                console.log(`${this.props.id} Update 되었습니다.`);
            }

            componentWillUnmount() {
                console.log(`${this.props.id} Unmount 되었습니다.`);
            }

            render() {
                return (
                    <div style={styles.wrapper}>
                        <span style={styles.messageText}>{this.props.message}</span>
                    </div>
                )
            }
        }
    ```
    - `class 형 컴포넌트` 로 작성해보았습니다. Life cycle 에 대한 개념도 익히기 위해 `Mount`, `Update`, `Unmount` 에 관련된 함수들도 작성해보았습니다. <br/><br/><br/>


    ```js
        // NotificationList.jsx
        import React from "react";
        import Notification from "./Notification";

        const reservedNotifications = [
            {
                id: 1,
                message: '안녕하세요. 오늘 일정을 알려드립니다.'
            },
            {
                id: 2,
                message: 'study 시간입니다.'
            },
            {
                id: 3,
                message: '10분 후 회의가 시작됩니다.'
            },
        ];

        export default class NotificationList extends React.Component {
            constructor(props) {
                super(props);

                this.state = { notifications: [] };
            }

            componentDidMount() {
                const { notifications } = this.state;
                let timer = setInterval(() => {
                    if (notifications.length < reservedNotifications.length) {
                        const index = notifications.length;
                        notifications.push(reservedNotifications[index]);
                        this.setState({
                            notifications,
                        });
                    } else {
                        this.setState({
                            notifications: []
                        });
                        clearInterval(timer);
                    }
                }, 3000);
            }

            render() {
                return (
                    <div>
                        {
                            this.state.notifications.map((notification) => {
                                return (
                                    <Notification key={notification.id} id={notification.id} message={notification.message} />
                                )
                            })
                        }
                    </div>
                )
            }
        }
    ```

    - 코드를 간단하게 살펴보자면 이렇습니다.

        - `state` 에 담긴 `notifications list` 를 가져오고 `setInterval()` 함수를 실행합니다.
        
        - 만약 현재 `notifications` 의 길이가 `reservedNotifications` 의 길이보다 작다면 if 문 내부를 실행합니다.

            - `notifications` 의 길이를 `index` 에 저장합니다. (만약 현재 `notifications` 에 아무것도 없다면 index 는 0이 되고 `reservedNotifications[0]` 을 가리키게 됩니다.)
            
            - `state` 로 관리되는 `notifications` 리스트에 `reservedNotifications[index]` 를 `push` 해줍니다. (`reservedNotifications` 에 존재하는 알림들을 복사하는 코드입니다.)


        - `notifications` 의 길이와 `reservedNotifications` 의 길이가 같다면 else 문 내부를 실행합니다.
        
            - `setState()` 함수로 `notifications` 의 내부를 싹 비워주고 `clearInterval()` 함수의 매개변수로 `timer` 를 넘겨서 해당 `interval` 을 끝냅니다. 

        - 이러한 일련의 과정들이 `3000ms` 즉, `3초` 마다 실행됩니다. 

        - `render()` 부분에서는 `state` 의 `notifications` 리스트를 `map()` 함수로 접근하여 안에 담겨있는 값을 하나하나씩 렌더링해줍니다. 

    - `key` 와 `id` 라는 `props` 는 넘겨주지 않으면 경고문이 뜨는데 해당 부분은 chrome 개발자 도구에서 확인할 수 있습니다. 자세한 내용은 후에 다루도록 하겠습니다. <br/><br/><br/><br/>


# 🔔 React 관련 chrome 도구

- `React Developer Tools` 라는 것이 있습니다. chrome 웹 스토어에서 다운받아 React 개발 시 유용하게 사용할 수 있습니다. 