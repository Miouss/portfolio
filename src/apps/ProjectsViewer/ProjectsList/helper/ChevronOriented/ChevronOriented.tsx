import { Dispatch, ReactNode } from "react";
import { Chevron } from "../../../../../styles";
import { Direction, UndefinedDirection } from "../types";

interface Props {
  direction: Direction;
  disableButtons: boolean;
  icon: ReactNode;
  setTriggerAnimDirection: Dispatch<React.SetStateAction<UndefinedDirection>>;
}
export default function ChevronOriented({
  direction,
  disableButtons,
  icon,
  setTriggerAnimDirection,
}: Props) {
  return (
    <Chevron
      direction={direction}
      onClick={() => setTriggerAnimDirection(direction)}
      disabled={disableButtons}
    >
      {icon}
    </Chevron>
  );
}
