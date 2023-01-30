import React from "react";
import { useState, useEffect } from "react";

const styles = {
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 60,
    },
    button: {
        margin: 15,
        width: 100,
        height: 80,
    },
}

export default function Counter(props) {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `업데이트 횟수 : ${count}`
    }, [count]);

    return (
        <div>
            <h1>useState() 와 useEffect() 를 사용해봅시다.</h1>
            <h2>
                현재 Count 의 값은 
                <span style={styles.text}>{count}</span> 
                입니다.
            </h2>
            <div>
                <button style={styles.button} onClick={() => {setCount(count+1)}}>
                    <span style={styles.text}>+</span>
                </button>
                <button style={styles.button} onClick={() => {setCount(count-1)}}>
                    <span style={styles.text}>-</span>
                </button>
            </div>
        </div>
    )
}