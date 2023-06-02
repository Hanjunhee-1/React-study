# 🔔 Card 컴포넌트 만들기

- Card 컴포넌트를 만들어보겠습니다. 

- 공통으로 사용될 Card 컴포넌트와 이에 대한 특별한 경우인 ProfileCard 컴포넌트를 만들어보겠습니다. 

- Card 컴포넌트
    ```js
    // Card.jsx
        export default function Card(props) {
            const { title, backgroundColor, children } = props;

            return (
                <div style={{
                    margin: 8,
                    padding: 8,
                    borderRadius: 8,
                    boxShadow: '0px 0px 4px gray',
                    backgroundColor: backgroundColor || 'white',
                }}>
                    {title && <h1>{title}</h1>}
                    {children}
                </div>
            )
        }
    ```
    - children 은 ProfileCard 컴포넌트에서 Card 컴포넌트로 감싼 html 태그 및 컴포넌트들이 담겨올 것입니다. <br/><br/><br/>

- ProfileCard 컴포넌트
    ```js
    // ProfileCard.jsx
        import Card from "./Card";

        export default function ProfileCard(props) {
            return (
                <Card title='My Introduction' backgroundColor='#4ea04e'>
                    <p>안녕하세요. Hanjunhee-1 입니다.</p>
                    <p>저는 React 를 공부하고 있습니다.</p>
                </Card>
            )
        }
    ```
    <br/><br/><br/>


- Containment 와 Specialization 을 적절히 사용하여 컴포넌트를 만들어보았습니다.