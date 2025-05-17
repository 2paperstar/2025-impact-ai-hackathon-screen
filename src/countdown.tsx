import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import countdown from "./assets/countdown.wav";
import { useAudioContext } from "./hooks/use-audio-context";

const colorCombinations = [
  { from: "#7C3AED", to: "#3B82F6" }, // purple to blue
  { from: "#EC4899", to: "#FB923C" }, // pink to orange
  { from: "#4ADE80", to: "#14B8A6" }, // green to teal
  { from: "#EF4444", to: "#FBBF24" }, // red to yellow
  { from: "#6366F1", to: "#A78BFA" }, // indigo to purple
];

export const Countdown = ({ time }: { time: number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const audioContext = useAudioContext();

  useEffect(() => {
    setIsVisible(false);
    setColorIndex((prev) => (prev + 1) % colorCombinations.length);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [time]);

  const currentColors = colorCombinations[colorIndex];

  useEffect(() => {
    (async () => {
      if (!audioContext) return;
      const source = audioContext.createBufferSource();
      const buffer = await fetch(countdown).then((res) => res.arrayBuffer());
      const audioBuffer = await audioContext.decodeAudioData(buffer);
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0, time > 1000 ? 0 : 3, 0.5);
    })();
  }, [audioContext, time]);

  return (
    <motion.div
      initial={false}
      animate={{
        background: `linear-gradient(to bottom right, ${currentColors.from}, ${currentColors.to})`,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 text-yellow-300 flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
            className="text-[480px] font-bold drop-shadow-2xl"
          >
            {Math.floor(time / 1000)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
