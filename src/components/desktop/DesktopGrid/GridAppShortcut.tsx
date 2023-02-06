import {
  ShortcutDesktopIcon,
  getShortcutGridPostion,
  getShortcutLink,
} from "../../Applications/Window/Contents/list";
import {
  BackgroundColorLayer,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "./style";
import { useState } from "react";
import { RedirectLogo } from "../../../assets/icons/icons";

interface Props {
  shortcutName: string;
}

export default function ShortcutApp({ shortcutName }: Props) {
  const urlRedirect = getShortcutLink(shortcutName);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);

    document.onpointerdown = () => {
      setClick(false);
      document.onpointerdown = null;
    };
  };

  const gridPosition = getShortcutGridPostion(shortcutName);

  return (
    <GridAppContainer
      click={click}
      onDoubleClick={() => window.open(urlRedirect!)}
      onClick={handleClick}
      style={{
        gridColumn: gridPosition.column,
        gridRow: gridPosition.row,
      }}
    >
      <BackgroundColorLayer click={click} />
      <GridAppIcon>
        <ShortcutDesktopIcon name={shortcutName} />
        <RedirectLogo />
      </GridAppIcon>

      <GridAppLabel>{shortcutName}</GridAppLabel>
    </GridAppContainer>
  );
}
