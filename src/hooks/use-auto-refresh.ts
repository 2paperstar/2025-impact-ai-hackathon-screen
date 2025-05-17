import { useEffect } from "react";

export const useAutoRefresh = (duration: number = 1000 * 60) => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);
};
