import React, {Component} from 'react';
import './App.css';
import Ubs from "./component/ubs";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{mixHeight: document.documentElement.clientHeight}}>
                <Ubs/>
            </div>
        );
    }
}

export default App;
