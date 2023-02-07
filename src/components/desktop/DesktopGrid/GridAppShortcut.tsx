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
  appName: string;
}

export default function ShortcutApp({ appName }: Props) {
  const urlRedirect = getShortcutLink(appName);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);

    document.onpointerdown = () => {
      setClick(false);
      document.onpointerdown = null;
    };
  };

  const gridPosition = getShortcutGridPostion(appName);

  return (
    <GridAppContainer
      click={click}
      onDoubleClick={() => window.open(urlRedirect!, "_blank")}
      onClick={handleClick}
      style={{
        gridColumn: gridPosition.column,
        gridRow: gridPosition.row,
      }}
    >
      <BackgroundColorLayer click={click} />
      <GridAppIcon>
        <ShortcutDesktopIcon name={appName} />
        <RedirectLogo />
      </GridAppIcon>

      <GridAppLabel>{appName}</GridAppLabel>
    </GridAppContainer>
  );
}
