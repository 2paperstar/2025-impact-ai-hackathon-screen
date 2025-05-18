const formatTime = (
  time: number,
  base: number = 10,
  length: number = 2,
  prefix: string = ""
) => {
  const hours = Math.floor(time / 3600000)
    .toString(base)
    .padStart(length, "0");
  const minutes = Math.floor((time % 3600000) / 60000)
    .toString(base)
    .padStart(length, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString(base)
    .padStart(length, "0");
  return `${prefix}${hours}:${prefix}${minutes}:${prefix}${seconds}`;
};

export const Timer = ({ time }: { time: number }) => {
  return formatTime(time);
};
