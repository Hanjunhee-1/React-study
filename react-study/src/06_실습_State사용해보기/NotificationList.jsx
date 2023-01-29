import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: '안녕하세요. 오늘 일정을 알려드립니다.'
    },
    {
        id: 2,
        message: 'study 시간입니다.'
    },
    {
        id: 3,
        message: '10분 후 회의가 시작됩니다.'
    },
];

export default class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { notifications: [] };
    }

    componentDidMount() {
        const { notifications } = this.state;
        let timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications,
                });
            } else {
                this.setState({
                    notifications: []
                });
                clearInterval(timer);
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return (
                            <Notification key={notification.id} id={notification.id} message={notification.message} />
                        )
                    })
                }
            </div>
        )
    }
}