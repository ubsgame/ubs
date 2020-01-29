import React, {Component} from 'react';

import num_0 from '../img/num_0.png'
import num_1 from '../img/num_1.png'
import num_2 from '../img/num_2.png'
import num_3 from '../img/num_3.png'
import num_4 from '../img/num_4.png'
import num_5 from '../img/num_5.png'
import num_6 from '../img/num_6.png'
import num_7 from '../img/num_7.png'
import num_8 from '../img/num_8.png'
import num_9 from '../img/num_9.png'

const nums = new Map([
    [0, num_0], [1, num_1], [2, num_2], [3, num_3], [4, num_4], [5, num_5], [6, num_6], [7, num_7], [8, num_8], [9, num_9]
]);

class Timer extends Component {
    constructor(props) {
        super(props);
        this.delayTime = this.props.delayTime;
        this.state = {
            hour: "00",
            minute: "00",
            second: "00",
        }


    }

    componentDidMount() {
        this.startCountDown();
    }

    componentDidUpdate() {
        if (this.props.time !== this.delayTime) {
            this.delayTime = this.props.delayTime;

            this.clearTimer();
            this.startCountDown();
        }
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    // 开启计时
    startCountDown() {
        if (this.delayTime && !this.timer) {
            this.timer = setInterval(() => {
                this.doCount();
            }, 1000);
        }
    }

    leftZero(d) {
        if (d < 10) {
            return "0" + d;
        } else {
            return "" + d;
        }
    }

    doCount() {
        const {onTimeout,} = this.props;
        const timeDiffSecond = this.delayTime - new Date().getTime() / 1000;

        if (timeDiffSecond <= 0) {
            this.clearTimer();
            if (typeof onTimeout === 'function') {
                onTimeout();
            }
            return;
        }

        const hour = Math.floor((timeDiffSecond % 86400) / 3600);
        const minute = Math.floor((timeDiffSecond % 3600) / 60);
        const second = Math.floor((timeDiffSecond % 3600) % 60);


        this.setState({
            hour: hour,
            minute: minute,
            second: second,
        });
    }

    render() {

        return (
            <div style={{maxHeight:'60px'}}>
                <img src={require('../img/timer.png')} width="200"/>
                <div className="clock">
                    <img style={{position: "relative", left: "-18px"}} src={nums.get(Math.floor(this.state.hour / 10))}
                         width="20"/>
                    <img style={{position: "relative", left: "-14px"}} src={nums.get(this.state.hour % 10)} width="20"/>

                    <img style={{position: "relative", left: "-2px"}} src={nums.get(Math.floor(this.state.minute / 10))}
                         width="20"/>
                    <img style={{position: "relative", left: "3px"}} src={nums.get(this.state.minute % 10)} width="20"/>

                    <img style={{position: "relative", left: "14px"}} src={nums.get(Math.floor(this.state.second / 10))}
                         width="20"/>
                    <img style={{position: "relative", left: "18px"}} src={nums.get(this.state.second % 10)}
                         width="20"/>
                </div>
            </div>

        );
    }
}

export default Timer;