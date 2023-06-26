# 🔔 styled-components

- 컴포넌트에 CSS 를 입혀서 스타일링을 해주는 오픈소스 라이브러리입니다.

- 사용을 위해서는 라이브러리를 설치해주어야 합니다. 
    ```bash
        npm install styled-components
    ```
    <br/><br/><br/><br/>

# 🔔 styled-components 기본 사용법

- styled-components 는 tagged template literal 을 사용하여 구성요소의 스타일을 지정합니다.

- literal 이란?
    ```javascript
        let number = 20
    ```
    - 위의 코드에서 20 이라는 숫자가 literal 에 해당합니다. 고정된 값을 의미하는 것이 literal 입니다. <br/><br/>

- template literal 이란?

    - 말 그대로 template 을 literal 로 사용하는 javascript 문법입니다.
    - 백틱(`) 이란 것을 통해 template literal 을 사용할 수 있습니다.
        ```javascript
            var people = [
                {
                    name: "Steve",
                    status: "Online"
                }
            ]

            const output = `현재 상태가 ${people[0].status} 인 사람은 ${people[0].name} 입니다.`;
            console.log(output);

            const name = 'Steve';
            const region = 'New York';

            function myTagFunction(strings, nameExp, regionExp) {
                let str0 = strings[0];  // '제 이름은 '
                let str1 = strings[1];  // '이고, 사는 곳은 '
                let str2 = strings[2];  // '입니다.'

                return `${str0}${nameExp}${str1}${regionExp}${str2}`;
            }

            const output = myTagFunction`제 이름은 ${name}이고, 사는 곳은 ${region}입니다.`;

            console.log(output) // 제 이름은 Steve이고, 사는 곳은 New York입니다.
        ```
        <br/><br/><br/><br/>

# 🔔 styled-components 사용 예시

- 아래와 같이 사용할 수 있습니다.
    ```javascript
        import styled from 'styled-components';

        const Wrapper = styled.div`
            padding: 1em;
            background: gray;
        `;
    ```
    <br/><br/><br/><br/>

# 🔔 styled-components 의 props 사용하기

- 어떤 조건에 따라 style 을 다르게 하고 싶을 때의 예시입니다. 
    ```javascript
        import styled from 'styled-components';

        const Button = styled.button`
            color: ${props => props.dark ? 'white' : 'black'};
            background: ${props => props.dark ? 'black' : 'white'};
            border: 1px solid black;
        `;

        export default function Sample(props) {
            return (
                <div>
                    <Button>Normal</Button>
                    <Button dark>Dark</Button>
                </div>
            )
        }
    ```
    - 위의 코드는 Sample 이라는 컴포넌트에 Button 컴포넌트를 렌더링하는 예시입니다.
    - Button 에서는 props 로 dark 라는 것을 받고 있습니다. dark 에 어떤 값이 있는지는 중요하지 않고 존재여부만 따져서 배경색과 글자색을 대비시켜주는 스타일 코드를 갖고있습니다.
    <br/><br/><br/><br/>

# 🔔 styled-components 의 스타일 확장하기

- 아래의 예시코드를 통해 확인할 수 있습니다.
    ```javascript
        import styled from 'styled-components';

        const Button = styled.button`
            color: gray;
            border: 2px solid palevioletred;
        `;

        const RoundedButton = styled(Button)`
            border-radius: 16px;
        `;

        export default function Sample(props) {
            return (
                <div>
                    <Button>Normal</Button>
                    <RoundedButton>Rounded</RoundedButton>
                </div>
            )
        }
    ```
    - 이미 존재하는 Button 이라는 styled-components 를 매개변수로 받아서 해당 컴포넌트의 스타일을 변경하여 RoundedButton 이라는 컴포넌트를 만들었습니다.