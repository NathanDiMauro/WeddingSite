import { useState } from 'react';

export default function CountDown() {
    const [CountDown, setCountDown] = useState("loading...");

    async function getCountDown() {
        let result=await fetch('http://localhost:3001/countdown').then(req => req.text());
        console.log(result);
        setCountDown(result);
    };

    getCountDown();

    return (
        <p className='center' id='countDown'>{CountDown} Days</p>
    );
  }