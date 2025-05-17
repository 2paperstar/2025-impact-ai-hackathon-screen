export const Countdown = ({ time }: { time: number }) => {
  return (
    <div className="fixed inset-0 bg-black text-white">
      <div>{time}</div>
    </div>
  );
};
