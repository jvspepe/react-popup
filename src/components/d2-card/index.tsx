import type { CardBadge } from "@/types";
import { D2CardBadge } from "./d2-card-badge";
import { D2CardBody } from "./d2-card-body";
import { D2CardButton } from "./d2-card-button";
import { D2CardHeader } from "./d2-card-header";

type D2CardProps = {
  badges: CardBadge[];
};
export function D2Card({ badges }: D2CardProps) {
  return (
    <div className="relative max-w-xl overflow-hidden rounded-[4.5rem] bg-gradient-to-t from-[#FF6200] to-[#FF9A5B] p-1">
      <img
        src="/background.svg"
        alt=""
        className="absolute bottom-0 opacity-10"
      />
      <div className="overflow-hidden rounded-[4.25rem] bg-neutral-900">
        <div className="relative">
          <img src="/d2-hero.png" alt="" />
          <img
            src="/d2-cta.png"
            alt=""
            className="absolute -bottom-30 left-1/2 w-3/4 -translate-x-1/2"
          />
          <img
            src="/d2-plane.svg"
            alt=""
            className="absolute bottom-8 left-4 w-1/5"
          />
        </div>
        <div className="mt-10 flex items-center justify-between gap-4 p-4">
          {badges.map((badge) => (
            <D2CardBadge key={badge} content={badge} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-6 pb-8">
          <D2CardHeader />
          <D2CardBody />
          <D2CardButton />
        </div>
      </div>
    </div>
  );
}
