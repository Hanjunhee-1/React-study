# 🔔 Composition

- 영어 단어에서도 그 의미를 알 수 있듯이 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것을 의미합니다.

- 컴포넌트를 합치는 방식은 여러 방식이 있는데 다음과 같습니다.

    1. Containment

        - 하위 컴포넌트를 포함하는 형태의 합성 방법입니다. Sidebar 혹은 Dialog 같은 box 형태의 컴포넌트는 자신의 하위 컴포넌트가 무엇인지 미리 알 수 없습니다. 때문에 Containment 방식으로 Composition 을 구현하기 위해서는 props 의 children 을 사용하면 됩니다. `JSX` 문법이 기억나지 않는다면 `04_React_JSX` 를 다시 공부하는 것을 추천합니다.
        ```js
            function FancyBorder(props) {
                return (
                    <div className={'FancyBorder-' + props.color}>
                        {props.children}
                    </div>
                )
            }
        ```

        - 위와 같은 방식으로 하면 하위 컴포넌트를 props.children 부분에서 모두 렌더링할 수 있게 됩니다.
        - 예시로 만든 FancyBorder 컴포넌트는 아래의 예시들에서 계속해서 사용될 예정입니다. <br/><br/><br/>

    2.  Specialization
        - `WelcomDialog 는 Dialog 의 특별한 케이스!`
        - Dialog 는 범용적인 것인데 그 중에서도 방문자를 환영하는 WelcomDialog 는 특별한 것입니다.
        - 이렇게 범용적인 개념을 구별이 되게 구체화하는 것을 Specialization 이라고 합니다.

        - 객체지향언어에서는 상속(Inheritance) 을 사용하여 Specialization 을 구현할 수 있습니다.
        - 하지만 React 에서는 Composition 을 통해 Specialization 을 구현해야 합니다.
        ```js
            function Dialog(props) {
                return (
                    <FancyBorder color='blue'>
                        <h1 className='Dialog-title'>
                            {props.title}
                        </h1>
                        <p className='Dialog-message'>
                            {props.message}
                        </p>
                    </FancyBorder>
                )
            }

            function WelcomDialog(props) {
                return (
                    <Dialog
                        title='어서오세요'
                        message='방문하신 것을 환영합니다.'
                    />
                )
            }
        ```

        - 예시를 보면 Dialog 함수의 title 과 message 는 어떤 내용을 넣느냐에 따라 달라질 수 있습니다.
        - 그 중에서 WelcomeDialog 를 보면 Dialog 컴포넌트를 사용함으로써 WelcomeDialog 컴포넌트로서의 기능을 할 수 있게 됩니다.
        - 마치 객체지향프로그래밍에서의 상속처럼 React 에서는 범용적인 컴포넌트가 부모 클래스의 역할을 하고 범용 컴포넌트를 가져다가 쓰면서 따로 기능을 추가하는 것이 Specialiaztion 방법입니다. <br/><br/><br/>

    3.  Containment 와 Specialization
        - 위의 2가지 방법을 동시에 사용하는 예시를 보도록 하겠습니다.
        ```js
            function Dialog(props) {
                return (
                    <FancyBorder color='blue'>
                        <h1 className='Dialog-title'>
                            {props.title}
                        </h1>
                        <p className='Dialog-message'>
                            {props.message}
                        </p>
                    </FancyBorder>
                )
            }

            function SignUpDialog(props) {
                const [nickname, setNickname] = useState('');

                const handleChange = (event) => {
                    setNickname(event.target.value);
                }

                const handleSignUp = () => {
                    alert(`환영합니다, ${nickname}님`);
                }

                return (
                    <Dialog title='다 같이 React 공부하는 사이트!' message='닉네임을 입력해주세요!'>
                        <input value={nickname} onChange={handleChange} />
                        <button onClick={handleSignUp}>가입하기</button>
                    </Dialog>
                )
            }
        ```

        - SignUpDialog 컴포넌트에서 Dialog 컴포넌트를 사용하고 있습니다. Specialization 방식이 사용된 것입니다.
        - Dialog 컴포넌트에서는 FancyBorder 컴포넌트를 사용하고 있습니다. Containment 방식이 사용된 것입니다.
        - 이처럼 Composition 방법을 사용해서 다양한 컴포넌트를 만들 수 있습니다. <br/><br/><br/><br/>


# 🔔 Inheritance

- Composition 의 개념과는 반대되는 개념입니다.

- 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것입니다.

- 하지만 공식문서, Meta 를 보면 Inheritance 를 통해 컴포넌트를 만든 좋은 예시가 없고 Composition 을 통한 사례만 있습니다.

- 이를 통해 알 수 있는 것은 `복잡한 컴포넌트를 분할해서 여러 개의 컴포넌트 만들기`, `만든 컴포넌트들을 블록처럼 조립해서 새로운 컴포넌트를 만들기` 이렇게 2가지가 React 컴포넌트 개발에 있어서 중요하게 생각해야 될 것이라는 것을 알 수 있습니다. 