import { StartMenuBox } from "./style";
import { WindowsIcon } from "../../../assets/icons/icons";
import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu/ContextMenu";

export default function StartMenu() {
  const [color, setColor] = useState("white");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayContextMenu, setDisplayContextMenu] = useState(false);

  const openContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setMousePosition({ x: e.pageX, y: e.pageY });
    setDisplayContextMenu(true);
  };

  useEffect(() => {
    if (!displayContextMenu) return;

    setColor("dodgerblue");

    const closeContextMenu = () => {
      setDisplayContextMenu(false);
    };

    document.addEventListener("click", closeContextMenu);
    document.addEventListener("contextmenu", closeContextMenu);

    return () => {
      document.removeEventListener("click", closeContextMenu);
      document.removeEventListener("contextmenu", closeContextMenu);

      setColor("white");
    };
  }, [displayContextMenu]);

  return (
    <StartMenuBox
      rightclick={displayContextMenu}
      onMouseEnter={() => setColor("dodgerblue")}
      onMouseLeave={() => {
        !displayContextMenu && setColor("white");
      }}
      onContextMenu={(e) => openContextMenu(e)}
    >
      <ContextMenu
        displayContextMenu={displayContextMenu}
        setDisplayContextMenu={setDisplayContextMenu}
        mousePosition={mousePosition}
      />
      <WindowsIcon color={color} />
    </StartMenuBox>
  );
}
