import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTick] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const times = setInterval(() => {
            setTick(tick => tick+1)
            setTime(new Date())
         }, 1000);
         return (() => clearInterval(times))
    }, []);
    
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={time.getHours()}
                    minutes={time.getMinutes()}
                    seconds={('0' + time.getSeconds()).slice(-2)}/>
            }
        </div>
    );
}