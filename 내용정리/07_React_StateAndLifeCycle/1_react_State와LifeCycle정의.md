# 🔔 State 란

- `state` 는 상태를 뜻하는 단어입니다.

- React 에서의 `state` 는 `컴포넌트의 상태` 를 의미합니다. 정확히 말하면 컴포넌트에 존재하는 `데이터` 의 상태를 의미합니다.

- 컴포넌트 자체는 `immutable` 하지만 컴포넌트 내부의 `mutable` 한 데이터를 관리하는 것이 `state` 의 역할입니다. 

- `state` 사용시 주의할 점

    - 반드시 렌더링이나 데이터 흐름에 사용되는 값만 `state` 에 포함시켜야됩니다. 왜냐하면 `state` 가 바뀔 때마다 컴포넌트가 다시 렌더링되는데 불필요한 값을 `state` 로 지정하여 그 값이 바뀔때마다 렌더링하게 하면 성능상 문제가 생길 수 있기 때문입니다.

- `state` 가 어렵게 느껴질 수 있지만 사실은 그냥 `JavaScript 의 객체` 라고 생각하면 됩니다.

- `state` 를 사용하기 위해서는 `setState()` 라는 함수를 사용합니다. 

    - JavaScript 객체라면 직접 수정해줘도 되지 않을까?

        - 물론, 직접 수정할 수는 있습니다. 하지만 이 방법은 권장되지 않으며 반드시 `setState()` 함수를 통해 값을 관리해주는 것이 좋습니다. <br/><br/><br/><br/>


# 🔔 Life Cycle 이란

- `생명주기` 를 뜻합니다. 

- React 에서 생명주기란 컴포넌트의 생명주기를 의미합니다.

- `class 형 컴포넌트의 생명주기` 는 아래의 3단계로 나누어집니다.

    1. `Mounting`
        - `Mounting` 은 컴포넌트 `생성 단계` 입니다. `constructor()` 즉, 생성자를 통해 해당 컴포넌트가 생성된 시기를 의미합니다. `componentDidMount()` 라는 함수를 사용합니다.

    2. `Updating`
        - `Updating` 은 사람으로 치면 '인생' 단계입니다. 새로운 `props` 를 받아 컴포넌트가 렌더링되고 `state` 와 `setState` 를 통해 데이터들이 관리되며 `state` 에 의해 컴포넌트가 업데이트되어 다시 렌더링 되는 등의 작업이 이루어집니다. `componentDidUpdate()` 라는 함수를 사용합니다. 

    3. `Unmounting`
        - `Unmounting` 은 컴포넌트가 더 이상 쓸모가 없는 시기를 의미합니다. `componentWillUnmount()` 라는 함수를 사용합니다. <br/><br/><br/><br/>

# 🔔 State 사용해보기

- `state` 를 사용한 예제를 한번 보는 것이 좋을 것 같습니다. `/03_실습_시계만들기` 에서 `state` 에 대한 내용이 나온 적이 있으니 이번 내용과 같이 보는 것을 추천합니다. 

- 일단 예제를 보도록 하겠습니다.
    ```js
        class LikeButton extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    liked: false,
                }
            }

            // ...
        }
    ```
    - `state` 는 `React.Component` 를 상속받아 사용하는 `class 형 컴포넌트` 에서 사용합니다. 

    - `<LikeButton />` 을 통해 해당 컴포넌트를 렌더링하면 클래스의 생성자 부분에 props 를 전부 넘겨주게 됩니다. 

    - `this.state` 는 `state` 로 관리해야할 데이터들을 `object` 타입으로 저장하는 변수입니다. 

    - 만약 `좋아요` 버튼을 눌렀을 때 `state` 에 존재하는 `liked` 를 `true` 로 바꾸고 싶다면 `onClick()` 등과 같은 액션이 이루어졌을 때 `setState({liked: true})` 이런 식으로 해결하면 됩니다. 
        
        - 이렇게 `setState()` 함수를 이용하면 되기 때문에 `state` 를 따로 관리하고 따로 값을 업데이트 시켜주는 등의 작업은 권장되지 않는 것입니다. <br/><br/><br/><br/>


# 👁‍🗨 State 와 Life Cycle 에 대해 알아두면 좋은 것들

- 원래 state 와 Life Cycle 에 대한 개념은 class 형 컴포넌트를 작성할 때 사용하던 개념입니다.

- Life Cycle 은 위의 내용말고도 또 다른 내용들이 추가로 있습니다. 원래는 class 형 컴포넌트에 주로 쓰이던 개념인데 현재는 function 형 컴포넌트를 주로 사용하게 되면서 state 와 같이 알아두어야 할것들이 많이 있습니다.