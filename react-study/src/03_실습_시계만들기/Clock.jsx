function Clock(props) {
    return (
        <div>
            <h1>Hello, React!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;