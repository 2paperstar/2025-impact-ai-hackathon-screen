import { useEffect, useState } from "react";

const targetDate = new Date("2025-05-18T13:00:00");

const formatTime = (time: number, base: number = 10, length: number = 2) => {
  const hours = Math.floor(time / 3600000)
    .toString(base)
    .padStart(length, "0");
  const minutes = Math.floor((time % 3600000) / 60000)
    .toString(base)
    .padStart(length, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString(base)
    .padStart(length, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const Timer = () => {
  const [time, setTime] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div>{formatTime(time, 2, 8)}</div>
      <div className="text-[60px] opacity-40">{formatTime(time)}</div>
    </div>
  );
};
