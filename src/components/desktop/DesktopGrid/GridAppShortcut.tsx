import {
  ShortcutDesktopIcon,
  getShortcutLink,
} from "../../apps/AppWindow/Window/Contents/list";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import {
  BackgroundColorLayer,
  GridAppBadge,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../styled/GridApp";
import { useState } from "react";

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
    console.log(click);
  return (
    <GridAppContainer click={click} onDoubleClick={() => window.open(urlRedirect!)} onClick={handleClick}>
      <BackgroundColorLayer click={click} />

      <GridAppIcon style={{ fontSize: "4rem" }}>
        <ShortcutDesktopIcon name={shortcutName} />
      </GridAppIcon>
      <GridAppBadge className="desktop-app-shortcut">
        <ShortcutIcon fontSize="small" />
      </GridAppBadge>
      <GridAppLabel>{shortcutName}</GridAppLabel>
    </GridAppContainer>
  );
}
