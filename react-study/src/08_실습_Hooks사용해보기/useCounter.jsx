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