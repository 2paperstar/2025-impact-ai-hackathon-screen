import { Background } from "./background";
import { useAuthRefresh } from "./hooks/use-auto-refresh";
import { Timer } from "./timer";

const Title = () => {
  return (
    <div className="font-[Kdam_Thmor_Pro] text-[100px] flex gap-4">
      🍱{" "}
      <div className="bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-flow">
        Dinner Time
      </div>
      🍱
    </div>
  );
};

export const App = () => {
  useAuthRefresh();

  return (
    <>
      <Background />
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <Title />
        </div>
        <div className="font-[Kdam_Thmor_Pro] text-[80px]">
          <Timer />
        </div>
        <div className="text-center text-2xl flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <span className="bg-white/60 px-2 py-1">
              저녁이 준비되었습니다! 운영진 안내에 따라 식사를 수령해 주세요
            </span>
            <span className="bg-white/60 px-2 py-1">
              다 드신 후에는 문 밖에 있는 분리수거함 라벨에 맞게 분리수거
              해주세요
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-white/60 px-2 py-1">
              Dinner is available outside! Follow the staff instructions to
              collect your meal.
            </span>
            <span className="bg-white/60 px-2 py-1">
              Dispose of your food according to the labels on the recycling bin
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          Menus:
          <div className="flex flex-col items-center bg-red-100 p-2">
            <div>오징어 두루치기</div>
            <div className="text-base">Squid Stir-Fry</div>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 p-2">
            <div>버섯소불고기</div>
            <div className="text-base">Mushroom Bulgogi</div>
          </div>
          <div className="flex flex-col items-center bg-blue-100 p-2">
            <div>숯불닭구이</div>
            <div className="text-base">Grilled Chicken</div>
          </div>
        </div>
      </div>
    </>
  );
};
