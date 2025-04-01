import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}:${ampm}`;

  }
  return (

    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">

      <div className="text-3xl md:text-6xl lg:text-5xl font-mono p-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-6xl lg:text-5xl mb-2" >Digital Clock</h1>
        {formatTime(time)}
      </div>

    </div>

  );
}

export default DigitalClock;
