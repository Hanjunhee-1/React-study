# 🔔 Element 의 정의

- `React` 앱을 구성하는 가장 작은 블록들입니다.
    
    - `HTML` 을 배웠다면 `DOM Element` 가 떠오를 것입니다. 
    
    - `Element` 에 대한 정보는 Chrome 개발자 도구에서 볼 수 있습니다.

    - `Element` 는 실제로 화면에서 볼 수 있는 것들을 의미한다고 봐도 무방합니다.

    - `React Element` 와 `DOM Element` 의 차이는 무엇일까요?

        - `React` 에는 `Virtual DOM` 이라는 것이 존재했습니다. 이 `Virtual DOM` 은 `rendering` 했을 때 우리의 눈에 직접적으로 보이지 않고 `DOM Element` 의 형태로 보이게 되는데 이 때 `Virtual DOM` 을 `React Element` 라고 합니다. 
<br/><br/><br/><br/>

# 🔔 Element 의 생김새

- `React Element` 는 `JavaScript` 의 객체 형태로 존재합니다.
    ```js
        {
            type: 'button',
            props: {
                className: 'bg-green',
                children: {
                    type: 'b',
                    props: {
                        children: 'Hello, React!'
                    }
                } 
            }
        }
    ``` 
    <br/><br/>
    - `type` 은 `html` 태그를 의미합니다. 위의 `Element` 를 오로지 `html` 태그로만 작성하게 된다면 아래와 같을 것입니다. 
    ```html
        <button className="bg-green">
            <b>Hello, React!</b>
        </button>
    ```
    <br/><br/>
    - 하지만 `type` 에는 꼭 `html` 태그로 이미 존재하는 것들이 아닌 본인이 생성한 다른 컴포넌트들이 들어갈 수도 있습니다. 예시는 다음과 같습니다.
    ```js
        {
            type: Button,   // Button 은 임의로 생성한 컴포넌트입니다. 
            props: {
                color: 'green',
                children: 'Hello, React!'
            }
        }
    ```
<br/><br/><br/><br/>

# 🔔 Element 에 대한 실습해보기

- `Element` 가 어떻게 생겼는지 알았으니 실제 코드를 보며 확인해보겠습니다. `/02_실습_Element알아보기` 디렉토리로 이동하여 코드를 작성했습니다. 
    ```js
        // Button.jsx
        function Button(props) {
            return (
                <button className={`bg-${props.color}`}>
                    <b>
                        {props.children}
                    </b>
                </button>
            )
        }

        export default Button;
    ```
    ```js
        // ConfirmDialog.jsx
        import Button from "./Button"

        function ConfirmDialog(props) {
            return (
                <div>
                    <p>내용을 확인하셨으면 확인 버튼을 눌러주세요</p>
                    <Button color='green'>확인</Button>
                </div>
            )
        }

        export default ConfirmDialog
    ```
    <br/><br/><br/>


    - 위와 같이 작성했을 때 생성된 `ConfirmDialog` 의 `Element` 는 다음과 같을 것입니다.
    ```js
        // ConfirmDialog 의 Element 모습
        {
            type: 'div',
            props: {
                children: [
                    {
                        type: 'p',
                        props: {
                            children: '내용을 확인하셨으면 확인 버튼을 눌러주세요'
                        }
                    },
                    {
                        type: Button,
                        props: {
                            color: 'green',
                            children: '확인'
                        }
                    }
                ]
            }
        }
    ```
    <br/><br/><br/>
    - 하지만 결국 `Button` 컴포넌트의 `Element` 도 생성하여 합치게 되므로 최종 모습은 아래와 같을 것입니다.
    ```js
        // ConfirmDialog 의 Element 최종 모습
        {
            type: 'div',
            props: {
                children: [
                    {
                        type: 'p',
                        props: {
                            children: '내용을 확인하셨으면 확인 버튼을 눌러주세요'
                        }
                    },
                    {
                        type: 'button',
                        props: {
                            className: 'bg-green',
                            children: {
                                type: 'b',
                                props: {
                                    children: '확인'
                                }
                            }
                        }
                    }
                ]
            }
        }
    ```
    <br/><br/>

- `Element` 의 구조를 알아두는 것은 컴포넌트를 작성하고 이해하는데 굉장한 도움을 줍니다. 

- `type` 에서 자신이 작성한 컴포넌트를 가진다 하더라도 결국 렌더링 할 때는 해당 컴포넌트의 하위 `Element` 와 합치게 됩니다.

- `Element` 의 구조 중에서 `children` 은 해당 태그가 가지는 `string` 내용일 수도 있고 또 다른 `html` 태그 혹은 또 다른 컴포넌트일 수도 있습니다. 