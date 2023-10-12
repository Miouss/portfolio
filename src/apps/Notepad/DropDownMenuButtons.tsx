import { Dispatch } from "react";
import { FileButton } from "./FileButton";
import { FormatButton } from "./FormatButton";
import { ToolbarTabs } from "./Toolbar";
import { EditButton } from "./EditButton";
import { HelpButton } from "./HelpButton";
import { FontSize } from "./Notepad";

interface Props {
  currTabHovered: ToolbarTabs | undefined;
  currfontSize: FontSize;
  setFontSize: Dispatch<FontSize>;
}

export function DropDownMenuButtons({
  currTabHovered,
  currfontSize,
  setFontSize,
}: Props) {
  if (!currTabHovered) return null;

  const { FILE, EDIT, FORMAT, HELP } = ToolbarTabs;

  let Buttons = {
    [FILE]: () => <FileButton />,
    [EDIT]: () => <EditButton />,
    [FORMAT]: () => {
      const formatButtons: JSX.Element[] = [];

      [...Object.values(FontSize)].forEach((SIZE) => {
        if (SIZE === currfontSize) return;
        formatButtons.push(
          <FormatButton key={SIZE} fontSize={SIZE} setFontSize={setFontSize} />
        );
      });

      return <>{formatButtons}</>;
    },
    [HELP]: () => <HelpButton />,
  };

  return Buttons[currTabHovered]();
}
