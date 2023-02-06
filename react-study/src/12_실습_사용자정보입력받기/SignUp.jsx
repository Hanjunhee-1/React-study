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