import ArrowIcon from "./assets/arrow.svg?react";
import ColonIcon from "./assets/colon.svg?react";
import DotsIcon from "./assets/dots.svg?react";
import StarIcon from "./assets/star.svg?react";
import { useAudioContext } from "./hooks/use-audio-context";

export const Background = () => {
  const audioContext = useAudioContext();
  return (
    <div
      className={`fixed inset-0 bg-[#EEEEEE] ${
        audioContext ? "" : "border-4 border-red-800"
      }`}
    >
      <div className="opacity-40">
        <StarIcon className="absolute top-1/4 left-1/12 size-[300px]" />
        <ArrowIcon className="absolute top-1/2 left-1/3 size-[300px]" />
        <DotsIcon className="absolute top-1/4 left-1/2 size-[300px]" />
        <ColonIcon className="absolute top-1/2 right-1/12 size-[300px]" />
      </div>
    </div>
  );
};
