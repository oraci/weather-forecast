import React, { useState, useEffect } from 'react';
import { getDateFormatAMPM } from '../../helpers/helpers';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 100);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return <label className="label-date">{getDateFormatAMPM(date)}</label>;
};
