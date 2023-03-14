import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // 컴포넌트 DOM에서
    componentDidMount() {
        this.time = setInterval(() => this.timeChange(),1000)
    }

    // 컴포넌트 DOM에서 제거 할때
    componentWillUnmount() {
        clearInterval(this.time)
    }

    timeChange = () => {  
        this.setState({
            date : new Date()
        });
    }
    
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    {<Clock 
                        hours={this.state.date.getHours()}
                        minutes={this.state.date.getMinutes()}
                        seconds={this.state.date.getSeconds()}
                        session={this.state.date.getHours() > 12 ? 'pm' : 'am'} />}
            </div>
        );
    }
}