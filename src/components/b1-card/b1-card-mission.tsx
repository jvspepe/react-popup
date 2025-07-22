import type { CardMission } from "@/types";

export function B1CardMission({
  title,
  steps,
  completedSteps,
  reward,
}: CardMission) {
  return (
    <div className="relative flex w-4/5 flex-col gap-2 rounded-3xl bg-gradient-to-t from-[#131313] to-[#303030] px-4 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.8)]">
      {/* White Light */}
      <img
        src="white-light.png"
        alt=""
        className="absolute -top-[3.25rem] left-1/2 w-3/4 -translate-x-1/2"
      />

      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        <div className="absolute -top-4 -right-4 flex items-center rounded-3xl bg-gradient-to-br from-[#FFB24E] to-[#FF6200] px-2">
          <span>+{reward}</span>
          <img src="coin.png" alt="" className="size-8" aria-hidden />
        </div>
      </div>
      <div
        data-completed-steps={completedSteps}
        className="relative flex items-center justify-center overflow-hidden rounded-full bg-[#4E4E4E] text-xs"
      >
        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 h-full bg-[#29BA66] transition-all duration-200 ease-out"
          style={{ width: `${(completedSteps / steps) * 100}%` }}
        />
        <span className="relative z-10 font-bold">
          {completedSteps}/{steps}
        </span>
      </div>
      <button
        type="button"
        data-completed={completedSteps === steps}
        className="z-10 w-3/4 cursor-pointer self-center rounded-full bg-[#4E4E4E] text-sm text-black uppercase data-[completed=true]:bg-gradient-to-br data-[completed=true]:from-[#FFB24E] data-[completed=true]:to-[#FF6200]"
      >
        Receber recompensa
      </button>
    </div>
  );
}
