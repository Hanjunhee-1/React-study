# 🔔 List 와 Key 를 활용하여 출석부 컴포넌트 만들기

- 아래의 예시 코드를 보겠습니다. (파일 위치: `react-study/src/11_실습_출석부/AttendanceBook.jsx`)
    ```js
        // AttendanceBook.jsx
        const students = [
            {
                name: 'kevin',
            },
            {
                name: 'jane',
            },
            {
                name: 'steve',
            },
            {
                name: 'jimy',
            },
            {
                name: 'tom',
            }
        ];

        export default function AttendanceBook(props) {
            return (
                <ul>
                    {
                        students.map((student, index) => {
                            return <li key={index}>{student.name}</li>
                        })
                    }
                </ul>
            )
        }
    ```
    - `students` 라는 List 를 만들어주고 `AttendanceBook` 컴포넌트에서 해당 List 를 활용하여 Element 를 만들어 반환해줍니다.

    - 여기서 중요한 것은 li 태그에 있는 `key` 라는 속성입니다. 해당 속성이 없어도 작동에 문제는 없지만 React 에서 경고를 띄워주기 때문에 List 를 사용했다면 위 코드에 나온것처럼 꼭 Key 속성을 명시해주는 것이 좋습니다. Key 속성으로 적절한 값은 `id` 값이 될 수 있지만 현재 students 에는 Object 내부에 id 값이 따로 없기 때문에 List 의 요소들은 기본으로 갖고 있는 `index` 라는 값을 주었습니다. 