import type { CardBadge } from "@/types";

type D2CardBadgeProps = {
  content: CardBadge;
};
export function D2CardBadge({ content }: D2CardBadgeProps) {
  return (
    <div className="emphasize grow rounded-tl-4xl rounded-tr-lg rounded-br-4xl rounded-bl-lg p-1">
      <div className="flex grow items-center justify-center gap-1 rounded-tl-4xl rounded-tr-lg rounded-br-4xl rounded-bl-lg bg-neutral-900 px-2 py-1 font-semibold">
        <span>{content.split(" ")[0]}</span>{" "}
        <span className="emphasize bg-clip-text text-transparent">
          {content.split(" ")[1]}
        </span>
      </div>
    </div>
  );
}
