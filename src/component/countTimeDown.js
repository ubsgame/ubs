import React, {Component} from 'react'

export default class CountTimeDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: "00",
            minute: "00",
            second: "00",
        }
    }

    componentDidMount() {
        if (this.props.endTime) {
            this.countFun(this.props.endTime);
        }
    }

    //组件卸载取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countFun = (time) => {
        let sys_second = (time - new Date().getTime());
        this.timer = setInterval(() => {
            //防止倒计时出现负数
            if (sys_second > 1000) {
                sys_second -= 1000;
                let hour = Math.floor((sys_second / 1000 / 3600) % 24);
                let minute = Math.floor((sys_second / 1000 / 60) % 60);
                let second = Math.floor(sys_second / 1000 % 60);
                this.setState({
                    hour: hour < 10 ? "0" + hour : hour,
                    minute: minute < 10 ? "0" + minute : minute,
                    second: second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
            }
        }, 1000);
    };

    render() {
        return (
            <span>{this.state.hour}:{this.state.minute}:{this.state.second}</span>
        )
    }
}