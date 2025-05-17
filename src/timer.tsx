import { useEffect, useState } from "react";

const targetDate = new Date("2025-05-18T13:00:00");

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return formatTime(time);
};
