# 🔔 Hook 활용하기

- Custom Hook 과 useState, useEffect 를 활용하여 컴포넌트를 만들어보겠습니다. 

- 만들 컴포넌트의 내용은 아래와 같습니다. 
    ```txt
        '입장' 이라는 버튼과 '퇴장' 이라는 버튼이 존재하고 처음 수용 인원은 0명에서 시작합니다.
        입장 버튼을 클릭할 시에 수용 인원이 1씩 증가합니다.
        퇴장 버튼을 클릭할 시에 수용 인원이 1씩 감소합니다.
        최대 수용 인원은 10명이며 최소 수용 인원은 0명입니다.
        현재 수용 인원이 최대 수용 인원이라면 입장 버튼을 비활성화하고
        현재 수용 인원이 최소 수용 인원이라면 퇴장 버튼을 비활성화합니다. 
    ```

- 수용 인원의 수, 수용 인원에 대한 상태를 관리하려면 useState 를 사용해야 하고 버튼 비활성화 관련된 것을 구현하기 위해서는 useEffect 를 사용해야 합니다. Custom Hook 을 통해 수용 인원 수에 대한 상태를 관리할 수도 있습니다.

- 아래와 같이 코드를 작성해주었습니다.
    ```js
        // useCounter.jsx
        import { useState } from "react";

        export default function useCounter(initValue) {
            const [count, setCount] = useState(initValue);


            const increaseCount = () => {
                setCount((count) => count + 1);
            }
            const decreaseCount = () => {
                if (count >= 1) {
                    setCount((count) => count - 1);
                } else {
                    console.log("퇴장할 인원이 없습니다.");
                }
            }

            return [count, increaseCount, decreaseCount];
        }
    ```
    - count 의 초기값을 매개변수로 받아서 정해줍니다.
    - 현재 Custom Hook 에서는 count 변수와 count 관련 함수들을 리스트 형태로 반환해줍니다. <br/><br/>

- 그 다음으로는 실제 수용 인원에 대한 정보를 나타내줄 컴포넌트를 작성해줍니다. 
    ```js
        // Accomodate.jsx
        import { useEffect } from "react";
        import { useState } from "react";
        import useCounter from "./useCounter";

        const MAX_CAPACITY = 10;

        export default function Accomodate(props) {
            const [isFull, setIsFull] = useState(false);
            const [isEmpty, setIsEmpty] = useState(false);
            const [count, increaseCount, decreaseCount] = useCounter(0);
            

            useEffect(() => {
                console.log("####################");
                console.log("useEffect() is called");
                console.log(`isFull: ${isFull}`);
            });

            useEffect(() => {
                setIsFull(count >= MAX_CAPACITY);
                setIsEmpty(count <= 0);
                console.log(`Current count value: ${count}`);
            }, [count]);

            return (
                <div style={{padding: 16}}>
                    <p>{`총 ${count} 명 수용하고 있습니다.`}</p>

                    <button onClick={increaseCount} disabled={isFull}>
                        입장
                    </button>
                    <button onClick={decreaseCount} disabled={isEmpty}>
                        퇴장
                    </button>

                    {isFull && <p style={{color: 'red'}}>정원이 가득찼습니다.</p>}
                </div>
            )
        }
    ```
    - 최대 수용 인원에 대한 정보는 상수로 관리해줍니다.

    - 최대 수용 인원인지 최소 수용 인원인지 확인하기 위한 isFull 과 isEmpty 를 useState 로 관리해줍니다. 

    - useCounter Hook 에서 count 와 increaseCount, decreaseCount 를 가져옵니다.

    - 첫번째 useEffect 는 log 확인용입니다. 의존성 배열 부분에 아무것도 없어서 업데이트 할 때마다 안에 있는 내용을 실행해줍니다. 

    - 두번째 useEffect 는 현재 수용 인원에 따라 버튼을 비활성화할지 활성화해줄지 정하기 위해 사용했습니다. 의존성 배열 부분에 count 가 있으니 count 의 값이 바뀔 때마다 안에 있는 내용이 실행됩니다. <br/><br/>

- 이제 잘 작동하는지 확인해봅니다. 
    ```js
        // index.js
        //...
        import Accomodate from './08_실습_Hooks사용해보기/Accomodate';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                //...
                <Accomodate />
            </React.StrictMode>,
            document.getElementById('root')
        );
    ```