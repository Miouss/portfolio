import { ContextMenuPop } from "./style";

import useContextMenuActions from "../../../hooks/Desktop/useContextMenuActions";

interface Props {
  mouseX: number;
  mouseY: number;
}

export default function ContextMenu({ mouseX, mouseY }: Props) {
  const actionsContainersFilled = useContextMenuActions();

  return (
    <ContextMenuPop
      mouseX={mouseX}
      mouseY={mouseY}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {actionsContainersFilled}
    </ContextMenuPop>
  );
}
