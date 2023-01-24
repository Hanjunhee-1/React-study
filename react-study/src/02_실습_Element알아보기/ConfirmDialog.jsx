import Button from "./Button"

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요</p>
            <Button color='green'>확인</Button>
        </div>
    )
}

export default ConfirmDialog