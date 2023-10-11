import { useRef, useState } from "react";
import { DesktopGridContainer } from "../../styles";

import ContextMenu from "./DesktopGridContextMenu";
import {
  useCloseOnClickAway,
  useOpenContextMenuOnRightClick,
  useCloseOnPointerDown,
  useGridCells,
} from "../../hooks";

export interface AppStyle {
  borderStyle?: string;
  padding?: string;
  background?: string;
  cursor?: string;
}

export default function DesktopGrid() {
  const [openContextMenu, setOpenContextMenu] =
    useState<boolean | undefined>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const desktopGridContainerRef = useRef<HTMLDivElement>(null);

  const desktopAppCells = useGridCells();

  useOpenContextMenuOnRightClick(
    desktopGridContainerRef,
    openContextMenu,
    setOpenContextMenu,
    setMousePosition
  );
  useCloseOnPointerDown(openContextMenu, setOpenContextMenu);
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
