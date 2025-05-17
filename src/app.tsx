import { Background } from "./background";
import { Countdown } from "./countdown";
import { useAuthRefresh } from "./hooks/use-auto-refresh";
import { useTimer } from "./hooks/use-timer";
import { TimeOver } from "./time-over";
import { Timer } from "./timer";

const Title = () => {
  return (
    <div className="font-[Kdam_Thmor_Pro] text-[100px] flex gap-4">
      🔥{" "}
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-flow">
        Solve with Code!!
      </div>{" "}
      🔥
    </div>
  );
};

const date = new Date();
date.setSeconds(date.getSeconds() + 13);

export const App = () => {
  useAuthRefresh();
  const time = useTimer(import.meta.env.DEV ? date : undefined);

  return (
    <>
      <Background />
      {time > 11 * 1000 ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="text-[240px] -my-12 animate-rotate-with-delay">
                ⌛
              </div>
              <Title />
            </div>
            <div className="font-[Kdam_Thmor_Pro] text-[100px]">
              <Timer time={time} />
            </div>
          </div>
        </div>
      ) : time > 0 ? (
        <Countdown time={time} />
      ) : (
        <TimeOver />
      )}
    </>
  );
};
