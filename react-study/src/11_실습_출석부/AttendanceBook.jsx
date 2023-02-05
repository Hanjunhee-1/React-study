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