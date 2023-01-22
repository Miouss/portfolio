import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { AppIcon } from "../../apps/collection/Collection";
import { AppStyle } from "../AppGrid";
import handlePointerEvent from "../utils/handlePointerEvent";
import ShortcutIcon from "@mui/icons-material/Shortcut";

interface Props {
  shortcutName: string;
  gridArea: string;
}

export default function ShortcutApp({ shortcutName, gridArea }: Props) {
  const urlRedirect = useSelector(({ shortcuts }: RootState) => {
    const shortcut = shortcuts.find((shortcut) => shortcut.name === shortcutName);
    if (shortcut) return shortcut.link;
  });

  const [appStyle, setAppStyle] = useState<AppStyle>({});
  
  return (
    <div
      className="desktop-app"
      style={{ ...appStyle, gridArea, cursor: "pointer" }}
      onPointerEnter={(event) => handlePointerEvent(event, setAppStyle)}
      onPointerLeave={(event) => handlePointerEvent(event, setAppStyle)}
      onClick={() => window.open(urlRedirect!)}
    >
      <div style={{ fontSize: "4rem" }}>
        <AppIcon appName={shortcutName} />
      </div>
      <span className="desktop-app-shortcut">
        <ShortcutIcon fontSize="small" />
      </span>
      <div>{shortcutName}</div>
    </div>
  );
}
