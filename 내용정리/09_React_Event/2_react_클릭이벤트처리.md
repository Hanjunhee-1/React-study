# 🔔 클릭 이벤트 처리

- 이번에는 클릭 이벤트를 처리하는 방법을 알아볼 것입니다.

- 아래와 같이 코드를 작성해줍니다.
    ```js
        import { useState } from 'react';

        export default function ConfirmButton(props) {
            const [isConfirmed, setIsConfirmed] = useState(false);

            const handleConfirm = () => {
                setIsConfirmed(isConfirmed => !isConfirmed);
            };

            return (
                <button onClick={handleConfirm} disabled={isConfirmed}>
                    {isConfirmed ? '확인됨' : '확인하기'}
                </button>
            )
        }
    ```
    - 버튼을 클릭할 때마다 `handleConfirm` 함수를 실행하고 그에 따라 `isConfirmed` 를 수정해줍니다.