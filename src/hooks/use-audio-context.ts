import { createContext, useContext, useEffect, useState } from "react";

export const useAudioContextProvider = () => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (audioContext) return;
    const handler = () => {
      const context = new AudioContext();
      setAudioContext(context);
      return context;
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [audioContext]);

  return { audioContext };
};

export const ReactAudioContext = createContext<AudioContext | null | undefined>(
  undefined
);

export const useAudioContext = () => {
  const context = useContext(ReactAudioContext);
  if (context === undefined) {
    throw new Error("AudioContext not found");
  }
  return context;
};
