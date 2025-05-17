import { Background } from "./background";
import { useAuthRefresh } from "./hooks/use-auto-refresh";
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

export const App = () => {
  useAuthRefresh();

  return (
    <>
      <Background />
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="text-[240px] -my-12 animate-rotate-with-delay">
              ⌛
            </div>
            <Title />
          </div>
          <div className="font-[Kdam_Thmor_Pro] text-[100px]">
            <Timer />
          </div>
        </div>
        <div
          className="flex flex-col gap-4 items-center text-[40px] 
        [&_span]:bg-white/40 [&_span]:px-2 [&_span]:py-1
        "
        >
          <div className="flex flex-col items-center">
            <span>기술 지원 세션 시간입니다.</span>
            <span>
              #1-기술지원요청 채널을 통해서 도움을 요청하실 수 있습니다.
            </span>
          </div>
          <div className="flex flex-col items-center text-[32px]">
            <span>This is a technical support session time.</span>
            <span>
              You can request help through the #1-technical-support-request
              channel.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
