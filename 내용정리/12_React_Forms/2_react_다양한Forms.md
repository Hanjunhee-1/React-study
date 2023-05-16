# 🔔 다양한 Form

- 해당 부분은 React 의 문법이라기보다는 HTML 태그와 관련된 내용입니다.

- `form` 에는 입력받을 수 있는 종류가 여러가지가 있습니다. 사용자에게 글자로 입력받을 수도 있고, 체크박스, 라디오버튼, 스크롤바 등을 제공할 수 있습니다.

    1. <textarea></textarea>
        
        - 여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그입니다.
            ```html
                <textarea>
                    여기에 이렇게 여러 줄에 텍스트가 들어갈 수 있습니다.
                    한 줄 더 넣어보겠습니다.
                    한 줄 또 넣어보겠습니다.
                    마지막 한 줄 넣어보겠습니다.
                </textarea>
            ```
            <br/><br/><br/>

    2. <select></select>

        - 사용자에게 `drop-down` 을 제공하는 HTML 태그입니다.
            ```html
                <select>
                    <option value='apple'>사과</option>
                    <option selected value='cucumber'>오이</option>
                    <option value='eggplant'>가지</option>
                    <option value='grape'>포도</option>
                </select>
            ```
            <br/><br/>
        - 기본으로 선택되게하는 option 값을 설정하고 싶으면 `selected` 라는 속성을 추가해주면 됩니다. 하지만 React 에서는 selected 가 아닌 `useState` 로 관리되는 값을 value 라는 속성에 넣어주어야 합니다.
            ```js
                function FruitSelect(props) {
                    const [value, setValue] = useState('cucumber');

                    const handleChange = (event) => {
                        setValue(event.target.value);
                    }

                    const handleSubmit = (event) => {
                        alert('선택한 과일: ' + value);
                        event.preventDefault();
                    }

                    return (
                        <form onSubmit={handleSubmit}>
                            <label>
                                과일을 선택하세요:
                                <select value={cucumber} onChange={handleChange}>
                                    <option value='apple'>사과</option>
                                    <option selected value='cucumber'>오이</option>
                                    <option value='eggplant'>가지</option>
                                    <option value='grape'>포도</option>
                                </select>
                            </label>
                            <button type='submit'>제출</button>
                        </form>
                    )
                }
            ```
            <br/><br/><br/>

    3. `file input` 태그

        - `file input` 태그는 디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 태그입니다.
            ```html
                <input type='file' />
            ```

        - `file input` 태그는 그 값이 읽기 전용이기 때문에 React 에서는 `Uncontrolled Component` 라고 부르기도 합니다. <br/><br/><br/>

    
    4. `multiple` 태그

        - 만약 하나의 컴포넌트에서 사용자로부터 여러개 입력받고 싶다면 받아야 하는 것들을 전부 `useState` 로 관리해주면 됩니다. <br/><br/><br/>

- value 속성을 정해주면 값을 자유롭게 바꾸는 것이 불가능합니다. 하지만 `null` 값을 넘겨준다면 `value` 속성은 갖고 있지만 값을 자유롭게 바꾸는 것이 가능합니다.