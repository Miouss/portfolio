import { useRef, useState } from "react";
import { DesktopGridContainer } from "./style";

import ContextMenu from "./ContextMenu/ContextMenu";
import useCloseOnClickAway from "../../hooks/MouseEvents/useCloseOnClickAway";
import useOpenContextMenuOnRightClick from "../../hooks/MouseEvents/useOpenContextMenuOnRightClick";
import useCloseOnMouseDown from "../../hooks/MouseEvents/useCloseOnMouseDown";
import useGridCells from "../../hooks/Desktop/useGridCells";

export interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

export default function DesktopGrid() {
  const [openContextMenu, setOpenContextMenu] = useState<boolean | undefined>(
    false
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const desktopGridContainerRef = useRef<HTMLDivElement>(null);

  const desktopAppCells = useGridCells();

  useOpenContextMenuOnRightClick(
    desktopGridContainerRef,
    openContextMenu,
    setOpenContextMenu,
    setMousePosition
  );
  useCloseOnMouseDown(openContextMenu, setOpenContextMenu);
  useCloseOnClickAway(openContextMenu, setOpenContextMenu);

  return (
    <DesktopGridContainer ref={desktopGridContainerRef}>
      {openContextMenu && (
        <ContextMenu
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        ></ContextMenu>
      )}
      {desktopAppCells}
    </DesktopGridContainer>
  );
}
