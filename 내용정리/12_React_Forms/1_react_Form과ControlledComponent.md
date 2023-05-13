# 🔔 Form

- form 은 사용자로부터 어떠한 입력을 받을 때 사용합니다. 예를 들면, html 의 form 태그가 있습니다.

- 아래는 form 태그의 예시입니다.
    ```html
        <form>
            <label>
                이름:
                <input type='text' name='name' />
            </label>
        </form>
    ```
    <br/><br/><br/><br/>


# Controlled Component

- Controlled Component 는 사용자로부터 form 으로 입력받은 데이터를 다루기 위한 컴포넌트입니다.

- 아래는 Controlled Component 의 예시입니다.
    ```js
        function NameForm(props) {
            const [value, setValue] = useState('');

            const handleChange = (event) => {
                setValue(event.target.value);
            }

            const handleSubmit = (event) => {
                alert('입력한 이름: ' + value);
                event.preventDefault();
            }

            return (
                <form onSubmit={handleSubmit}>
                    <label>
                        이름:
                        <input type='text', value={value} onChange={handleChange} />
                    </label>
                    <button type='submit'>제출</button>
                </form>
            )
        }
    ```
    - Controlled Component 라고 하여 생소한 개념일 수 있지만 간단하게 생각하면 form 으로 입력받은 데이터를 React 가 알아서 관리하도록 하는 것이라고 생각하면 됩니다. 