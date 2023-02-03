import { StartMenuContainer, WindowsIconBox } from "./style";
import { WindowsIcon } from "../../../assets/icons/icons";
import { useEffect, useRef, useState } from "react";
import ContextMenu from "./ContextMenu/ContextMenu";
import PopOverMenu from "./PopOverMenu/PopOverMenu";
import useOpenOnLeftClick from "../../../hooks/useOpenOnLeftClick";
import useCloseOnClickAway from "../../../hooks/useCloseOnClickAway";
import useCloseOnClick from "../../../hooks/useCloseOnClick";
import useOpenContextMenuOnRightClick from "../../../hooks/useOpenContextMenuOnRightClick";

export default function StartMenu() {
  const startMenuContainerRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayContextMenu, setDisplayContextMenu] = useState<
    boolean | undefined
  >(false);
  const [displayPopOverMenu, setDisplayPopOverMenu] = useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    if (!displayPopOverMenu) return;
    setDisplayContextMenu(false);
  }, [displayPopOverMenu]);

  useOpenOnLeftClick(
    startMenuContainerRef,
    displayPopOverMenu,
    setDisplayPopOverMenu
  );
  useCloseOnClick(
    startMenuContainerRef,
    displayPopOverMenu,
    setDisplayPopOverMenu
  );
  useCloseOnClickAway(displayPopOverMenu, setDisplayPopOverMenu);

  useOpenContextMenuOnRightClick(
    startMenuContainerRef,
    displayContextMenu,
    setDisplayContextMenu,
    setMousePosition
  );
  useCloseOnClick(
    startMenuContainerRef,
    displayContextMenu,
    setDisplayContextMenu
  );
  useCloseOnClickAway(displayContextMenu, setDisplayContextMenu);

  return (
    <>
      {displayContextMenu && <ContextMenu mousePosition={mousePosition} />}

      <StartMenuContainer
        ref={startMenuContainerRef}
        popOverMenuDisplayed={displayPopOverMenu}
        rightclick={displayContextMenu}
      >
        <PopOverMenu displayPopOverMenu={displayPopOverMenu} />

        <WindowsIconBox>
          <WindowsIcon />
        </WindowsIconBox>
      </StartMenuContainer>
    </>
  );
}
