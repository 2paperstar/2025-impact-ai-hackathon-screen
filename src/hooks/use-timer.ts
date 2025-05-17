import { useEffect, useState } from "react";

export const useTimer = (targetDate = new Date("2025-05-18T13:00:00")) => {
  const [time, setTime] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
};
