import {
  ShortcutDesktopIcon,
  getShortcutGridPosition,
  getShortcutLink,
} from "../../apps";
import {
  BackgroundColorLayer,
  GridAppContainer,
  GridAppIcon,
  GridAppLabel,
} from "../../styles";
import { useState } from "react";
import { RedirectLogo } from "../../assets";

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

  const gridPosition = getShortcutGridPosition(appName);

  return (
    <GridAppContainer
      click={click}
      onDoubleClick={() => window.open(urlRedirect!, "_blank")}
      onClick={handleClick}
      style={{
        gridColumn: gridPosition.col,
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
