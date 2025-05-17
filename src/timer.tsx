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
  return (
    <div className="flex flex-col items-center ">
      <div className="tracking-tighter">{formatTime(time, 16, 2, "0x")}</div>
      <div className="tracking-tighter text-[80px]">
        {formatTime(time, 2, 6, "0b")}
      </div>
      <div className="tracking-tighter text-[80px]">
        {formatTime(time, 8, 2, "0o")}
      </div>
      <div className="text-[60px] opacity-40">{formatTime(time)}</div>
    </div>
  );
};
