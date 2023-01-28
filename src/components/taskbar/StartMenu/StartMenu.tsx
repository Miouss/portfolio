import { StartMenuBox } from "../styled/StartMenu";
import { WindowsIcon } from "../../../assets/icons/icons";
import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu";

export default function StartMenu() {
  const [color, setColor] = useState("white");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayContextMenu, setDisplayContextMenu] = useState(false);

  const openContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(e);
    setMousePosition({ x: e.pageX, y: e.pageY });
    setDisplayContextMenu(true);
  }

  useEffect(() => {
    if(!displayContextMenu) return;
    
    setColor("dodgerblue");

    document.addEventListener("click", () => {
      setDisplayContextMenu(false);
    });

    return () => {
      document.removeEventListener("click", () => {
        setDisplayContextMenu(false);
      });

      setColor("white")
    };
  }, [displayContextMenu]);

  return (
    <StartMenuBox rightclick={displayContextMenu}
      onMouseEnter={() => setColor("dodgerblue")}
      onMouseLeave={() => {!displayContextMenu && setColor("white")}}
      onContextMenu={(e) => openContextMenu(e)}>
        <ContextMenu displayContextMenu={displayContextMenu} setDisplayContextMenu={setDisplayContextMenu} mousePosition={mousePosition}></ContextMenu>
      <WindowsIcon color={color} />
    </StartMenuBox>
  );
}
