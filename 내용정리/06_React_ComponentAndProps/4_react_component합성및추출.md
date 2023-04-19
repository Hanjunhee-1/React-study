# 🔔 Component 합성

- 컴포넌트끼리 합치는 것을 의미합니다. 이전 예제들을 보면 컴포넌트의 children 으로 다른 컴포넌트가 존재하는 것을 볼 수 있었습니다. 이렇듯 사용자에게 보여줄 화면에 대한 요소들을 여러 컴포넌트로 나눠서 구현할 수 있습니다.

- 아래는 컴포넌트 합성의 예시입니다.
    ```js
        function Welcome(props) {
            return (
                <h1>Hello, {props.name}!</h1>
            )
        }

        function App(props) {
            return (
                <div>
                    <Welcome name="React" />
                    <Welcome name="NestJS" />
                    <Welcome name="Spring" />
                </div>
            )
        }
    ```
    - 예시를 보면 Welcome 이라는 컴포넌트를 App 컴포넌트 내부에서 사용하고 있습니다. 이것이 바로 컴포넌트 합성의 예시입니다. <br/><br/><br/><br/>


# 🔔 Component 추출

- 컴포넌트 합성의 반대 개념이라고 생각하면 됩니다. 복잡하게 구성되어 있는 컴포넌트를 각 요소 별로 나누어주는 것입니다. 컴포넌트 추출을 잘하면 재사용성이 높아지고 효율적인 코드를 작성할 수 있습니다.

- 아래는 컴포넌트 추출의 예시입니다. 
    ```js
        function Comment(props) {
            return (
                <div className="comment">
                    <div className="user-info">
                        <img className="avatar"
                            src={props.author.avatarUrl}
                            alt={props.author.name}
                        />
                        <div className="user-info-name">
                            {props.author.name}
                        </div>
                    </div>

                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            )
        }
    ```
    - Comment 컴포넌트가 조금 복잡한 구조로 이루어져있음을 알수 있습니다. 지금부터 하나하나씩 추출해보도록 하겠습니다.<br/><br/><br/>

    - 우선 Avatar 컴포넌트를 따로 추출해보겠습니다.
    ```js
        // Avatar Component
        function Avatar(props) {
            return (
                <img className="avatar"
                    src={props.user.avatarUrl}
                    alt={props.user.name}
                />
            )
        }
    ```
    <br/><br/><br/>



    - 그 다음으로 user-info 부분을 별도의 컴포넌트로 추출하겠습니다.
    ```js
        // UserInfo Component
        function UserInfo(props) {
            return (
                <div className="user-info">
                    <Avatar user={props.user}/>
                    <div className="user-info-name">
                        {props.user.name}
                    </div>
                </div>
            )
        }
    ```
    - UserInfo 컴포넌트로 따로 추출해내면서 생성해둔 Avatar 컴포넌트와 합성한 모습입니다. <br/><br/><br/>

    - 이제 이렇게 컴포넌트를 추출하여 따로 만들어두었던 것들을 다시 합성시키면 아래와 같이 처음보다 간단한 모습의 컴포넌트가 만들어집니다. 
    ```js
        function Comment(props) {
            return (
                <div className="comment">
                    <UserInfo user={props.author} />
                    <div className="comment-text">
                        {props.text}
                    </div>

                    <div className="comment-date">
                        {formatDate(props.date)}
                    </div>
                </div>
            )
        } 
    ```