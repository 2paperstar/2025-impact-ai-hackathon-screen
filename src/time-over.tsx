export const TimeOver = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center fixed inset-0 gap-16">
      <div className="flex flex-col font-bold">
        <div className="text-[120px]">제출 마감</div>
        <div className="text-[100px] -mt-8">Submission closed</div>
      </div>
      <div className="flex flex-col">
        <div className="text-[60px]">
          이 이후 제출하는 과제는 패널티가 부과됩니다
        </div>
        <div className="text-[60px]">
          Assignments submitted after this will be penalised
        </div>
      </div>
    </div>
  );
};
