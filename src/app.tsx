import { Background } from "./background";
import { Countdown } from "./countdown";
import {
  ReactAudioContext,
  useAudioContextProvider,
} from "./hooks/use-audio-context";
import { useAutoRefresh } from "./hooks/use-auto-refresh";
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
date.setSeconds(date.getSeconds() + 20);

export const App = () => {
  useAutoRefresh();
  const time = useTimer(import.meta.env.DEV ? date : undefined);
  const { audioContext } = useAudioContextProvider();

  return (
    <ReactAudioContext.Provider value={audioContext}>
      <Background />
      {time > 11 * 1000 ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-4">
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
            <div className="flex flex-col items-center gap-8 [&_span]:bg-white/60">
              <div className="flex flex-col items-center text-[40px] text-center [&_div]:-mt-6">
                <span>제출 시간은 13시까지 입니다.</span>
                <span>제출 시간을 어기거나</span>
                <span>
                  제출 시간 이후 코드를 수정하는 경우 패널티가 부과되니
                </span>
                <span>이점 유의하시길 바랍니다.</span>
              </div>
              <div className="flex flex-col items-center text-[30px] text-center [&_div]:-mt-6">
                <span>The submission deadline is 1 PM.</span>
                <span>If you miss the deadline</span>
                <span>
                  or modify the code after the deadline, penalties will be
                  applied,
                </span>
                <span>so please be aware of this.</span>
              </div>
            </div>
          </div>
        </div>
      ) : time > 0 ? (
        <Countdown time={time} />
      ) : (
        <TimeOver />
      )}
    </ReactAudioContext.Provider>
  );
};
