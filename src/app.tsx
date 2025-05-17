import { Background } from "./background";

export const App = () => {
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
        <div className="font-[Kdam_Thmor_Pro] text-[100px]">10:43:24</div>
      </div>
    </>
  );
};
