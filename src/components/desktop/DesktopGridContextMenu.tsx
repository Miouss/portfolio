import { DesktopContextMenuPop } from "../../styles";

import { useContextMenuActions } from "../../hooks";

interface Props {
  mouseX: number;
  mouseY: number;
}

export default function ContextMenu({ mouseX, mouseY }: Props) {
  const actionsContainersFilled = useContextMenuActions();

  return (
    <DesktopContextMenuPop
      mouseX={mouseX}
      mouseY={mouseY}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {actionsContainersFilled}
    </DesktopContextMenuPop>
  );
}
