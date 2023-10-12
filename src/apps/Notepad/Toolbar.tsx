import { useRef, useState, MouseEvent, useEffect, Dispatch } from "react";
import { DropDownMenu, Toolbar as ToolbarContainer } from "../../styles";
import { ToolbarButtons } from "./ToolbarButtons";
import { FontSize } from "./Notepad";
import { DropDownMenuButtons } from "./DropDownMenuButtons";

export enum ToolbarTabs {
  FILE = "File",
  EDIT = "Edit",
  FORMAT = "Format",
  HELP = "Help",
}

interface Props {
  fontSize: FontSize;
  setFontSize: Dispatch<FontSize>;
}

export function Toolbar({ fontSize, setFontSize }: Props) {
  const dropDownMenuRef = useRef<HTMLDivElement>(null);
  const [contextMenuTarget, setContextMenuTarget] = useState<HTMLElement>();

  const [currTabHovered, setCurrTabHovered] = useState<ToolbarTabs>();

  const changeDropDownMenuParent = (
    e: MouseEvent<HTMLButtonElement, MouseEvent>,
    TAB: ToolbarTabs
  ) => {
    e.stopPropagation();
    setContextMenuTarget(e.currentTarget);
    setCurrTabHovered(TAB);
  };

  const switchDropDownMenuParent = (
    e: MouseEvent<HTMLButtonElement, MouseEvent>,
    TAB: ToolbarTabs
  ) => {
    if (!contextMenuTarget || !(contextMenuTarget !== e.currentTarget)) return;

    setContextMenuTarget(e.currentTarget);
    setCurrTabHovered(TAB);
  };

  useEffect(() => {
    if (!contextMenuTarget || !dropDownMenuRef.current) return;

    const eventCallback = () => {
      setContextMenuTarget(undefined);
      setCurrTabHovered(undefined);
    };

    document.addEventListener("click", eventCallback);

    contextMenuTarget.appendChild(dropDownMenuRef.current);

    return () => document.removeEventListener("click", eventCallback);
  }, [contextMenuTarget]);

  return (
    <ToolbarContainer>
      <DropDownMenu ref={dropDownMenuRef} open={!!contextMenuTarget}>
        <DropDownMenuButtons
          currTabHovered={currTabHovered}
          currfontSize={fontSize}
          setFontSize={setFontSize}
        />
      </DropDownMenu>
      <ToolbarButtons
        currTabHovered={currTabHovered}
        changeDropDownMenuParent={changeDropDownMenuParent}
        switchDropDownMenuParent={switchDropDownMenuParent}
      />
    </ToolbarContainer>
  );
}
