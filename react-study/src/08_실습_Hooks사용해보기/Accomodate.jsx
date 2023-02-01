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