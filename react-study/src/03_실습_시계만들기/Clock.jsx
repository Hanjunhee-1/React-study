import React from "react";

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, React!</h1>
//             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
// }

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        // this.timerId = setInterval(() => this.setTime(), 1000)
        setInterval(() => this.setTime(), 1000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerId);
    // }

    setTime() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
                <h2>현재 시간: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;