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
          <div className="text-[240px] -my-12">⌛</div>
          <Title />
        </div>
        <div className="font-[Kdam_Thmor_Pro] text-[100px]">
          <Timer />
        </div>
      </div>
    </>
  );
};
