import { useEffect, useRef } from "react";

export const useAutoRefresh = (duration: number = 1000 * 60) => {
  const originalContent = useRef<string>();

  useEffect(() => {
    fetch("/2025-impact-ai-hackathon-screen/").then((res) =>
      res.text().then((text) => {
        originalContent.current = text.trim();
      })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!originalContent.current) return;
      fetch("/2025-impact-ai-hackathon-screen/").then((res) =>
        res.text().then((text) => {
          if (originalContent.current !== text.trim()) {
            window.location.reload();
          }
        })
      );
    }, duration);
    return () => clearInterval(interval);
  }, [duration]);
};
