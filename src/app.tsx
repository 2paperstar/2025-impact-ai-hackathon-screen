import { Background } from "./background";
import { useAuthRefresh } from "./hooks/use-auto-refresh";
import { Timer } from "./timer";

export const App = () => {
  useAuthRefresh();

  return (
    <>
      <Background />
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <div className="text-[240px] -my-12">⌛</div>
          <div className="font-[Kdam_Thmor_Pro] text-[100px]">
            🔥 Solve with Code 🔥
          </div>
        </div>
        <div className="font-[Kdam_Thmor_Pro] text-[100px]">
          <Timer />
        </div>
      </div>
    </>
  );
};
