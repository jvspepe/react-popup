import type { CardBadge, CardMission } from "@/types";
import { B1Card } from "@/components/b1-card";
import { Button } from "@/components/ui/button";
import { D2Card } from "@/components/d2-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const badges: CardBadge[] = ["Inscrição Automática", "Pagamento Diário"];

const missions: CardMission[] = [
  {
    title: "Fazer Login",
    steps: 1,
    completedSteps: 1,
    reward: 10,
  },
  {
    title: "Girar 10 vezes no Cash Mania",
    steps: 10,
    completedSteps: 5,
    reward: 50,
  },
  {
    title: "Girar 10 vezes no Fortune Tiger",
    steps: 10,
    completedSteps: 0,
    reward: 60,
  },
];

export function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-8">
        <Dialog>
          <DialogTrigger>
            <Button type="button">Popup D2</Button>
          </DialogTrigger>
          <DialogContent className="border-none bg-transparent shadow-none">
            <DialogHeader className="sr-only">
              <DialogTitle>Mission Details</DialogTitle>
              <DialogDescription>
                View and manage your mission details here.
              </DialogDescription>
            </DialogHeader>
            <D2Card badges={badges} />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button type="button">Popup B1</Button>
          </DialogTrigger>
          <DialogContent className="border-none bg-transparent shadow-none">
            <DialogHeader className="sr-only">
              <DialogTitle>Mission Details</DialogTitle>
              <DialogDescription>
                View and manage your mission details here.
              </DialogDescription>
            </DialogHeader>
            <B1Card missions={missions} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
