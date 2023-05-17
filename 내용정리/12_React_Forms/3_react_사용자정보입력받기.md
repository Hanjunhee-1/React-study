# 🔔 form 작성해보기

- 사용자로부터 정보를 받는 `form` 을 작성해볼 것입니다. 받을 정보는 다음과 같습니다.
    ```
        받을 정보: 이름, 성별

        조건1. 이름은 input 의 text 타입으로 받아주세요
        조건2. 성별은 select 태그를 활용하여 입력받고 기본 값을 'Unknown' 으로 해주세요.
    ```

- 위의 조건을 만족하는 form 의 예시입니다.
    ```js
        // SignUp.jsx
        import { useState } from "react";

        export default function SignUp(props) {
            const [name, setName] = useState('');
            const [gender, setGender] = useState('Unknown');

            const handleChangeName = (event) => {
                setName(event.target.value);
            }

            const handleChangeGender = (event) => {
                setGender(event.target.value);
            }

            const handleSubmit = (event) => {
                alert(`이름: ${name}, 성별: ${gender}`);
                event.preventDefault();
            }

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        이름:
                        <input type="text" value={name} onChange={handleChangeName} />
                    </label>
                    <br />
                    <label>
                        성별:
                        <select value={gender} onChange={handleChangeGender}>
                            <option value="Unknown">공개안함</option>
                            <option value="Man">남자</option>
                            <option value="Woman">여자</option>
                        </select>
                    </label>
                    <button type="submit">제출</button>
                </form>
            )
        }
    ```
    - form 으로 받는 정보들을 모두 `useState` 로 관리해주고 있습니다.
    - 각 함수의 `event` 라고 되어있는 매개변수는 사용자가 버튼을 누르거나 글자를 바꿔쓰는 등의 이벤트를 받아주기 위한 매개변수입니다.
    - `preventDefault()` 는 해당 링크를 참고해주세요. https://basemenks.tistory.com/239 