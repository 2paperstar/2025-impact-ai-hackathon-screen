import { useEffect } from "react";

export const useAuthRefresh = (duration: number = 1000 * 60 * 5) => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);
};
