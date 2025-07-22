import type { CardMission } from "@/types";
import { B1CardMission } from "./b1-card-mission";

type CardProps = {
  missions: CardMission[];
};
export function B1Card({ missions }: CardProps) {
  return (
    <div className="relative">
      {/* Outer Border */}
      <img
        src="/b1-border-outer.svg"
        alt=""
        className="absolute top-[1.75rem] scale-[1.12]"
      />
      {/* Lights */}
      <img
        src="/light.png"
        alt=""
        className="absolute top-1/2 -left-[calc(100%-17.6rem)] z-90 h-3/4 -translate-y-1/2"
      />
      <img
        src="/light.png"
        alt=""
        className="absolute top-1/2 -right-[calc(100%-23.75rem)] z-90 h-3/4 -translate-y-1/2"
      />
      {/* Outer Shield */}
      <img src="/b1-shield.svg" alt="" className="absolute scale-[1.035]" />
      {/* Inner Shield Mask */}
      <div className="relative h-[735px] w-[460px] bg-[url(/b1-shield-inner.svg)] mask-[url(/b1-shield-inner.svg)] bg-cover mask-cover">
        {/* Inner Border */}
        <img src="/b1-border-inner.svg" alt="" className="absolute z-20" />
        {/* Hero Image */}
        <img src="/b1-background.png" alt="" className="relative z-10" />
        <img src="/b1-banner.png" alt="" className="relative z-[15] -mt-24" />
        {/* Hexagon Background Pattern */}
        <img
          src="/background.svg"
          alt=""
          className="absolute bottom-0 -z-1 opacity-10"
        />
        {/* Content */}
        <div className="relative z-50 flex flex-col items-center justify-center gap-3">
          {missions.map((mission) => (
            <B1CardMission
              key={mission.title}
              title={mission.title}
              steps={mission.steps}
              completedSteps={mission.completedSteps}
              reward={mission.reward}
            />
          ))}
          <button
            type="button"
            className="relative cursor-pointer rounded-full bg-gradient-to-br from-[#FF8601] to-[#FE903F] px-8 py-2 text-2xl text-neutral-950 uppercase"
          >
            {/* Top light */}
            <img
              src="/light.png"
              alt=""
              className="absolute -top-22 left-2/3 -z-10 w-1/2 -translate-x-2/3 -rotate-90"
            />
            {/* Bottom light */}
            <img
              src="/light.png"
              alt=""
              className="absolute -bottom-[89px] left-2/4 -z-10 w-1/2 -translate-x-2/4 rotate-90"
            />
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
