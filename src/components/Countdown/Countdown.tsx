import React, { useState, useEffect } from 'react';
import appConfig from '../../appConfig';

import './styles.scss';

interface CountdownInterface {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface Props {}

function dateToCountdown(now: Date): CountdownInterface {
  const countdown: CountdownInterface = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (!appConfig.eventDate || !now) {
    return countdown;
  }

  let difference: number = appConfig.eventDate.getTime() - now.getTime();

  countdown.days = Math.floor(difference / 86400000);
  difference -= countdown.days * 86400000;
  countdown.hours = Math.floor(difference / 3600000);
  difference -= countdown.hours * 3600000;
  countdown.minutes = Math.floor(difference / 60000);
  difference -= countdown.minutes * 60000;
  countdown.seconds = Math.floor(difference / 1000);

  return countdown;
}

const Countdown: React.FC<Props> = () => {
  // Change this date for the future date
  const [now, setNow] = useState(new Date());

  function refreshClock() {
    setNow(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const countdown: CountdownInterface = dateToCountdown(now);

  return (
      <div id='Countdown' className='Countdown'>
        <div>
          {countdown.days}
        </div>
        <div>
          {countdown.hours}
        </div>
        <div>
          {countdown.minutes}
        </div>
        <div>
          {countdown.seconds}
        </div>
      </div>
  );
}

export default Countdown;
